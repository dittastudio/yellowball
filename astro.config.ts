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
    // build: {
    //   minify: false,
    //   sourcemap: false,
    //   cssCodeSplit: false,
    //   rollupOptions: {
    //     output: {
    //       manualChunks: (id) => id.includes('node_modules') ? 'vendor' : 'app',
    //       entryFileNames: 'assets/app.js',
    //       assetFileNames: 'assets/app.[ext]',
    //     },
    //   },
    // },
    build: {
      sourcemap: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => id.includes('node_modules') ? 'vendor' : 'app',
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'vendor') {
              return 'assets/vendor.[name].min.js';
            }

            return 'assets/app.[name].js';
          },
          assetFileNames: 'assets/app.[name].[ext]',
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          defaults: false,
        },
        mangle: false,
        format: {
          beautify: true,
          indent_level: 2
        },
        ecma: 2020,
        module: true,
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
      masterPicture: './src/icons/favicon.svg',
      emitAssets: true,
      faviconsDarkMode: false,
      appName: 'Yellowball',
      appShortName: 'Yellowball',
      appDescription: '',
      lang: 'en-GB',
      background: 'transparent',
      theme_color: '#fff',
      // input: { 
      //   favicons: ['./src/icons/favicon.svg']
      // },
      // name: "Yellowball",
      // short_name: "Yellowball",
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