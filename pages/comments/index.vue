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
      <h2>{{ pageTitle }}</h2>
      <p>
        在這裡，我們將各界對於已開放資料集的所有意見綜整起來，您可以查詢各界所有發表的意見，也可以看到大家對資料集的討論意見及回饋。
      </p>
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
          :default-sort="{ prop: 'publishDateTime', order: 'descending' }"
          empty-text="暫無資料"
        >
          <el-table-column prop="id" label="ID" sortable width="80" />
          <el-table-column prop="publishDateTime" label="發表時間" sortable width="160" />
          <el-table-column prop="comTitle" label="標題" sortable min-width="160">
            <template #default="scope">
              <nuxt-link :to="scope.row.path" :title="`前往 ${scope.row.comTitle}`">
                {{ scope.row.comTitle }}
              </nuxt-link>
            </template>
          </el-table-column>
          <el-table-column prop="datasetName" label="資料集名稱" min-width="200" />
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
const pageTitle = ref('我有話要說')
const pageDescription = ref('我有話要說')
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
    id: '558380',
    publishDateTime: '2024-11-06 14:42',
    comTitle: '不分幅_澎湖20MDEM(2022)無法下載',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
  },
  {
    id: '558379',
    publishDateTime: '2024-11-06 14:24',
    comTitle: '無法下載"其他"的各個圖資',
    datasetName: '2022年版全臺灣及部分離島20公尺網格數值地形模型DTM資料',
    path: '/dataset/160361',
    replyStatus: '未回復'
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
