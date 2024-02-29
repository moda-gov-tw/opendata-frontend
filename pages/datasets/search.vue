<template>
  <main>
    <theBreadcrumbs current-page="查詢資料集" ak-container-bg />
    <div class="spotlight-box">
      <h2>資料集列表 | Datasets</h2>
      <theSearchbar />
    </div>
    <div class="page">
      <div class="two-cols">
        <div class="col-left col-small">
          <el-select
            v-model="searchHistory"
            placeholder="搜尋紀錄"
            style="text-align: center; width: 100%"
            aria-label="選擇搜尋紀錄"
          >
            <el-option
              v-for="item in searchHistoryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-row :gutter="12" style="margin-top: 0.5rem; margin-bottom: 0.5rem">
            <el-col :span="12">
              <el-button type="primary" size="large" style="width: 100%">搜尋</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="primary" size="large" style="width: 100%">重設</el-button>
            </el-col>
          </el-row>
          <el-button
            class="btn-filter-mobile-control"
            type="primary"
            plain
            size="large"
            @click="openMobileFilter = !openMobileFilter"
          >
            <span v-if="openMobileFilter == false">展開過濾條件</span>
            <span v-else>關閉過濾條件</span>
          </el-button>
          <el-collapse
            v-model="filters"
            :class="['collapse--filter', openMobileFilter ? 'is-open' : '']"
          >
            <el-collapse-item title="中央機關" name="1">
              <el-tree
                :data="filterData"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps"
                empty-text="暫無資料"
              />
            </el-collapse-item>
            <el-collapse-item title="地方機關" name="2">
              <el-tree
                :data="filterData2"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps"
                empty-text="暫無資料"
              />
            </el-collapse-item>
            <el-collapse-item title="常用主題" name="5">
              <el-tree
                :data="filterData5"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps"
                empty-text="暫無資料"
              />
            </el-collapse-item>
            <el-collapse-item title="服務分類" name="6">
              <el-tree
                :data="filterData6"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps"
                empty-text="暫無資料"
              />
            </el-collapse-item>
            <el-collapse-item title="檔案格式" name="7">
              <el-tree
                :data="filterData7"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps"
                empty-text="暫無資料"
              />
            </el-collapse-item>
            <el-collapse-item title="資料集屬性" name="8">
              <el-tree
                :data="filterData8"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps"
                empty-text="暫無資料"
              />
            </el-collapse-item>
          </el-collapse>
          <el-row :gutter="12" class="btn-filter-action-box">
            <el-col :span="12">
              <el-button type="primary" size="large" style="width: 100%">搜尋</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="primary" size="large" style="width: 100%">重設</el-button>
            </el-col>
          </el-row>
        </div>
        <div class="col-right col-main">
          <div class="page-tool-bar between">
            <div>
              排序：
              <el-select v-model="sort" placeholder="請選擇排序" aria-label="選擇排序">
                <el-option
                  v-for="item in sortOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              &nbsp;
              <el-select
                v-model="pageSize"
                placeholder="請選擇一頁幾個項目"
                aria-label="選擇一頁幾個項目"
              >
                <el-option
                  v-for="item in pageItemsCountOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div>
              <el-dropdown>
                <el-button type="primary">
                  搜尋結果匯出
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>CSV</el-dropdown-item>
                    <el-dropdown-item>XML</el-dropdown-item>
                    <el-dropdown-item>JSON</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <ul class="dataset-list">
            <li v-for="(item, index) in paginatedList" :key="index" class="dataset-item">
              <div class="dataset-item-left">
                <div class="dataset-title">
                  <nuxt-link :to="item.path" :title="`另開視窗 前往 ${item.title}`">
                    {{ item.title }}
                  </nuxt-link>
                </div>
                <div class="dataset-content">
                  <p>{{ item.content }}</p>
                  <p><strong>主要欄位說明：</strong> {{ item.mainCol }}</p>
                  <p><strong>資料集屬性：</strong> {{ item.cat }}</p>
                </div>
                <div class="dataset-info">
                  <ul class="dataset-info">
                    <li class="dataset-info-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 384 512"
                        class="award type-1"
                      >
                        <title>金標章</title>
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"
                        />
                      </svg>
                    </li>
                    <li class="dataset-info-item">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                        <title>白金標章</title>
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
                        />
                      </svg>
                    </li>
                    <li class="dataset-info-item">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                        />
                      </svg>
                      <span class="visually-hidden">提供單位</span> {{ item.unit }}
                    </li>
                    <li class="dataset-info-item">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                        />
                      </svg>
                      {{ item.modifyDateTime }} 更新
                    </li>
                    <li class="dataset-info-item">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                        />
                      </svg>
                      <span class="visually-hidden">下載數</span> {{ item.downloadCount }}
                    </li>
                    <li class="dataset-info-item">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
                        />
                      </svg>
                      <span class="visually-hidden">意見數</span> {{ item.commentCount }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dataset-item-right">
                <div class="tag-group">
                  <el-tag
                    type="info"
                    effect="plain"
                    style="
                      color: rgb(224, 0, 133);
                      border-color: rgb(224, 0, 133);
                      background: white;
                      cursor: default;
                      margin-left: 5px;
                    "
                  >
                    CSV
                  </el-tag>
                </div>
              </div>
            </li>
          </ul>
          <ElConfigProvider :locale="zhTW">
            <el-pagination
              v-model:current-page="currentPage"
              v-model:page-size="pageSize"
              :small="true"
              layout="total, prev, pager, next, jumper"
              :total="dataList.length"
              :hide-on-single-page="true"
            />
          </ElConfigProvider>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
import { ArrowDown } from '@element-plus/icons-vue'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('查詢資料集：全部資料')
const pageDescription = ref('查詢資料集：全部資料')
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

const searchHistory = ref('')
const searchHistoryOptions = ref([
  { label: '公廁', value: '1' },
  { label: '人口', value: '2' }
])

const openMobileFilter = ref(false)

const filters = ref(['1', '2', '3', '4', '5', '6', '7', '8'])

const defaultProps = {
  children: 'children',
  label: 'label'
}

const filterData = ref([
  {
    id: 1,
    label: '行政院(30)',
    children: [
      {
        id: 4,
        label: '內政部(30)',
        children: [
          {
            id: 9,
            label: '警政署(15)'
          },
          {
            id: 10,
            label: '消防署(15)'
          }
        ]
      }
    ]
  }
])
const filterData2 = ref([])
const filterData5 = ref([])
const filterData6 = ref([])
const filterData7 = ref([])
const filterData8 = ref([])

const sort = ref('pubdate.date_desc')
const sortOptions = [
  {
    value: 'pubdate.date_desc',
    label: '上架日期新至舊'
  },
  {
    value: 'pubdate.date_asc',
    label: '上架日期舊至新'
  },
  {
    value: 'dataset_view_times_desc',
    label: '瀏覽次數多至少'
  },
  {
    value: 'dataset_view_times_asc',
    label: '瀏覽次數少至多'
  },
  {
    value: 'metadata_changed.date_desc',
    label: '詮釋資料最後修改日期新至舊'
  },
  {
    value: 'metadata_changed.date_asc',
    label: '詮釋資料最後修改日期舊至新'
  },
  {
    value: 'resource_download_times_desc',
    label: '下載次數多至少'
  },
  {
    value: 'resource_download_times_asc',
    label: '下載次數少至多'
  },
  {
    value: 'resource_download_times_past_7days_desc',
    label: '最近七天下載次數多至少'
  },
  {
    value: 'resource_download_times_past_7days_asc',
    label: '最近七天下載次數少至多'
  },
  {
    value: 'agency_name.keyword_asc',
    label: '機關名稱頭至尾'
  },
  {
    value: 'agency_name.keyword_desc',
    label: '機關名稱尾至頭'
  }
]

const pageItemsCountOptions = [
  {
    value: 10,
    label: '10項/頁'
  },
  {
    value: 30,
    label: '30項/頁'
  },
  {
    value: 50,
    label: '50項/頁'
  },
  {
    value: 100,
    label: '100項/頁'
  }
]

const dataList = ref([
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return dataList.value.slice(start, end)
})

const { isTree } = useJSAccessibility()
onMounted(() => {
  isTree()
})
</script>
