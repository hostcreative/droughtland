module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      rust: {
        lightest: '#FFEFD8',
        light: '#E8A274',
        DEFAULT: '#E08B5A',
        dark: '#EE572D',
        darkest: '#A04121'
      },
      life: {
        light: '#D5E4E2',
        DEFAULT: '#94B6AF',
        dark: '#5E817A'
      },
      white: {
        DEFAULT: '#FFFFFF',
        dark: '#F3F1EB',
      },
      black: {
        light: '#48494A',
        DEFAULT: '#030303'
      }
    },
    spacing: {
      '0.5': '4px',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '64px',
      '8': '96px',
      '9': '128px',
      '10': '192px',
      '11': '256px',
      '12': '512px'
    },
    fontFamily: {
      body: ['Lato', 'sans-serif'],
      display: ['Playfair Display', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'wave-pattern': "url('src/assets/images/wave-pattern.svg')",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("daisyui"),
    // ...
  ],
}
