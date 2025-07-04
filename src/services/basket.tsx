import {
  getFormattedProductPrices,
  withStoreContext
} from '@snek-at/gatsby-theme-shopify'
import {sendTemplateMail} from 'gatsby-jaen-mailpress'
import {doNotConvertToString} from 'snek-query'
import React, {useCallback, useMemo} from 'react'

import {BasketDrawer} from '../components/organisms/BasketDrawer'

import {checkUserRoles, useAuth} from 'jaen'
import {useToast} from '@chakra-ui/react'
import {OrderFormValues, OrderModal} from '../components/organisms/OrderModal'
import {getProductPrices} from '../common/utils'

export interface BaseketContextProps {
  onOpen: () => void
  onClose: () => void
  addProduct: (args: {
    variantId: string
    quantity: number
    stepperQuantity: number
    wholesalePrice: number | null
  }) => void
  checkout: ShopifyBuy.Checkout | null
}

export const BasketContext = React.createContext<BaseketContextProps>({
  onOpen: () => {},
  onClose: () => {},
  addProduct: () => {},
  checkout: null
})

export const useBasket = () => {
  if (!BasketContext) {
    throw new Error('useBasket must be used within a BasketProvider')
  }

  return React.useContext(BasketContext)
}

const cleanLineItems = (lineItems: any[] = []) => {
  // Remove all line items that have a variant of null

  return lineItems.filter(lineItem => lineItem.variant !== null)
}

export interface BasketDrawerProps {
  children: React.ReactNode
}

export const BasketDrawerProvider = withStoreContext<BasketDrawerProps>(
  props => {
    const [open, setOpen] = React.useState(false)

    const toast = useToast()

    const [checkout, setCheckout] = React.useState<ShopifyBuy.Checkout | null>(
      null
    )

    const auth = useAuth()

    const isRealWholesale = checkUserRoles(auth.user, ['wholesale'])

    React.useEffect(() => {
      void createOrFetchCheckout()
    }, [open])

    const createOrFetchCheckout = useCallback(async () => {
      const checkoutId = localStorage.getItem('checkoutId')

      if (checkoutId) {
        const newCheckout = await props.client.checkout.fetch(checkoutId)

        if (newCheckout) {
          setCheckout(newCheckout)
          return newCheckout
        }
      }

      const checkout = await props.client.checkout.create()
      setCheckout(checkout)

      localStorage.setItem('checkoutId', checkout.id.toString())

      return checkout
    }, [])

    const onOpen = () => {
      setOpen(true)
    }

    const onClose = () => {
      setOpen(false)
    }

    const addProduct = async ({
      stepperQuantity,
      quantity,
      wholesalePrice,
      ...args
    }: {
      variantId: string
      quantity: number
      stepperQuantity: number
      wholesalePrice: number | null
    }) => {
      const c = await createOrFetchCheckout()

      const newCheckout = await props.client.checkout.addLineItems(c.id, [
        {
          ...args,
          quantity: quantity,
          customAttributes: [
            {
              key: 'stepperQuantity',
              value: stepperQuantity.toString() || '1'
            },

            {
              key: 'wholesalePrice',
              value: wholesalePrice?.toString() || ''
            }
          ]
        }
      ])

      setCheckout(newCheckout)
      onOpen()
    }

    const updateProduct = async (args: {id: string; quantity: number}) => {
      const c = await createOrFetchCheckout()

      const newCheckout = await props.client.checkout.updateLineItems(
        c.id as string,
        [args]
      )

      setCheckout(newCheckout)
    }

    const removeProduct = async (id: string) => {
      const c = await createOrFetchCheckout()

      try {
        const newCheckout = await props.client.checkout.removeLineItems(
          c.id as string,
          [id]
        )

        setCheckout(newCheckout)
      } catch (e) {
        console.log(e)

        setCheckout(null)
      }
    }

    const [meta, setMeta] = React.useState<Record<string, any> | null>(null)
    const [isOrderOpen, setIsOrderOpen] = React.useState(false)

    const authentication = useAuth()

    const onOrderClose = () => {
      setIsOrderOpen(false)
    }

    const cleanedLineItems = useMemo(() => {
      const items = cleanLineItems(checkout?.lineItems)

      // overwrite lineItem.variant?.price.amount, with the actual price if it is a wholesale user
      if (isRealWholesale) {
        return items.map(item => {
          const variant = item.variant

          if (!variant) {
            return item
          }

          const amount = item.customAttributes?.find(
            (attr: {key: string}) => attr.key === 'wholesalePrice'
          )?.value

          return {
            ...item,
            variant: {
              ...variant,
              price: {
                ...variant.price,
                amount
              }
            }
          }
        })
      }

      return items
    }, [checkout?.lineItems, isRealWholesale])

    const lineItemsSubtotalPrice = useMemo(() => {
      // get sum of all line items if wholesale
      if (isRealWholesale) {
        return cleanedLineItems.reduce((acc, item) => {
          const price = item.variant?.price.amount

          const quantity = item.quantity

          if (!price) {
            return acc
          }

          return acc + parseFloat(price) * quantity
        }, 0)
      }

      // @ts-expect-error
      return parseFloat(checkout?.lineItemsSubtotalPrice?.amount || '0')
    }, [checkout?.lineItemsSubtotalPrice, cleanedLineItems, isRealWholesale])

    const onOrderSubmit = async (data: OrderFormValues): Promise<void> => {
      // sleep 3 seconds to simulate a network request

      console.log(data, meta)

      const order = await createOrFetchCheckout()

      const res = await sendTemplateMail('95b97961-a809-489a-86bc-cd137bf3e681', {
        envelope: {
          replyTo: data.email
        },
        values: {
          cart: cleanedLineItems.map(lineItem => ({
            name: lineItem.title.toString(),
            quantity: lineItem.quantity,
            sku: lineItem.variant?.sku,
            price: lineItem.variant?.price.amount,
            imgSrc: lineItem.variant?.image?.src
          })),
          order: {
            id: order.id,
            totalPrice: order.totalPrice.amount,
            currency: order.totalPrice.currencyCode,
            note: data.message
          },
          customer: {
            emailAddress: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone
          },
          wholesale: isRealWholesale,
          email: data.email,
          message: data.message,
          invokedOnUrl: meta?.url
        }

      })

      if (!res.ok) {
        // Deutsch
        toast({
          title: 'Fehler',
          description: 'Es ist ein Fehler aufgetreten.',
          status: 'error',
          duration: 5000,
          isClosable: true
        })
      } else {
        toast({
          title: 'Erfolg',
          description: `Ihre Anfrage wurde erfolgreich abgeschickt. Sie erhalten eine Bestätigung per E-Mail.`,
          status: 'success',
          duration: 5000,
          isClosable: true
        })

        onClose()
        onOrderClose()
      }

      setCheckout(null)
      localStorage.removeItem('checkoutId')
    }

    const fixedValues = useMemo(() => {
      if (!authentication.user) {
        return undefined
      }

      return {
        firstName: authentication?.user?.profile?.given_name,
        lastName: authentication?.user?.profile?.family_name,
        email: authentication?.user?.profile?.email
      }
    }, [authentication.user])

    const onCheckout = async (): Promise<void> => {
      onClose()
      setIsOrderOpen(true)
      // if (wholesale) {
      //   const emailAddress = auth.user?.email

      //   if (!emailAddress) {
      //     throw new Error('No email address')
      //   }

      //   const c = await createOrFetchCheckout()

      //   const [_, errors] = await sq.mutate(m =>
      //     m.mailpressMailSchedule({
      //       envelope: {
      //         replyTo: {
      //           value: emailAddress,
      //           type: doNotConvertToString('EMAIL_ADDRESS') as any
      //         }
      //       },
      //       template: {
      //         id: 'BALLOONS_ORDER_EMAIL',
      //         values: {
      //           cart: checkout?.lineItems.map(lineItem => ({
      //             name: lineItem.title.toString(),
      //             quantity: lineItem.quantity,
      //             sku: lineItem.variant?.sku,
      //             price: lineItem.variant?.price.amount,
      //             imgSrc: lineItem.variant?.image?.src
      //           })),
      //           order: {
      //             id: c.id,
      //             totalPrice: c.totalPrice.amount,
      //             currency: c.totalPrice.currencyCode
      //           },
      //           customer: {
      //             fullName: auth.user?.name,
      //             emailAddress
      //           }
      //         }
      //       }
      //     })
      //   )

      //   if (errors) {
      //     // Deutsch
      //     toast({
      //       title: 'Fehler',
      //       description: 'Es ist ein Fehler aufgetreten.',
      //       status: 'error',
      //       duration: 5000,
      //       isClosable: true
      //     })
      //   } else {
      //     toast({
      //       title: 'Erfolg',
      //       description: `Ihre Bestellung wurde erfolgreich abgeschickt. Sie erhalten eine Bestätigung per E-Mail.`,
      //       status: 'success',
      //       duration: 5000,
      //       isClosable: true
      //     })

      //     onClose()
      //   }
      // } else {
      //   if (checkout?.webUrl) {
      //     window.open(checkout?.webUrl, '_blank')
      //     alert('onCheckout')
      //   }
      // }

      // setCheckout(null)
      // localStorage.removeItem('checkoutId')
    }

    return (
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      <BasketContext.Provider value={{onOpen, onClose, addProduct, checkout}}>
        <BasketDrawer
          isOpen={open}
          onClose={onClose}
          products={cleanedLineItems}
          wholesale={isRealWholesale}
          requestCheckout={true}
          subtotal={lineItemsSubtotalPrice}
          onProductQuantityChange={(id, quantity) => {
            void updateProduct({id, quantity})
          }}
          onProductRemove={id => {
            void removeProduct(id)
          }}
          onClickCheckout={onCheckout}
        />
        {props.children}
        <OrderModal
          isOpen={isOrderOpen}
          onClose={() => {
            onOrderClose()

            setOpen(true)
          }}
          onSubmit={onOrderSubmit}
          fixedValues={fixedValues}
          products={cleanedLineItems}
        />
      </BasketContext.Provider>
    )
  }
)
