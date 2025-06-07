import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://funkstyr.github.io",
  base: process.env.NODE_ENV === "production" ? "base" : "",
  integrations: [
    starlight({
      title: "Base Docs",
      social: [
        {
          icon: "vercel",
          label: "Site",
          href: "https://base.gratis",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/funkstyr/base",
        },
      ],
      sidebar: [
        {
          label: "Docs",
          autogenerate: { directory: "docs" },
        },

        {
          label: "Journal",
          autogenerate: { directory: "journal" },
        },
      ],
    }),
  ],
});
