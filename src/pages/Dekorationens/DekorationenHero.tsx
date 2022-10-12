import { Box, Button, Container, Image, Stack, Text, VStack } from '@chakra-ui/react';
import NextArrow from 'components/CustomSlider/NextArrow';
import PrevArrow from 'components/CustomSlider/PrevArrow';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
interface IDekorationenHeroProps {}

export const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DekorationenHero: FC<IDekorationenHeroProps> = () => {
  const slides = [
    {
      image: 'images/decorationen/slider/slider_image.png',
    },
    {
      image: 'images/decorationen/slider/slider_image.png',
    },
  ];

  return (
    <Stack pos="relative">
      <VStack
        pos="relative"
        top={{ base: '4.25rem', md: '10.25rem', lg: '14.25rem', xl: '16.25rem' }}
        mt={{ md: '-6.25rem', lg: '-8.25rem', xl: '-10.25rem' }}>
        <Text
          lineHeight={{ md: '50px', lg: '70px' }}
          as="h1"
          variant="cursive"
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl', xl: '6xl' }}>
          Dekorationen
        </Text>
        <Text pb="4" textAlign="center" fontSize={{ base: 'sm', md: 'md', '2xl': 'lg' }}>
          Wir dekorieren deine nächste Party. <br /> Egal ob Hochzeit, Firmenfeier, Geburtstag{' '}
          <br /> oder dein ganz eigener Anlass.
        </Text>
        <Button size={{ md: 'sm', xl: 'lg' }} display={{ base: 'none', md: 'flex' }}>
          Persönlichen Termin vereinbaren{' '}
        </Button>
        <Button size="xs" display={{ base: 'flex', md: 'none' }}>
          Termin vereinbaren{' '}
        </Button>
      </VStack>

      <Stack pos="relative" maxH="93.75rem" overflow="hidden">
        <Box pos="absolute" bottom="0" w="full">
          <Container maxW={CONTAINER_MAX_WIDTH} mb={{ base: '0', md: '16' }}>
            <Slider {...settings} className="big_slider">
              {slides.map((slide, index) => (
                <Box key={index}>
                  <Box
                    m={{ base: 2, md: 4 }}
                    borderRadius={{ base: '8', md: '16', lg: '24' }}
                    overflow="hidden"
                    boxShadow={{ base: 'light', md: 'dark' }}>
                    <Image w="100%" src={slide.image} />
                  </Box>
                </Box>
              ))}
            </Slider>
          </Container>
        </Box>
        <Image src="images/decorationen/dekorationen_hero_bg.svg" alt="decorationen" />
      </Stack>
    </Stack>
  );
};
export default DekorationenHero;
