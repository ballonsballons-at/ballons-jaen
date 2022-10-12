import { extendTheme, ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react';

export const colors = {
  gray: {
    100: '#F4F4F4',
    500: '#E6E6E6',
    700: '#606060',
  },
  red: {
    500: '#E3000F',
    600: '#E3000F',
  },

  black: {
    500: '#333333',
  },
};
export const fonts = {
  body: `'Poppins', sans-serif`,
  heading: `'Poppins', sans-serif`,
  font_RB: `'Red Buttery', sans-serif`,
  font_Pro: `'Proyale', sans-serif`,
};
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    radii: {
      none: '0',
      sm: '.1875rem',
      base: '.3125rem',
      md: '.625rem',
      lg: '1.25rem',
      xl: '1.875rem',
      '2xl': '2.5rem',
      '3xl': '3.125rem',
      full: '625rem',
    },

    fontSizes: {
      xs: '0.75rem', // 12px
      sm: '.9375rem', // 15px
      md: '1.25rem', // 20px
      lg: '1.5rem', // 24px
      xl: '1.875rem', // 30px
      '2xl': '2.5rem', // 40px
      '3xl': '3.125rem', // 50px
      '4xl': '3.75rem', // 60px
      '5xl': '4.375rem', // 70px
      '6xl': '5rem', // 80px
      '7xl': '5.625rem', // 90px
      '8xl': '6.25rem', // 100px
      '9xl': '6.875rem', // 110px
      '10xl': '7.5rem', // 120px
    },

    shadows: {
      light: '0px 4px 10px rgba(0, 0, 0, 0.10)',
      dark: '0px 4px 10px rgba(0, 0, 0, 0.25)',
      darker: '0px 4px 10px rgba(0, 0, 0, 0.50)',
    },
    components: {
      Tag: {
        variants: {
          normal: {
            container: {
              bg: '#FCE5E7',
              color: 'red.500',
              borderRadius: 'full',
              px: { base: '2', md: '4' },
              py: '1',
              fontSize: { base: 'xs', md: 'sm' },
              span: {
                color: 'green',
              },
            },
          },
          white: {
            container: {
              bg: 'white',
              filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))',
              color: 'red.500',
              borderRadius: '.625rem',
              px: { base: '4', md: '4' },
              py: '1',
              fontSize: { base: 'xs', md: 'sm' },
              span: {
                color: 'green',
              },
            },
          },
        },
      },
      Button: {
        // The styles all button have in common
        baseStyle: {
          borderRadius: 'full',
          fontSize: '1.375rem',
          fontWeight: 'medium',
        },
        // Two sizes: sm and md
        sizes: {
          xs: {
            fontSize: 'sm',
            px: 5,
            py: 4,
          },
          sm: {
            fontSize: 'sm',
            px: '1.25rem',
            py: '.625rem',
          },
          md: {
            fontSize: 'md',
            px: '1.875rem',
            py: '.9375rem',
          },
          lg: {
            fontSize: '1.375rem',
            px: '1.875rem',
            py: '.9375rem',
          },
        },
        // Two variants: outline and solid
        variants: {
          outline: {
            // borderWidth: { base: '2px', md: '3px' },
            outline: 'none',
            boxShadow: {
              base: '0px 0px 0px 2px #E3000F inset',
              // md: '0px 0px 0px 3px #E3000F inset',
            },
          },
        },
      },

      Heading: {
        sizes: {
          // Heading
          // Example h5030 =  h = heading, 50px = max-font-size 30px = min-font-size
          h6020: {
            fontSize: { base: 'md', md: 'xl', lg: '2xl', xl: '4xl' },
          },
          h5030: {
            fontSize: { base: 'xl', lg: '2xl', xl: '3xl' },
          },
          h5020: {
            fontSize: { base: 'md', md: 'xl', lg: '2xl', xl: '3xl' },
          },
          h4015: {
            fontSize: { base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' },
          },
          h4020: {
            fontSize: { base: 'md', md: 'lg', lg: 'xl', xl: '2xl' },
          },
          h3015: {
            fontSize: { base: 'sm', md: 'lg', lg: 'xl' },
          },
          h2418: {
            fontSize: { base: '1.125rem', md: 'md', lg: 'lg' },
          },
          h8020: {
            fontSize: { base: 'md', md: '2xl', lg: '4xl', xl: '5xl', '2xl': '6xl' },
          },
        },
      },

      Text: {
        // The styles all button have in common
        baseStyle: {
          fontSize: 'md',
        },
        // Two sizes: sm and md
        sizes: {
          // Paragraph Text Sizes
          // Example b2015 =  b = body 20px = max-font-size 15px = min-font-size
          b2015: {
            fontSize: { base: 'sm', lg: 'md' },
          },
          b2012: {
            fontSize: { base: 'xs', lg: 'md' },
          },
          b2412: {
            fontSize: { base: 'xs', lg: 'lg' },
          },
          b2415: {
            fontSize: { base: 'sm', lg: 'lg' },
          },

          50: {
            fontSize: { base: 'xl', lg: '2xl', xl: '3xl' },
          },
          60: {
            fontSize: { base: 'xl', lg: '3xl', xl: '4xl' },
          },
          80: {
            fontSize: { base: 'xl', md: '2xl', lg: '5xl', xl: '6xl' },
          },
          100: {
            fontSize: { base: 'xl', md: '3xl', lg: '7xl', xl: '8xl' },
          },
          120: {
            fontSize: { base: 'xl', md: '4xl', lg: '8xl', xl: '10xl' },
            lineHeight: { md: '5rem' },
          },
        },

        variants: {
          cursive: {
            fontFamily: 'Red Buttery, sans-serif',
            fontWeight: 'normal',
            color: 'red.500',
          },
          light: {
            fontWeight: 'light',
          },
        },
      },
    },
    styles: {
      global: {
        'html, body': {
          background: '#f4f4f4',
        },
      },
    },
    config,

    colors,

    fonts,
  },
  withDefaultColorScheme({
    colorScheme: 'red',
  })
);

export default theme;
