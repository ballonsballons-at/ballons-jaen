import {
  Container,
  Grid,
  Stack,
  Heading,
  Button,
  Box,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { settings } from 'constant/slider';
import { FC } from 'react';
import Slider from 'react-slick';
import { INewsSlides } from 'types/commonTypes';

interface IWhiteMobileSliderProps {
  slides: INewsSlides[];
  withoutImageVariant?: boolean;
}

const WhiteMobileSlider: FC<IWhiteMobileSliderProps> = ({
  withoutImageVariant = false,
  slides,
}) => {
  return (
    <Container maxW={CONTAINER_MAX_WIDTH}>
      <Slider {...settings} className="white_slider">
        {slides.map((slide, i) => (
          <Box key={i}>
            {!withoutImageVariant ? (
              <Stack
                mx="4"
                mt="24"
                mb="8"
                borderRadius="md"
                boxShadow="dark"
                py="8"
                pb="16"
                px="8"
                bg="white"
                flex="1"
                pt="20"
                align="center"
                justify="center">
                <Grid flex="1" placeItems="center" pos="relative" bg="red">
                  <Box
                    pos="absolute"
                    top="-40"
                    overflow="hidden"
                    boxSize={{ base: '9.375rem' }}
                    bg="gray.800"
                    borderRadius="full">
                    <Image src={slide.image} />
                  </Box>
                </Grid>
                <VStack gap="0" flex="1" textAlign="center">
                  <Text fontSize="sm" color="gray.700">
                    {slide.date}
                  </Text>
                  <Heading color="black.500" fontSize="md" fontWeight="semibold">
                    {slide.title}
                  </Heading>
                  <Text color="black.500" fontSize="sm">
                    {slide.text}
                  </Text>
                  <Button size={{ base: 'sm', md: 'md' }} variant="outline">
                    Mehr anzeigen
                  </Button>
                </VStack>
              </Stack>
            ) : (
              <>
                <Stack
                  mx="2"
                  mb="4"
                  boxShadow="light"
                  borderRadius="2xl"
                  bg="white"
                  px="8"
                  pt="8"
                  pb="20">
                  <Text fontSize="sm" fontStyle="italic" fontWeight="thin">
                    08.02.2022
                  </Text>
                  <Heading fontSize="md">Luftblasen Bouquets</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero
                    risus semper....
                  </Text>
                  <Box>
                    <Button size="sm" variant="outline">
                      Weiterlesen
                    </Button>
                  </Box>
                </Stack>
              </>
            )}
          </Box>
        ))}
      </Slider>
    </Container>
  );
};
export default WhiteMobileSlider;
