<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-divider />
      <section>
        <div class="cloud-box">
          <vue-word-cloud
            style="width: 80%; height: 360px; margin: 0 auto"
            :words="[
              ['政府統計', 1000],
              ['政府支出', 700],
              ['政府預算', 300],
              ['主計', 3]
            ]"
            :spacing="2"
            :font-size-ratio="2"
          >
            <template #default="{ text, weight, word }">
              <button
                :class="[
                  'btn-cloud',
                  weight >= 800
                    ? 'level1'
                    : weight >= 600 && weight < 800
                    ? 'level2'
                    : weight >= 400 && weight < 600
                    ? 'level3'
                    : weight >= 200 && weight < 400
                    ? 'level4'
                    : weight < 200
                    ? 'level5'
                    : ''
                ]"
                :title="`前往搜尋有關關鍵字 ${text} 的資料集`"
                @click="onWordClick(text)"
              >
                <span>{{ text }}</span>
              </button>
            </template>
          </vue-word-cloud>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('標籤雲')
const pageDescription = ref('標籤雲')
const route = useRoute()
const { VueWordCloud } = useWordCloud()

useHead({
  title: pageTitle,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: pageDescription.value
    },
    { hid: 'og:url', property: 'og:url', content: runtimeConfig.public.baseUrl + route.path },
    {
      hid: 'og:title',
      property: 'og:title',
      content: pageTitle.value + ' ｜ ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: pageDescription.value
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: runtimeConfig.public.baseUrl + route.path
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: pageTitle.value + ' ｜ ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: pageDescription.value
    }
  ]
})

const onWordClick = (text: string) => {
  navigateTo('/datasets/search?q=' + text)
}
</script>
