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
