<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-divider />
      <div class="page-tool-bar">
        <label for="select-unit">選擇機關： </label>
        <el-select
          id="select-unit"
          v-model="selectUnit"
          placeholder="請選擇機關"
          size="large"
          aria-label="選擇機關"
        >
          <el-option
            v-for="(item, index) in selectUnitOptions"
            :key="index"
            :value="item.value"
            :label="item.label"
          >
          </el-option>
        </el-select>
        <el-button size="large">重設</el-button>
      </div>
      <el-row :gutter="16">
        <el-col :span="12" :xs="24">
          <el-card header="資料集標章比例">
            <canvas
              ref="awardPie"
              aria-label="資料集標章比例"
              role="img"
              style="margin: 0 auto"
            ></canvas>
            <p class="text-align-center">資料更新時間: 2024-11-12 22:40:05</p>
          </el-card>
        </el-col>
        <el-col :span="12" :xs="24">
          <el-card header="資料集上下架統計">
            <p>
              當月上架數：97<br />
              當月下架數：104
            </p>
            <canvas
              ref="datasetPublishAndUnpublishLine"
              aria-label="資料集上下架統計"
              role="img"
              style="width: 100%"
            ></canvas>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="16">
        <el-col :span="8" :xs="24">
          <el-card>
            <template #header>
              <div class="card-header">
                <div>我有話要說</div>
                <nuxt-link title="前往 我有話要說" to="/comments"> 觀看更多 </nuxt-link>
              </div>
            </template>
            <canvas
              ref="commentsBar"
              aria-label="我有話要說狀態統計"
              role="img"
              style="width: 100%"
            ></canvas>
            <p class="text-align-center">資料更新時間: 2024-11-12 23:20:39</p>
          </el-card>
        </el-col>
        <el-col :span="8" :xs="24">
          <el-card>
            <template #header>
              <div class="card-header">
                <div>我想要更多</div>
                <nuxt-link title="前往 我想要更多" to="/suggests"> 觀看更多 </nuxt-link>
              </div>
            </template>
            <canvas
              ref="suggestsBar"
              aria-label="我想要更多狀態統計"
              role="img"
              style="width: 100%"
            ></canvas>
            <p class="text-align-center">資料更新時間: 2024-11-12 11:11:39</p>
          </el-card>
        </el-col>
        <el-col :span="8" :xs="24">
          <el-card class="applications-card-custom">
            <template #header>
              <div class="card-header">
                <div>活化應用</div>
                <nuxt-link title="前往 活化應用" to="/applications"> 觀看更多 </nuxt-link>
              </div>
            </template>
            <ul class="normal-list">
              <li v-for="(item, index) in AppList" :key="index" class="normal-item">
                <el-row>
                  <el-col :span="10" :xs="24">
                    <nuxt-link class="normal-item-title" :to="item.path" :title="item.title">
                      {{ item.title }}
                    </nuxt-link>
                  </el-col>
                  <el-col :span="14" :xs="24">
                    {{ item.content }}
                  </el-col>
                </el-row>
              </li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
      <div class="count-card-box">
        <el-card>
          <template #header>
            <div class="card-header">
              <div>最新上架資料集</div>
              <nuxt-link title="前往 最新上架資料集" to="/datasets/search"> 查看全部 </nuxt-link>
            </div>
          </template>
          <el-empty v-if="newtestList.length == 0" description="description" />
          <ul v-else class="dataset-list">
            <li v-for="(item, index) in newtestList" :key="index" class="dataset-item">
              <div class="dataset-title">
                <nuxt-link :title="`前往 ${item.title}`" :to="'/dataset/' + item.nid">{{
                  item.title
                }}</nuxt-link>
              </div>
              <div class="dataset-content">
                {{ item.content }}
              </div>
              <ul class="dataset-info">
                <li class="dataset-info-item">
                  <span class="agency-button">
                    <span class="visually-hidden">提供單位{{ item.agency_name }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                      />
                    </svg>
                  </span>
                  {{ item.agency_name }}
                </li>
                <li class="dataset-info-item">
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
                  <el-tag
                    type="info"
                    effect="plain"
                    style="
                      color: rgb(0, 94, 21);
                      border-color: rgb(0, 94, 21);
                      background: white;
                      cursor: default;
                      margin-left: 5px;
                    "
                  >
                    JSON
                  </el-tag>
                </li>
              </ul>
            </li>
          </ul>
        </el-card>
        <el-card>
          <template #header>
            <div class="card-header">
              <div>熱門資料集</div>
              <nuxt-link title="前往 熱門資料集" to="/datasets/search"> 查看全部 </nuxt-link>
            </div>
          </template>
          <el-empty v-if="popList.length == 0" description="description" />
          <ul v-else class="dataset-list">
            <li v-for="(item, index) in popList" :key="index" class="dataset-item">
              <div class="dataset-title">
                <nuxt-link :title="`前往 ${item.title}`" :to="'/dataset/' + item.nid">{{
                  item.title
                }}</nuxt-link>
              </div>
              <div class="dataset-content">
                {{ item.content }}
              </div>
              <ul class="dataset-info">
                <li class="dataset-info-item">
                  <span class="agency-button">
                    <span class="visually-hidden">提供單位{{ item.agency_name }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                      />
                    </svg>
                  </span>
                  {{ item.agency_name }}
                </li>
                <li class="dataset-info-item">
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
                  <el-tag
                    type="info"
                    effect="plain"
                    style="
                      color: rgb(0, 94, 21);
                      border-color: rgb(0, 94, 21);
                      background: white;
                      cursor: default;
                      margin-left: 5px;
                    "
                  >
                    JSON
                  </el-tag>
                </li>
              </ul>
            </li>
          </ul>
        </el-card>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('各部會及地方政府統計')
const pageDescription = ref('各部會及地方政府統計')
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

const selectUnit = ref('')
const selectUnitOptions = ref([
  {
    label: '行政院',
    value: 1
  }
])

Chart.register(...registerables)

const awardPie = ref<HTMLCanvasElement | null>(null)
const datasetPublishAndUnpublishLine = ref<HTMLCanvasElement | null>(null)
const commentsBar = ref<HTMLCanvasElement | null>(null)
const suggestsBar = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (awardPie.value) {
    const ctx = awardPie.value.getContext('2d') as CanvasRenderingContext2D
    const awardPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['金', '銀', '銅', '無'],
        datasets: [
          {
            label: '資料集標章比例',
            data: [90.46, 3.67, 3.34, 2.43],
            backgroundColor: ['#E6A23C', '#C0C4CC', '#B9561A', '#303133']
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }
  if (datasetPublishAndUnpublishLine.value) {
    const ctx = datasetPublishAndUnpublishLine.value.getContext('2d') as CanvasRenderingContext2D
    const datasetPublishAndUnpublishLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '2024-11-01',
          '2024-11-02',
          '2024-11-03',
          '2024-11-04',
          '2024-11-05',
          '2024-11-06',
          '2024-11-07',
          '2024-11-08',
          '2024-11-09',
          '2024-11-10',
          '2024-11-11',
          '2024-11-12',
          '2024-11-13',
          '2024-11-14',
          '2024-11-15',
          '2024-11-16',
          '2024-11-17',
          '2024-11-18',
          '2024-11-19',
          '2024-11-20',
          '2024-11-21',
          '2024-11-22',
          '2024-11-23',
          '2024-11-24',
          '2024-11-25',
          '2024-11-26',
          '2024-11-27',
          '2024-11-28',
          '2024-11-29',
          '2024-11-30'
        ],
        datasets: [
          {
            type: 'line',
            label: '上架',
            data: [
              11, 21, 6, 0, 0, 12, 6, 15, 11, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0
            ],
            tension: 0.5
          },
          {
            type: 'line',
            label: '下架',
            data: [
              1, 3, 1, 0, 0, 11, 5, 7, 71, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0
            ],
            tension: 0.5
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }
  if (commentsBar.value) {
    const ctx = commentsBar.value.getContext('2d') as CanvasRenderingContext2D
    const commentsBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['未回復', '已回復', '處理中', '研議中'],
        datasets: [
          {
            label: '件數',
            data: [48, 9723, 0, 0],
            backgroundColor: ['rgba(0, 116, 173, 0.5)'],
            borderColor: ['rgba(0, 116, 173, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y'
      }
    })
  }
  if (suggestsBar.value) {
    const ctx = suggestsBar.value.getContext('2d') as CanvasRenderingContext2D
    const suggestsBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['未回復', '已回復', '再回復'],
        datasets: [
          {
            label: '件數',
            data: [16, 3630, 15],
            backgroundColor: ['rgba(0, 116, 173, 0.5)'],
            borderColor: ['rgba(0, 116, 173, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y'
      }
    })
  }
})

const AppList = [
  {
    title: '寵物找爸媽',
    path: '/applications/1',
    content: '幫助尋找你的寵物夥伴'
  },
  {
    title: '寵物找爸媽',
    path: '/applications/1',
    content: '幫助尋找你的寵物夥伴'
  },
  {
    title: '寵物找爸媽',
    path: '/applications/1',
    content: '幫助尋找你的寵物夥伴'
  },
  {
    title: '寵物找爸媽',
    path: '/applications/1',
    content: '幫助尋找你的寵物夥伴'
  },
  {
    title: '寵物找爸媽',
    path: '/applications/1',
    content: '幫助尋找你的寵物夥伴'
  }
]

const newtestList = [
  {
    nid: 1,
    title: 'CNS11643中文標準交換碼全字庫(簡稱全字庫)22',
    content:
      'zip壓縮檔，內容包含全字庫字型、屬性資料及中文碼對照表三部分，其中全字庫字型提供明體、正宋體及正楷體3種；屬性資料則涵蓋注音、倉頡、筆畫、部首、拼音、部件及筆順等7種；中文碼對照表則提供BIG5、Unicode、電信碼、地政自造字、財稅內碼、稅務碼及工商自造字等7種中文內碼對照。',
    agency_name: '數位發展部'
  },
  {
    nid: 2,
    title: '上市公司每月營業收入彙總表',
    content: '上市公司每月營業收入彙總表 (證交所)',
    agency_name: '金融監督管理委員會證券期貨局'
  },
  {
    nid: 3,
    title: '臺中市公告類加值應用圖輯(TCGIS)',
    content:
      '本資料集為依台中市政府公布的資訊，將原始檔案提升開放為可加值利用之檔案，計有確診足跡、噪音管制區、重劃區、土地使用分區等高應用價值檔案，並將不定期擴充',
    agency_name: '臺中市政府數位治理局'
  },
  {
    nid: 4,
    title: '盤後資訊 > 個股日成交資訊',
    content: '上市個股日成交資訊 (臺灣證券交易所)',
    agency_name: '金融監督管理委員會證券期貨局'
  },
  {
    nid: 5,
    title: '臺南市流感疫苗接種合約醫療院所名單',
    content: '本資料集主要提供流感疫苗接種合約醫療院所名單',
    agency_name: '臺南市政府衛生局'
  }
]

const popList = [
  {
    nid: 1,
    title: 'CNS11643中文標準交換碼全字庫(簡稱全字庫)',
    content:
      'zip壓縮檔，內容包含全字庫字型、屬性資料及中文碼對照表三部分，其中全字庫字型提供明體、正宋體及正楷體3種；屬性資料則涵蓋注音、倉頡、筆畫、部首、拼音、部件及筆順等7種；中文碼對照表則提供BIG5、Unicode、電信碼、地政自造字、財稅內碼、稅務碼及工商自造字等7種中文內碼對照。',
    agency_name: '數位發展部'
  },
  {
    nid: 2,
    title: '上市公司每月營業收入彙總表',
    content: '上市公司每月營業收入彙總表 (證交所)',
    agency_name: '金融監督管理委員會證券期貨局'
  },
  {
    nid: 3,
    title: '臺中市公告類加值應用圖輯(TCGIS)',
    content:
      '本資料集為依台中市政府公布的資訊，將原始檔案提升開放為可加值利用之檔案，計有確診足跡、噪音管制區、重劃區、土地使用分區等高應用價值檔案，並將不定期擴充',
    agency_name: '臺中市政府數位治理局'
  },
  {
    nid: 4,
    title: '盤後資訊 > 個股日成交資訊',
    content: '上市個股日成交資訊 (臺灣證券交易所)',
    agency_name: '金融監督管理委員會證券期貨局'
  },
  {
    nid: 5,
    title: '臺南市流感疫苗接種合約醫療院所名單',
    content: '本資料集主要提供流感疫苗接種合約醫療院所名單',
    agency_name: '臺南市政府衛生局'
  }
]
</script>

<style scoped>
.el-card {
  margin-bottom: 1rem;
}
.count-card-box {
  padding: 0;
  & .el-card {
    margin-bottom: 0;
  }
}

.applications-card-custom {
  & :deep(.el-card__body) {
    height: 264px;
    overflow: auto;
  }
}
</style>
