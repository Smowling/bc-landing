// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      NUXT_APP_WEBFORM_ACCESS_KEY: process.env.NUXT_APP_WEBFORM_ACCESS_KEY,
    },
  },
  modules: ["nuxt-icon"],
});
