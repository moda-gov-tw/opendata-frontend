// plugins/wordcloud.js
export default defineNuxtPlugin(async (nuxtApp) => {
  const WordCloud = await import('wordcloud')
  nuxtApp.provide('wordcloud', WordCloud.default)
})
