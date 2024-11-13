// @ts-check
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    favicons({
      masterPicture: "./src/icon/favicon.svg",
      emitAssets: true,
      faviconsDarkMode: false,
      appName: "Yellowball",
      appShortName: "Yellowball",
      appDescription: "",
      lang: "en-GB",
      background: "transparent",
      theme_color: "#fff",
    }),
    tailwind({
      /**
       * Removes automatic insertion of TW styles, base/component/utilities.
       * Manually imported in global.css for custom order.
       **/
      applyBaseStyles: false,
    }),
  ],
});
