<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-divider />
      <section>
        <div id="word_cloud__box" class="cloud-box">
          <div id="word_cloud" ref="canvas" style="width: 80%; height: 360px; margin: 0 auto"></div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('標籤雲')
const pageDescription = ref('標籤雲')
const route = useRoute()
const { $wordcloud }: any = useNuxtApp()
const canvas = ref(null)

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

const tags = [
  ['政府統計', 12],
  ['政府支出', 6],
  ['政府預算', 8],
  ['主計', 3]
]
onMounted(() => {
  document.getElementById('word_cloud')!.addEventListener('wordcloudstop', () => {
    const word = document.getElementsByClassName('custom-class')
    for (let i = 0; i < word.length; i++) {
      word[i].setAttribute('tabindex', '0')
      word[i].addEventListener('keyup', (event: any) => {
        if (event.keyCode === 13) {
          const text = word[i].textContent
          navigateTo('/datasets/search?rtt=' + text)
        }
      })
    }
  })
  render()
})
const render = (wordSize: number = 10) => {
  $wordcloud(document.getElementById('word_cloud'), {
    list: tags,
    gridSize: 24,
    weightFactor: wordSize,
    fontFamily: 'Noto Sans TC',
    rotateRatio: 0,
    classes: 'custom-class',
    color: () => {
      const ind = customCrypt()
      return ['#E51010', '#A26A15', '#0079B7', '#068415'][ind]
    },
    click: (item: any) => {
      navigateTo('/datasets/search?rtt=' + item[0])
    },
    hover: (item: any) => {
      if (item !== undefined) {
        document.body.style.cursor = 'pointer'
        document.getElementById('word_cloud')!.title = `移至資料集列表，關鍵字: ${item[0]}`
      } else {
        document.body.style.cursor = 'default'
      }
    }
  })
}

const customCrypt = () => {
  const crypto = window.crypto || (window as any).msCrypto
  const array = new Uint32Array(1)
  crypto.getRandomValues(array) // Compliant for security-sensitive use cases
  return array[0] % 4
}
</script>
