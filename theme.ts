import { createTheme, CSSVariablesResolver, Button, rem } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: {
    // // properties for all headings
    // fontWeight: '400',
    // fontFamily: 'Roboto',

    // properties for individual headings, all of them are optional
    sizes: {
      h3: {
        fontWeight: 'bold',
        fontSize: rem(28),
      },
      h4: { fontSize: rem(20), fontWeight: 'bold' },
    },
  },
  other: {
    purple100: '#F2ECFA',
    purple200: '#E5D5FA',
    purple300: '#D1B4F8',
    purple400: '#BD93F7',
    purple500: '#9854F6',
    purple600: '#541F9D',

    white: '#fff',
    grey100: '#F5F5F6',
    grey200: '#EAEBED',
    grey300: '#D5D6DC',
    grey500: '#ACADB9',
    grey600: '#7B7C88',
    black: '#232134',

    yellow: '#FAB005',
  },

  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'm') {
          return {
            root: {
              '--button-height': rem(40),
              '--button-padding-x': rem(20),
              '--button-fz': rem(14),
            },
          };
        }

        if (props.size === 's') {
          return {
            root: {
              '--button-height': rem(32),
              '--button-padding-x': rem(20),
              '--button-fz': rem(14),
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--color-purple-100': theme.other.purple100,
    '--color-purple-200': theme.other.purple200,
    '--color-purple-300': theme.other.purple300,
    '--color-purple-400': theme.other.purple400,
    '--color-purple-main': theme.other.purple500,
    '--color-purple-600': theme.other.purple600,

    '--color-white': theme.other.white,
    '--color-grey-100': theme.other.grey100,
    '--color-grey-200': theme.other.grey200,
    '--color-grey-300': theme.other.grey300,
    '--color-grey-500': theme.other.grey500,
    '--color-grey-600': theme.other.grey600,
    '--color-black': theme.other.black,

    '--color-yellow': theme.other.yellow,
  },
  light: {
    // '--mantine-color-deep-orange': theme.other.deepOrangeLight,
    '--input-bd-focus': 'var(--color-purple-main',
  },
  dark: {
    // '--mantine-color-deep-orange': theme.other.deepOrangeDark,
  },
});
