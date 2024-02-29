<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-tabs v-model="Tab">
        <el-tab-pane label="資料集統計" name="dataset">
          <div>
            匯出搜尋結果清冊:
            <el-button type="primary" plain title="匯出搜尋結果清冊CSV">CSV</el-button>
            <el-button type="primary" plain title="匯出搜尋結果清冊XML">XML</el-button>
            <el-button type="primary" plain title="匯出搜尋結果清冊JSON">JSON</el-button>
          </div>
          <section>
            <el-table
              :data="paginatedList"
              :default-sort="{ prop: 'publishDate', order: 'descending' }"
              empty-text="暫無資料"
            >
              <el-table-column prop="name" label="資料集名稱" sortable>
                <template #default="scope">
                  <nuxt-link :to="scope.row.path" :title="`前往資料集 ${scope.row.name}`">
                    {{ scope.row.name }}
                  </nuxt-link>
                </template>
              </el-table-column>
              <el-table-column prop="viewCount" label="瀏覽次數" sortable width="120" />
              <el-table-column prop="downloadCount" label="下載次數" sortable width="120" />
              <el-table-column prop="voteAveragePercent" label="資料集評分" sortable>
                <template #default="scope">
                  <el-rate
                    v-model="scope.row.voteAveragePercent"
                    :score-template="`${scope.row.voteAveragePercent}顆評分`"
                    disabled
                    show-score
                    text-color="#a86500"
                  />
                </template>
              </el-table-column>
              <el-table-column prop="publishDate" label="上架日期" sortable width="120" />
              <el-table-column prop="status" label="資料集狀態" width="120" />
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
        </el-tab-pane>
        <el-tab-pane label="資料分類統計" name="category">
          <div>
            匯出搜尋結果清冊:
            <el-button type="primary" plain title="匯出搜尋結果清冊CSV">CSV</el-button>
            <el-button type="primary" plain title="匯出搜尋結果清冊XML">XML</el-button>
            <el-button type="primary" plain title="匯出搜尋結果清冊JSON">JSON</el-button>
          </div>
          <section>
            <el-table
              :data="paginatedList2"
              :default-sort="{ prop: 'catName', order: 'ascending' }"
              empty-text="暫無資料"
            >
              <el-table-column prop="catName" label="服務名稱" sortable>
                <template #default="scope">
                  <nuxt-link :to="scope.row.path" :title="`前往搜尋 ${scope.row.name} 的資料集`">
                    {{ scope.row.catName }}
                  </nuxt-link>
                </template>
              </el-table-column>
              <el-table-column
                prop="datasetsCount"
                label="資料集總數"
                align="right"
                sortable
                width="140"
              />
              <el-table-column
                prop="viewCount"
                label="瀏覽次數"
                align="right"
                sortable
                width="120"
              />
            </el-table>
            <ElConfigProvider :locale="zhTW">
              <el-pagination
                v-model:current-page="currentPage2"
                v-model:page-size="pageSize2"
                :small="true"
                layout="total, prev, pager, next, jumper"
                :total="tableData2.length"
                :hide-on-single-page="true"
              />
            </ElConfigProvider>
          </section>
        </el-tab-pane>
        <el-tab-pane label="機關別分類統計" name="agency">
          <div>
            匯出搜尋結果清冊:
            <el-button type="primary" plain title="匯出搜尋結果清冊CSV">CSV</el-button>
            <el-button type="primary" plain title="匯出搜尋結果清冊XML">XML</el-button>
            <el-button type="primary" plain title="匯出搜尋結果清冊JSON">JSON</el-button>
          </div>
          <section>
            <el-table
              :data="paginatedList3"
              :default-sort="{ prop: 'unit', order: 'ascending' }"
              empty-text="暫無資料"
            >
              <el-table-column prop="unit" label="提供機關" sortable>
                <template #default="scope">
                  <nuxt-link :to="scope.row.path" :title="`前往搜尋 ${scope.row.name} 的資料集`">
                    {{ scope.row.unit }}
                  </nuxt-link>
                </template>
              </el-table-column>
              <el-table-column
                prop="datasetsCount"
                label="資料集總數"
                align="right"
                sortable
                width="140"
              />
              <el-table-column
                prop="viewCount"
                label="瀏覽次數"
                align="right"
                sortable
                width="120"
              />
              <el-table-column
                prop="downloadCount"
                label="下載次數"
                align="right"
                sortable
                width="120"
              />
            </el-table>
            <ElConfigProvider :locale="zhTW">
              <el-pagination
                v-model:current-page="currentPage3"
                v-model:page-size="pageSize3"
                :small="true"
                layout="total, prev, pager, next, jumper"
                :total="tableData3.length"
                :hide-on-single-page="true"
              />
            </ElConfigProvider>
          </section>
        </el-tab-pane>
      </el-tabs>
    </div>
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('資料分類統計')
const pageDescription = ref('資料分類統計')
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

const Tab = ref('dataset')

const tableData = ref([
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  },
  {
    name: '公務人員退休撫卹基金管理委員會委員及顧問名單',
    path: '/dataset/1',
    viewCount: '1772256',
    downloadCount: '2410',
    voteAveragePercent: 1.8,
    publishDate: '2024-11-08',
    status: '已上架'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return tableData.value.slice(start, end)
})

const tableData2 = ref([
  {
    catName: '公共資訊',
    path: '/dataset/search',
    datasetsCount: '31357',
    viewCount: '44342645'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  },
  {
    catName: '生活安全及品質',
    path: '/dataset/search',
    datasetsCount: '5989',
    viewCount: '11036261'
  }
])

const currentPage2 = ref(1)
const pageSize2 = ref(10)

const paginatedList2 = computed(() => {
  const start = (currentPage2.value - 1) * pageSize2.value
  const end = currentPage2.value * pageSize2.value
  return tableData2.value.slice(start, end)
})

const tableData3 = ref([
  {
    unit: '金融監督管理委員會證券期貨局',
    path: '/dataset/search',
    datasetsCount: '691',
    viewCount: '4017431',
    download: '1057434'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  },
  {
    unit: '農業部',
    path: '/dataset/search',
    datasetsCount: '1630',
    viewCount: '2990873',
    download: '338817'
  }
])

const currentPage3 = ref(1)
const pageSize3 = ref(10)

const paginatedList3 = computed(() => {
  const start = (currentPage3.value - 1) * pageSize3.value
  const end = currentPage3.value * pageSize3.value
  return tableData3.value.slice(start, end)
})

const { isRadio, addThScope } = useJSAccessibility()

onMounted(() => {
  isRadio()
  addThScope()
})
</script>
