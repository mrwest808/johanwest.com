// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

import astroRemark from '@astrojs/markdown-remark'

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: ['@astrojs/renderer-svelte'],
  markdownOptions: {
    render: [
      astroRemark,
      /** @type {import('@astrojs/markdown-remark').AstroMarkdownOptions} */ ({
        syntaxHighlight: 'shiki',
        shikiConfig: {
          theme: 'dracula',
        },
      }),
    ],
  },
})
