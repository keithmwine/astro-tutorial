// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://earnest-bienenstitch-6dd1bd.netlify.app",
  integrations: [preact()]
});