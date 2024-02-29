<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <ul v-if="rewardsList" class="od-list od-list--type2">
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
          :total="rewardsList.length"
          :hide-on-single-page="true"
        />
      </ElConfigProvider>
    </div>
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('獎勵活動專區')
const pageDescription = ref('獎勵活動專區')
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

const rewardsList = ref([
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2022頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2022獎勵活動獲獎名單：金質獎22名、人氣獎10名，共計32名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  },
  {
    image: {
      path: '/images/rewards.jpg'
    },
    title: '2021頒獎典禮獲獎名單',
    link: '/rewards/1',
    content: '2021獎勵活動獲獎名單：金質獎11名、人氣獎10名，共計21名。'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return rewardsList.value.slice(start, end)
})
</script>
