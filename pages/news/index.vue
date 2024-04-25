<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <div class="page-tool-bar">
        <div class="searchbar">
          <el-row :gutter="16" align="middle">
            <el-col :md="12">
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
            </el-col>
            <el-col :md="12">
              <el-button type="primary" size="large" @click="advSearchOpen = !advSearchOpen">
                進階搜尋
              </el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <el-radio-group v-model="newsType">
          <el-radio
            v-for="(item, index) in newsTypeOptions"
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
      <div>
        匯出搜尋結果清冊:
        <el-button type="primary" plain title="匯出搜尋結果清冊CSV">CSV</el-button>
        <el-button type="primary" plain title="匯出搜尋結果清冊XML">XML</el-button>
        <el-button type="primary" plain title="匯出搜尋結果清冊JSON">JSON</el-button>
      </div>
      <div>
        訂閱 RSS:
        <nuxt-link to="/" title="訂閱 RSS">
          <span class="visually-hidden">訂閱 RSS</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
            <path
              fill="orange"
              d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
            />
          </svg>
        </nuxt-link>
      </div>
      <section>
        <el-table
          :data="paginatedList"
          :default-sort="{ prop: 'publishDateTime', order: 'descending' }"
          empty-text="暫無資料"
        >
          <el-table-column prop="publishDate" label="發表日期" sortable width="160" />
          <el-table-column prop="comTitle" label="標題" sortable>
            <template #default="scope">
              <nuxt-link :to="scope.row.path" :title="`前往 ${scope.row.name}`">
                {{ scope.row.name }}
              </nuxt-link>
              <div>{{ scope.row.content }}</div>
            </template>
          </el-table-column>
        </el-table>
        <ElConfigProvider :locale="zhTW">
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :small="true"
            layout="total, prev, pager, next, jumper"
            :total="tableData.length"
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
const advSearchOpen = ref(false)
const input = ref('')
const newsType = ref('all') // 'all' | 'n01' | 'n02' | 'n03' | 'n04' | 'n05' | 'n06'
const newsTypeOptions = [
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

const tableData = ref([
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告',
    path: '/news/26918',
    content: '資料集下架公告'
  },
  {
    publishDate: '2024-11-08',
    name: '單位預算資料集下架公告 last',
    path: '/news/26918',
    content: '資料集下架公告 last'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return tableData.value.slice(start, end)
})

const { isRadio, addThScope } = useJSAccessibility()
onMounted(() => {
  isRadio()
  addThScope()
})
</script>
