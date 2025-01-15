import { defineConfig } from 'astro/config';
import favicons from 'astro-favicons';
import tailwind from '@astrojs/tailwind';
import htmlBeautifier from 'astro-html-beautifier';
import { generateSprite } from './src/utils/sprite';
import alpinejs from '@astrojs/alpinejs';
import * as terser from 'terser';

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
      sourcemap: false,
      cssCodeSplit: false,
      cssMinify: true,
      ssr: false,
      minify: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => id.includes('node_modules') ? 'vendor' : 'app',
          entryFileNames: (chunkInfo) => {
            return chunkInfo.name === 'vendor' 
              ? 'assets/vendor.[hash].js'
              : 'assets/app.[hash].js';
          },
          assetFileNames: 'assets/app.[name].[ext]',
        },
        plugins: [
          {
            name: 'selective-minify',
            async transform(code, id) {
              // Only apply minification to vendor chunks
              if (id.includes('node_modules')) {
                const result = await terser.minify(code, {
                  compress: true,
                  mangle: true,
                  format: {
                    comments: false
                  }
                });
                return {
                  code: result.code || '',
                  map: null
                };
              }
              return null; // Return null to skip transformation for non-vendor code
            }
          }
        ]
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
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    alpinejs()
  ],
});
