<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          title: '互動專區'
        }
      ]"
      :current-page="pageTitle"
      :mode="false"
    />
    <div class="page">
      <div class="page-title-bar">
        <h2>{{ pageTitle }}</h2>
        <el-button
          size="large"
          type="success"
          title="前往 新增我想要更多"
          @click="navigateTo('/suggests/add')"
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
      <p>你想要政府開放更多的資料嗎?請在這裡告訴我們您要甚麼?</p>
      <p>
        你可以點選新增我想要更多，提出您想要政府開放資料建議，也可以瀏覽其他民眾提出的資料集需求，並表達您的意見。我們會依據您提供的資訊請相關機關研議。您的寶貴建議是各機關推動資料開放的原動力。
      </p>
      <p>注意事項：</p>
      <p>
        機關回應您的資料需求後，系統會自動寄送信件通知，您可根據機關之回應內容給予評分及說明，若評分低於3顆星，機關將再次說明及回覆。
      </p>
      <p>您的需求若屬於政府資訊公開法第18條之範圍，機關可選擇限制公開或不予提供。</p>
      <el-divider />
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
              <el-button type="primary" size="large">重設</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
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
          <el-table-column prop="id" label="ID" sortable width="80" />
          <el-table-column prop="sugTitle" label="開放建議標題" sortable min-width="200">
            <template #default="scope">
              <nuxt-link :to="scope.row.path" :title="`前往 ${scope.row.sugTitle}`">
                {{ scope.row.sugTitle }}
              </nuxt-link>
            </template>
          </el-table-column>
          <el-table-column prop="reviewCount" label="瀏覽次數" sortable width="120" />
          <el-table-column prop="author" label="建議者" sortable width="100" />
          <el-table-column prop="publishDate" label="發表日期" sortable width="120" />
          <el-table-column prop="unit" label="實際派發機關" width="120" />
          <el-table-column prop="status" label="分派狀態" sortable width="120" />
          <el-table-column prop="replyStatus" label="回復狀態" sortable width="120" />
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
const pageTitle = ref('我想要更多')
const pageDescription = ref('我想要更多')
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

const tableData = ref([
  {
    id: '25185',
    sugTitle: '請問財政部可以開放歷次「稅務行業標準分類」表資料嗎？',
    path: '/suggests/25185',
    reviewCount: '465',
    author: 'K****e',
    publishDate: '2015-12-05',
    unit: '財政部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  },
  {
    id: '24425',
    sugTitle: '敬請開放每年每個月份電力使用量－按行業別分',
    path: '/suggests/24425',
    reviewCount: '351',
    author: '陳****伶',
    publishDate: '2015-11-06',
    unit: '經濟部',
    status: '已分派',
    replyStatus: '已回復'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return tableData.value.slice(start, end)
})

const { addThScope } = useJSAccessibility()
onMounted(() => {
  addThScope()
})
</script>
