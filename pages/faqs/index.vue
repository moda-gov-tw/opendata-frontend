<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <div class="page-tool-bar">
        <div class="searchbar">
          <el-row :gutter="16" align="middle">
            <el-col>
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
                  <el-button faq-type="primary" size="large" class="searchbar-submit-btn">
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
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <el-radio-group v-model="faqType">
          <el-radio
            v-for="(item, index) in faqTypeOptions"
            :id="'radio' + item.id"
            :key="index"
            :label="item.id"
            border
            size="large"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
      </div>
      <br />
      <section>
        <ul class="faq-list">
          <li v-for="(item, index) in paginatedList" :key="index" class="faq-item">
            <nuxt-link :to="item.path" :title="item.title">{{ item.title }}</nuxt-link>
            <div class="color-hint">{{ item.publishDate }}</div>
            <div class="faq-item-content">{{ item.content }}</div>
          </li>
        </ul>
        <ElConfigProvider :locale="zhTW">
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :small="true"
            layout="total, prev, pager, next, jumper"
            :total="fagList.length"
            :hide-on-single-page="true"
          />
        </ElConfigProvider>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('最新消息')
const pageDescription = ref('最新消息')
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

const input = ref('')
const faqType = ref('all') // all, n01, n02, n03, n04, n05, n06
const faqTypeOptions = [
  {
    id: 'all',
    label: '全部'
  },
  {
    id: 'n01',
    label: '資料集上架公告'
  },
  {
    id: 'n02',
    label: '資料集下架公告'
  },
  {
    id: 'n03',
    label: '資料開放最新快訊'
  },
  {
    id: 'n04',
    label: '地方政府最新快訊'
  },
  {
    id: 'n05',
    label: '平臺維運公告'
  },
  {
    id: 'n06',
    label: '其他'
  }
]

const fagList = ref([
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '政府資料品質提升機制簡介',
    path: '/faqs/5932',
    publishDate: '2024-10-17',
    content:
      '依據「政府資料品質提升機制運作指引」，為能讓各機關充分瞭解其檢測結果之意義及未來修正方向，將依據實際檢測結果提供常見錯誤樣態說明及其建議修正方式，希冀協助各機關建立資料品質概念、逐步提升政府資料之可用性。'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  },
  {
    title: '加入會員可以享受哪些服務',
    path: '/faqs/5932',
    publishDate: '2024-11-01',
    content:
      '本平臺可使用我的E政府、google、facebook帳號登入使用，成為政府資料開放平臺的會員享有5大優勢'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return fagList.value.slice(start, end)
})

const { isRadio } = useJSAccessibility()
onMounted(() => {
  isRadio()
})
</script>
