<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <ul v-if="coursesList" class="od-list od-list--type2">
        <li v-for="(item, index) in paginatedList" :key="index" class="od-item">
          <div class="od-item-image">
            <img :src="item.image.path" :alt="`${item.title}的封面照片`" />
          </div>
          <div class="od-item-container">
            <nuxt-link :to="item.link" class="od-item-title" :title="`前往 ${item.title}`">
              {{ item.title }}
            </nuxt-link>
            <div class="od-item-content">{{ item.content }}</div>
          </div>
        </li>
      </ul>
      <ElConfigProvider :locale="zhTW">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :small="true"
          layout="total, prev, pager, next, jumper"
          :total="coursesList.length"
          :hide-on-single-page="true"
        />
      </ElConfigProvider>
    </div>
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('教育資源專區')
const pageDescription = ref('教育資源專區')
const route = useRoute()

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

const coursesList = ref([
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年政府資料開放平臺資料品質教育訓練',
    link: '/courses/1',
    content:
      '因應政府資料開放平臺啟用資料品質檢核功能，辦理資料品質教育訓練，以提升機關同仁對於資料品質之認知。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '111年度政府資料開放平臺使用說明',
    link: '/courses/1',
    content:
      '政府資料開放平臺使用教育訓練影片，內容包含前臺民眾使用互動之功能，也會針對後臺不同權限之功能進行講解。'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return coursesList.value.slice(start, end)
})
</script>
