<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <div class="page-title-bar">
        <h2>{{ pageTitle }}</h2>
        <el-button
          size="large"
          type="success"
          title="前往 新增活化應用專區"
          @click="navigateTo('/applications/add')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
          <span>新增</span>
        </el-button>
      </div>
      <nuxt-link to="/declaration" title="前往 民間回饋區免責聲明書">
        民間回饋區免責聲明書(中英文版)
      </nuxt-link>
      <el-divider />
      <div class="page-tool-bar">
        <div class="searchbar">
          <el-row>
            <el-col :span="20">
              <label>
                <el-input
                  id="searchbar-input"
                  v-model="input"
                  accesskey="S"
                  placeholder="請輸入關鍵字"
                  size="large"
                  label="請輸入關鍵字搜尋"
                />
              </label>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" size="large" class="searchbar-submit-btn">
                <span class="visually-hidden">搜尋</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  />
                </svg>
              </el-button>
            </el-col>
          </el-row>
        </div>
        <label for="term_select" class="visually-hidden">請選擇排序</label>
        <el-select
          id="term_select"
          v-model="currentTerm"
          placeholder="請選擇排序"
          size="large"
          aria-label="選擇排序"
        >
          <el-option v-for="(item, index) in termOptions" :key="index" :value="item" :label="item">
          </el-option>
        </el-select>
      </div>
      <div>
        匯出搜尋結果清冊:
        <el-button type="primary" plain title="匯出搜尋結果清冊CSV">CSV</el-button>
        <el-button type="primary" plain title="匯出搜尋結果清冊XML">XML</el-button>
        <el-button type="primary" plain title="匯出搜尋結果清冊JSON">JSON</el-button>
      </div>
      <br />
      <ul v-if="appList" class="od-list od-list--type1">
        <li v-for="(item, index) in paginatedList" :key="index" class="od-item">
          <div class="od-item-image">
            <img :src="item.image.path" :alt="`${item.title}的封面照片`" />
          </div>
          <div class="od-item-container">
            <nuxt-link :to="item.link" class="od-item-title" :title="`前往 ${item.title}`">
              {{ item.title }}
            </nuxt-link>
            <div class="od-item-subinfo">
              創作者： {{ item.author }}&nbsp;&nbsp;&nbsp;更新時間：{{ item.modifyDate }}
            </div>
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
          :total="appList.length"
          :hide-on-single-page="true"
        />
      </ElConfigProvider>
    </div>
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('活化應用專區')
const pageDescription = ref('活化應用專區')
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

const appList = ref([
  {
    image: {
      path: '/images/app-demo.png'
    },
    title: '寵物找爸媽',
    link: '/applications/1',
    author: 'MeetStudio',
    modifyDate: '2024-10-17',
    content: '幫助尋找你的寵物夥伴'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '台北垃圾車',
    link: '/applications/1',
    author: 'm9270035',
    modifyDate: '2024-09-06',
    content: '提供台北垃圾車出沒時間與位置'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return appList.value.slice(start, end)
})

const input = ref('')
const currentTerm = ref('更新日期新至舊')
const termOptions = ['更新日期新至舊', '更新日期舊至新']
</script>
