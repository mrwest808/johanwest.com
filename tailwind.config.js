function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}))`
    }
    return `hsl(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    extend: {
      colors: {
        background: withOpacityValue('--color-background'),
      },
      typography: {
        DEFAULT: {
          css: {
            // ...
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
