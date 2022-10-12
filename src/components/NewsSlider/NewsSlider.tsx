import { Box, Text } from '@chakra-ui/react';
import WhiteDesktopSlider from './WhiteDesktopSlider';
import WhiteMobileSlider from './WhiteMobileSlider';
import { FC } from 'react';
import { INewsSlides } from 'types/commonTypes';

interface INewsSlidesProps {
  slides: INewsSlides[];
  showNewsTitle?: boolean;
  withoutImageVariant?: boolean;
}

const NewsSlider: FC<INewsSlidesProps> = ({ withoutImageVariant, slides, showNewsTitle }) => {
  return (
    <>
      <Box px="4" my={{ md: '50', lg: 20 }}>
        <WhiteDesktopSlider showTitle={showNewsTitle} slides={slides} />
      </Box>

      {/* Form mobile */}
      <Box my="16" display={{ base: 'block', md: 'none' }}>
        {showNewsTitle && (
          <Text pl="8" variant="cursive" fontSize="xl">
            News
          </Text>
        )}
        <WhiteMobileSlider withoutImageVariant={withoutImageVariant} slides={slides} />
      </Box>
    </>
  );
};
export default NewsSlider;
