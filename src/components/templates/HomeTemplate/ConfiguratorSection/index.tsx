"use client"

import { useState } from "react"

import { Box, Button, Container, Flex, Grid, GridItem, Heading, Text, keyframes } from "@chakra-ui/react"
import { ArrowRight } from "lucide-react"
import { Heart } from "lucide-react"
import { Link } from "gatsby-plugin-jaen"
import { StaticImage } from "gatsby-plugin-image"
import { BallonButton } from "../../../molecules/BallonButton"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"

export function BalloonConfiguratorSection() {
  const [hovered, setHovered] = useState(false)

  const spinAnimation = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `

  const spinAnimationSlow = `${spinAnimation} 20s linear infinite`

  return (
    <Box as="section" py="20" bg="#f9f9f9">
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Grid px={{base: 0, sm: 4, md: 8}} templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="12" alignItems="center">
          <GridItem>
            <Flex direction="column" gap="8">
              <Box>
                <Heading
                  as="h2"
                  fontSize={{base: 'xl', md: '3xl', lg: '4xl'}}
 fontWeight="semibold"
 maxW="md"
                >
                 Gestalten & Schenken
                </Heading>
              </Box>

              <Box>
                <Text maxW="md" mb="6">
                  Personalisiere deine Ballons für jeden Anlass. Geburtstage, Hochzeiten, Firmenfeiern oder einfach so –
                  gestalte einzigartige Ballons, die Freude bringen.
                </Text>

                <Box pt="4">
                <BallonButton
                    as={Link}
                    href="https://my.ballons-ballons.at"
                    target="_blank"
                  
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      rightIcon={
                        <Box
                          as={ArrowRight}
                          h="5"
                          w="5"
                          transition="transform 0.3s"
                          transform={hovered ? "translateX(4px)" : "translateX(0)"}
                        />
                      }
                    >
                      Zum Konfigurator
                    </BallonButton>
                </Box>
              </Box>
            </Flex>
          </GridItem>

          <GridItem position="relative">
            <Box borderRadius="lg" overflow="hidden" boxShadow="2xl">
              <StaticImage
                src="./configurator.png"
                alt="Ballons & Ballons Konfigurator"
               
                objectFit="contain"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>

            <Box
              position="absolute"
              bottom={{ base: "-10", md: "auto" }}
              left={{ base: "-10", md: "-10" }}
              top={{ base: "auto", md: "-10" }}
              w={{ base: "24", md: "32" }}
              h={{ base: "24", md: "32" }}
              bg="white"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="2"
              boxShadow="lg"
            >
              <Box
                position="relative"
                w="full"
                h="full"
                borderRadius="full"
                borderWidth="2px"
                borderColor="black"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  as={Heart}
                  h={{ base: "10", md: "12" }}
                  w={{ base: "10", md: "12" }}
                  color="red.600"
                  fill="red.600"
                />
                <Box
                  position="absolute"
                  w="full"
                  h="full"
                  borderRadius="full"
                  borderWidth="2px"
                  borderColor="black"
                  borderStyle="dashed"
                  animation={spinAnimationSlow}
                />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
