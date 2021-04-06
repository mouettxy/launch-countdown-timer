module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,vue}'],
  darkMode: false,
  theme: {
    fontFamily: {
      default: 'var(--font-family)',
    },

    screens: {
      sm: { min: '1px', max: '375px' },
      lg: { min: '376px', max: '1980' },
    },

    extend: {
      backgroundImage: {
        facebook: 'var(--icon-facebook)',
        instagram: 'var(--icon-instagram)',
        pinterest: 'var(--icon-pinterest)',
        hills: 'var(--img-hills)',
        stars: 'var(--img-stars)',
      },

      colors: {
        'dark-blue': 'var(--color-dark-blue)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        white: 'var(--color-white)',
        dark: 'var(--color-dark)',
      },
    },

    variants: {
      extend: {},
    },

    plugins: [],
  },
}
