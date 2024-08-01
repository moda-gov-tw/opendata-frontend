const config = {
  modules: ['@element-plus/nuxt', '@nuxt/image'],

  // pinia folder
  imports: {
    dirs: ['stores']
  },

  // 環境變數
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      websiteName: process.env.WEBSITE_NAME || '網站名稱',
      websiteDescription: process.env.WEBSITE_DESCRIPTION || '網站描述'
    }
  },

  typescript: {
    typeCheck: true
  },

  devtools: {
    enabled: false
  },

  elementPlus: {
    importStyle: false // using css @import for custom
  },
  plugins: ['~/plugins/wordcloud.client.js']
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(config)
