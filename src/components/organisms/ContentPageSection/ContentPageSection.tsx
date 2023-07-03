import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import {BallonButton} from '../../molecules/BallonButton'
import {
  connectBlock,
  Field,
  useField,
  useSectionBlockContext,
  useSectionField,
  UseSectionField,
  PhotoProvider
} from '@snek-at/jaen'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import Slider from 'react-slick'
import BallonGas from './BallonGas'

import {removeHtmlFromString} from '../../../common/utils'
import FourCard from '../FourCard/FourCard'
import ConvincedSection from './ConvincedSection'
import {useContactModal} from '../../../services/contact'

export interface ContentPageSectionProps {}

const CompareSection = connectBlock(
  () => {
    const [isCompareAToggled, setisCompareAToggled] = useState(true)

    return (
      <Stack divider={<Divider />} spacing="4">
        <VStack justifyContent="center" spacing="8">
          <Field.Text
            as={Heading}
            name="title"
            defaultValue="Titel"
            textAlign="center"
          />

          <ButtonGroup isAttached>
            <Field.Text
              as={Button}
              asAs="span"
              name="compare-button-a"
              defaultValue="Skizze"
              variant={!isCompareAToggled ? 'outline' : undefined}
              onClick={() => setisCompareAToggled(true)}
            />

            <Field.Text
              as={Button}
              asAs="span"
              name="compare-button-b"
              defaultValue="Umsetzung"
              variant={isCompareAToggled ? 'outline' : undefined}
              onClick={() => setisCompareAToggled(false)}
            />
          </ButtonGroup>

          <Field.Text
            style={{textAlign: 'center'}}
            display={isCompareAToggled ? 'block' : 'none'}
            name="description-a"
            defaultValue="Text"
          />

          <Field.Text
            style={{textAlign: 'center'}}
            display={!isCompareAToggled ? 'block' : 'none'}
            name="description-b"
            defaultValue="Text"
          />
        </VStack>

        <Box borderRadius={'lg'} overflow="hidden">
          <Field.Image
            name="compare-image-a"
            style={{
              display: isCompareAToggled ? 'block' : 'none'
            }}
          />

          <Field.Image
            name="compare-image-b"
            lightbox
            style={{
              display: !isCompareAToggled ? 'block' : 'none'
            }}
          />
        </Box>
      </Stack>
    )
  },
  {
    name: 'CompareSection',
    label: 'Vergleich'
  }
)

const ImageSideBySideSection = connectBlock(
  () => {
    return (
      <PhotoProvider>
        <VStack spacing="8">
          <Field.Text
            as={Heading}
            fontSize={{base: 'xl', md: '2xl', lg: '3xl', xl: '4xl'}}
            name="title"
            defaultValue="Titel"
            textAlign="center"
          />

          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={4}
            w="full"
            minH={{
              base: 'xs',
              md: 'sm',
              lg: 'md',
              xl: 'lg'
            }}>
            <GridItem colSpan={1} borderRadius={'lg'} overflow="hidden">
              <Field.Image name="image1" lightbox lightboxGroup />
            </GridItem>
            <GridItem colSpan={1} borderRadius={'lg'} overflow="hidden">
              <Field.Image name="image2" lightbox lightboxGroup />
            </GridItem>
          </Grid>
        </VStack>
      </PhotoProvider>
    )
  },
  {
    name: 'ImageSideBySideSection',
    label: 'Bilder nebeneinander'
  }
)

export const ImagesGallery3x3Section = connectBlock(
  () => {
    const mobileSliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000
    }

    return (
      <>
        <VStack
          py="4"
          display={{base: 'none', md: 'flex'}}
          pos="relative"
          gap={{base: '4', md: '8', lg: '10', xl: '14'}}
          w="full">
          <PhotoProvider maskOpacity={0.8}>
            <Grid templateColumns="repeat(3, 1fr)" gap={2} boxSize="full">
              {new Array(9).fill('').map((_, i) => {
                const imageFieldName = `images.${i}`
                return (
                  <Box
                    key={i}
                    p={0}
                    borderWidth="2px"
                    borderRadius="lg"
                    position="relative">
                    <Box
                      width="100%"
                      paddingBottom="100%" // Creates a square based on width #Image Hack!!!
                      position="relative">
                      <Box
                        objectFit="cover"
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        borderRadius="lg"
                        overflow="hidden">
                        <Field.Image
                          objectFit="cover"
                          name={imageFieldName}
                          lightboxGroup
                          lightbox
                        />
                      </Box>
                    </Box>
                  </Box>
                )
              })}
            </Grid>
          </PhotoProvider>
        </VStack>
        {/* for Mobile */}
        <Box
          // overflow="hidden"
          display={{base: 'block', md: 'none'}}
          sx={{
            'ul.slick-dots': {
              top: 'auto'
            },
            '.slick-slider, .slick-slide': {
              px: 2
            }
          }}>
          <PhotoProvider maskOpacity={0.8}>
            <Slider {...mobileSliderSettings}>
              {new Array(9).fill('').map((_, i) => {
                const imageFieldName = `images.${i}`

                return (
                  <Box
                    key={i}
                    _hover={{
                      transition: 'all 0.2s ease',
                      transform: {
                        md: 'scale(1.02) ',
                        lg: 'scale(1.02) '
                      }
                    }}
                    transition="ease-in 0.2s"
                    boxShadow="light"
                    borderRadius="lg"
                    overflow="hidden"
                    boxSize={{
                      base: 'xs',
                      md: 'sm',
                      lg: 'md',
                      xl: 'lg'
                    }}>
                    <Field.Image
                      objectFit="cover"
                      name={imageFieldName}
                      lightboxGroup
                      lightbox
                      //defaultValue={defaultImages[i]}
                    />
                  </Box>
                )
              })}
            </Slider>
          </PhotoProvider>
        </Box>
      </>
    )
  },
  {
    name: 'ImagesGallery3x3Section',
    label: 'Bildergalerie (3x3)'
  }
)

const FullWidthImageSection = connectBlock(
  () => {
    return (
      <Box py="4">
        <Field.Text
          as={Heading}
          textAlign="center"
          fontSize={{base: 'xl', md: '2xl', lg: '3xl', xl: '4xl'}}
          fontWeight="semibold"
          name="title"
          defaultValue="In Erinnerung behalten"
          //variant="cursive"
        />
        <Box
          my={{base: '4 !important', md: '12 !important'}}
          borderRadius={{base: '.625rem', md: '2rem'}}
          // minH={{
          //   base: "11.25rem",
          //   md: "18.75rem",
          //   lg: "25rem",
          //   xl: "29.375rem",
          // }}
          boxShadow="light"
          overflow="hidden"
          h={{
            base: '30vh',
            md: '50vh',
            lg: '60vh'
          }}>
          <Field.Image name="Bild" lightbox />
        </Box>
      </Box>
    )
  },
  {
    name: 'FullWidthImageSection',
    label: 'Bild (Volle Breite)'
  }
)

const TextSection = connectBlock(
  () => {
    return (
      <Field.Text
        textAlign="center"
        fontSize={{
          base: 'sm',
          md: 'md'
        }}
        name="text"
        defaultValue={`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
  tincidunt, nisl nec ultricies lacinia, nisl nunc aliquet nisl, nec
  lacinia nisl nunc vel nunc. Sed tincidunt, nisl nec ultricies
  lacinia, nisl nunc aliquet nisl, nec lacinia nisl nunc vel nunc.

  <br />

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
  tincidunt, nisl nec ultricies lacinia, nisl nunc aliquet nisl, nec
  lacinia nisl nunc vel nunc. Sed tincidunt, nisl nec ultricies
  lacinia, nisl nunc aliquet nisl, nec lacinia nisl nunc vel nunc.
`}
      />
    )
  },
  {
    name: 'TextSection',
    label: 'Text'
  }
)

const SubCategoryContentSection = connectBlock(
  () => {
    return (
      <>
        {/* <Box
          pos="absolute"
          display={{base: 'none', md: 'block'}}
          left={{
            md: '-28%',
            lg: '-20%',
            xl: '-18%',
            '2xl': '-16%'
          }}
          w="calc(20vw + 15vh)"
          h="60vh">
          <Field.Image
            name="sideImageLeft"
            label="Bild"
            defaultValue="/images/decorationen/ballons.png"
          />
        </Box> */}

        <Stack spacing={20}>
          <VStack spacing={12}>
            <Field.Text
              as={Heading}
              name="heading"
              fontSize={{base: 'xl', md: '2xl', lg: '3xl', xl: '4xl'}}
              fontWeight="semibold"
              textAlign="center"
              defaultValue="Überschrift"
            />
            <Field.Text
              fontSize={{
                base: 'sm',
                md: 'md'
              }}
              textAlign="center"
              name="Text"
              defaultValue={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam, atque iusto culpa libero nostrum sit fuga cumque sunt tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea praesentium, enim alias a nihil et aperiam

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora necessitatibus cupiditate explicabo facere, eligendi molestias Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusamus.
`}
            />
          </VStack>

          <Field.Section
            as={Stack}
            props={{spacing: 20, py: 8}}
            sectionProps={{
              py: {
                base: '4',
                md: '12'
              }
            }}
            name="content"
            label="Unterkategorie Inhalt"
            blocks={[
              ImagesGallery3x3Section,
              FullWidthImageSection,
              TextSection,
              CompareSection
            ]}
          />
        </Stack>
      </>
    )
  },
  {
    name: 'subCategoryContent',
    label: 'Unterkategorie'
  }
)

const CategoryContentSection = connectBlock(
  (props, i) => {
    const self = useSectionBlockContext()

    if (!self)
      throw new Error(
        'Something went terribly wrong. Maybe I should quit programming.'
      )

    return (
      <VStack spacing="20">
        <VStack
          pos={'relative'}
          w="full"
          py={{
            base: '4',
            md: '12'
          }}
          spacing="12">
          <Image
            zIndex="-999"
            pos="absolute"
            top={{base: '0rem'}}
            w={{base: '40%', md: '60%', lg: '70%', xl: '58%'}}
            left={{base: '0', lg: '-64px', xl: 0}}
            src="/images/decorationen/shapes/shape.svg"
          />
          <VStack pos="relative" zIndex="1">
            <Field.Text
              as={Heading}
              //variant="cursive"
              textAlign="center"
              fontSize={{base: 'xl', md: '2xl', lg: '3xl', xl: '4xl'}}
              name="title"
              defaultValue={`<i>Überschrift</i>`}
            />
            <Field.Text
              as={Heading}
              textAlign="center"
              fontSize={{base: 'lg', md: 'xl', lg: '2xl', xl: '3xl'}}
              name="subtitle"
              defaultValue="Unterüberschrift"
            />

            <Field.Text
              fontSize={{
                base: 'sm',
                md: 'md'
              }}
              textAlign="center"
              name="text"
              defaultValue="Text"
            />
          </VStack>
        </VStack>

        <Field.Section
          as={Stack}
          props={{spacing: 20, width: '100%'}}
          sectionProps={{
            py: {
              base: '4',
              md: '12'
            }
          }}
          name="subContentCategories"
          label="Kategorie Inhalt"
          blocks={[
            SubCategoryContentSection,
            ImagesGallery3x3Section,
            FullWidthImageSection,
            TextSection,
            CompareSection,
            ImageSideBySideSection
          ]}
        />
        {self.position % 2 === 0 ? <ConvincedSection /> : <BallonGas />}
      </VStack>
    )
  },
  {
    name: 'categoryContent',
    label: 'Kategorie'
  }
)

export const ContentPageSection: React.FC<ContentPageSectionProps> =
  forwardRef<HTMLDivElement>((props, ref) => {
    const refs = useRef<HTMLDivElement[]>([])

    const scrollToIndex = useCallback(
      (index: number) => {
        const top = refs.current[index]?.getBoundingClientRect().top ?? 0

        window?.scrollTo({
          top: window.pageYOffset + top + 5,
          behavior: 'smooth'
        })
      },
      [refs]
    )

    const contactModal = useContactModal()

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
      setIsOpen(false)
    }
    const onOpen = () => {
      setIsOpen(true)
    }

    const settings = {
      fieldName: 'categories',
      displayName: 'Kategorien'
    }

    const section = useSectionField(settings.fieldName, [])

    // add event listener to check which section is active

    const Links: React.FC = () => {
      const HeadingLink = ({
        index,
        id,
        sectionBlockPath
      }: {
        index: number
        id: string
        sectionBlockPath: UseSectionField['sectionPath']
      }) => {
        const field = useField<string>('title', 'IMA:TextField', {
          path: sectionBlockPath,
          id
        })

        const title = removeHtmlFromString(
          field.value ?? field.staticValue ?? `Unbekannt (${index})`
        )

        const [isActive, setIsActive] = useState(false)

        useEffect(() => {
          const handleScroll = () => {
            const rect = refs.current[index]?.getBoundingClientRect()

            if (!rect) return

            const offsetTop = rect.top + window.pageYOffset
            const offsetBottom = rect.bottom + window.pageYOffset

            if (offsetTop && offsetBottom) {
              if (
                window.pageYOffset >= offsetTop &&
                window.pageYOffset <= offsetBottom
              ) {
                setIsActive(true)
              } else {
                setIsActive(false)
              }
            }
          }

          window.addEventListener('scroll', handleScroll)

          return () => {
            window.removeEventListener('scroll', handleScroll)
          }
        }, [])

        return (
          <Box key={index} mb={{base: 4, md: 8}}>
            <Link
              color={isActive ? 'red' : 'black'}
              onClick={() => {
                scrollToIndex(index)

                onClose()
              }}>
              {title}
            </Link>
          </Box>
        )
      }

      return (
        <>
          {section.section.items.map((item, i) => {
            return (
              <HeadingLink
                key={i}
                index={i}
                id={item.id}
                sectionBlockPath={section.sectionPath}
              />
            )
          })}
        </>
      )
    }

    return (
      <Stack padding={{base: 0, md: 8}} spacing="24">
        <FourCard
          sectionFieldName={settings.fieldName}
          sectionDisplayName={settings.displayName}
          onCardClick={scrollToIndex}
        />
        <Flex direction={{base: 'column-reverse', md: 'row'}}>
          <Box w={{base: '100%', md: '75%'}} mr={{md: 4}}>
            <Box mx={{base: 0, md: 'auto'}} maxW="800px" overflow="hidden">
              {/* Your blog post content goes here */}
              <Field.Section
                as={Stack}
                props={{spacing: 20, position: 'relative', width: '100%'}}
                sectionProps={({count}) => ({
                  ref: (el: HTMLDivElement) => {
                    refs.current[count - 1] = el
                  },
                  scrollMarginTop: -20,
                  py: {
                    base: '4',
                    md: '12'
                  }
                })}
                name={settings.fieldName}
                label={settings.displayName}
                blocks={[CategoryContentSection]}
              />
            </Box>
          </Box>
          <Box w={{base: '100%', md: '25%'}}>
            <Box position="sticky" top={{base: '80px', md: '20%'}}>
              {/* Anfragen button with divider */}
              <Stack textAlign="center" mb={{base: 4, md: 8}}>
                <BallonButton
                  variant="solid"
                  size="md"
                  mx="auto"
                  onClick={() => {
                    contactModal.onOpen()
                  }}>
                  Jetzt anfragen
                </BallonButton>

                <Flex align="center">
                  <Divider />
                  <Link
                    fontSize="sm"
                    display={{base: 'block', md: 'none'}}
                    padding="2"
                    aria-label="Table of Contents"
                    onClick={onOpen}>
                    Inhaltsverzeichnis
                  </Link>
                  <Text
                    fontSize="sm"
                    p="2"
                    display={{
                      base: 'none',
                      md: 'block'
                    }}>
                    Inhaltsverzeichnis
                  </Text>
                  <Divider />
                </Flex>
              </Stack>

              <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Inhaltsverzeichnis</DrawerHeader>
                  <DrawerBody>
                    <Links />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
              {/* Table of contents on desktop */}
              <Box
                display={{base: 'none', md: 'block'}}
                position="sticky"
                top={{base: 'unset', md: '10%'}}>
                <Links />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Stack>
    )
  })

export default ContentPageSection
