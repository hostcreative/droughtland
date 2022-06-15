const themeDir = __dirname + '/../../';
const enablePurge = (process.env.HUGO_ENVIRONMENT === 'production' ? true : false)

module.exports = {
  purge: {
    enabled: enablePurge,
    content: [themeDir + '/**/*.html'],
    options: {
      keyframes: true,
    },
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1600px',
    },
    colors: {
      rust: {
        darkest: '#5c1805',
        dark: '#bc2e07',
        DEFAULT: '#ea5830',
        light: '#f5a053',
        lighter: '#efcb71',
        lightest: '#fbf9d9',
      },
      green: {
        DEFAULT: '#72aa9f',
        light: '#8eb8a2',
        lighter: '#b1cfbf',
        lightest: '#e9f3ee',
      },
      white: {
        DEFAULT: '#ffffff',
        off: '#f2efe7',
        mid: '#c6ba9d',
      },
      black: {
        DEFAULT: '#030303',
        off: '#625d59',
      },
    },
    backgroundSize: {
      '50%': '50%',
    },
    spacing: {
      '0.5': '6px',
      '1': '9px',
      '2': '13px',
      '3': '18px',
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
      body: ['Roboto', 'sans-serif'],
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
        'wave-pattern': "url('/images/wave-pattern.svg')",
        'droughtland-tree': "url('/images/droughtland-tree.svg')",
        'droughtland-comics': "url('/images/droughtland-comics.png')",
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
