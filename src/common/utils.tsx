import {Box, useToken} from '@chakra-ui/react'
import {getColor} from '@chakra-ui/theme-tools'
import {
  getFormattedProductPrices,
  ShopifyProduct
} from '@snek-at/gatsby-theme-shopify'
import React from 'react'
import theme from '../styles/theme'
import {getProductMetafields} from './getProductMetafields'

export const isChrome =
  typeof window !== 'undefined'
    ? /Chrome/.test(window.navigator.userAgent)
    : false

/**
 * Create a array of empty boxes to fill the grid
 * if there are less items than the grid size (6-total).
 *
 * @param items
 * @returns
 */
export function gridPadBoxes(items: any[], gridSize: number = 6, Filler = Box) {
  const toFill = gridSize - (items.length % gridSize || gridSize)

  if (toFill > 0) {
    return Array.from({length: toFill}, (_, index) => (
      <Filler key={`grid-pad-${index}`} />
    ))
  }
  return []
}

export function replaceHexColorsInHTML(
  html: string,
  coloraHex: string,
  colorbHex: string
) {
  const re = new RegExp(coloraHex, 'g')
  return html.replace(re, colorbHex)
}

export function useIsInViewport(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  const observer = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      return new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      })
    }
  }, [])

  React.useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current)

      return () => {
        observer?.disconnect()
      }
    }
  }, [ref, observer])

  return isIntersecting
}

export function removeHtmlFromString(htmlString: string) {
  // Remove HTML tags
  const htmlStringWithoutTags = htmlString.replace(/(<([^>]+)>)/gi, '')

  // Decode HTML entities
  const decodedHtmlString = htmlStringWithoutTags.replace(
    /&([a-z\d]+|#\d+);/gi,
    (match, entity) => {
      switch (entity) {
        case 'amp':
          return '&'
        case 'lt':
          return '<'
        case 'gt':
          return '>'
        case 'quot':
          return '"'
        case 'apos':
          return "'"
        default:
          if (entity.charAt(0) === '#') {
            const code = parseInt(
              entity.substr(1),
              entity.charAt(1) === 'x' ? 16 : 10
            )
            if (!isNaN(code)) {
              return String.fromCharCode(code)
            }
          }
          return match
      }
    }
  )

  return decodedHtmlString
}

export function formatPrice(
  value: number,
  opts: {locale?: string; currency?: string} = {}
) {
  const {locale = 'de-DE', currency = 'USD'} = opts
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2
  })

  return formatter.format(value)
}

export const getProductPrices = (
  product: ShopifyProduct,
  opts: {isWholesale: boolean}
): {
  priceFormatted: string
  compareAtPriceFormatted: string | null
  discountFormatted: string | null
  wholesalePrice: number | null
} => {
  const metafields = getProductMetafields(product)
  const prices = getFormattedProductPrices(product)
  let wholesalePrice = null

  if (opts.isWholesale) {
    const {amount: price, currency_code: currency} = JSON.parse(
      metafields.wholesale?.price || '{}'
    )

    wholesalePrice = price

    prices.priceFormatted = formatPrice(price, {currency})
  }

  return {
    ...prices,
    wholesalePrice
  }
}

export const getThemeColor = (color: string) =>
  getColor(theme, color, useToken('colors', color, 'green'))

export const today = () => {
  return new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const validateUrl = (value: string): boolean => {
  const urlPattern = /^(https?:\/\/)?([^\s./]+\.[^\s]{2,}|\/[^/\s]+)+$/i
  return urlPattern.test(value)
}
