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
  modules: ["nuxt-icon", '@nuxtjs/i18n'],
  i18n: {
    // Module Options
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.json' },
      { code: 'pl', iso: 'pl-PL', file: 'pl-PL.json' },
    ],
    defaultLocale: 'en',
    fallbackLocale: 'en',
  },
});
