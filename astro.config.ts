import { defineConfig } from 'astro/config';
import favicons from 'astro-favicons';
import tailwind from '@astrojs/tailwind';
import htmlBeautifier from 'astro-html-beautifier';
import { generateSprite } from './src/utils/sprite';

import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  compressHTML: false,
  scopedStyleStrategy: 'where',
  build: {
    format: 'preserve',
    assets: 'assets',
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      minify: true,
      sourcemap: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: () => 'app',
          entryFileNames: 'assets/app.[hash].js',
          chunkFileNames: (_chunkInfo) => {
            // console.log(chunkInfo)
            return 'assets/app.[hash].js'
          },
          assetFileNames: 'assets/app.[hash].[ext]',
        },
      },
    },
  },
  integrations: [
    generateSprite(),
    htmlBeautifier({
      indent_size: 2,
      indent_char: ' ',
      max_preserve_newlines: 1,
      preserve_newlines: false,
      keep_array_indentation: false,
      break_chained_methods: false,
      indent_scripts: 'keep',
      brace_style: 'collapse',
      space_before_conditional: false,
      unescape_strings: false,
      jslint_happy: false,
      end_with_newline: false,
      wrap_line_length: 0,
      indent_inner_html: false,
      comma_first: false,
      e4x: false,
      indent_empty_lines: false,
    }),
    favicons({
      input: { 
        favicons: ['./src/icons/favicon.svg']
      },
      name: "Yellowball",
      short_name: "Yellowball",
      // icons: {
      //   favicons: true,
      //   android: true,
      //   appleIcon: true,
      //   appleStartup: true,
      //   windows: true,
      //   yandex: true,
      // },
      // pixel_art: true,
      // manifestMaskable: false,
      // output: {
      //   images: true,
      //   files: true,
      //   html: true,
      // },
    }),
    tailwind({
      /**
       * Removes automatic insertion of TW styles, base/component/utilities.
       * Manually imported in global.css for custom order.
       **/
      applyBaseStyles: false,
    }),
    alpinejs()
  ],
});