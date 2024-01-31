import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), svelte(), vue(), icon()]
});