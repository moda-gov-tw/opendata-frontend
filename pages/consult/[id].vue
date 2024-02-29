<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/consult_team',
          title: '諮詢小組'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page">
      <div class="page-title-bar">
        <h2>{{ pageTitle }}</h2>
        <el-button type="primary" plain size="large">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
            />
          </svg>
          <span>下載委員名單</span>
        </el-button>
      </div>
      <div class="page-tool-bar">
        <label for="term_select">請選擇任期</label>
        <el-select
          id="term_select"
          v-model="currentTerm"
          placeholder="請選擇任期"
          aria-label="選擇任期"
        >
          <el-option v-for="(item, index) in termOptions" :key="index" :value="item" :label="item">
          </el-option>
        </el-select>
      </div>
      <section>
        <el-table
          :data="paginatedList"
          :default-sort="{ prop: 'name', order: 'ascending' }"
          empty-text="暫無資料"
        >
          <el-table-column prop="name" label="姓名" sortable />
          <el-table-column prop="unit" label="單位" sortable />
          <el-table-column prop="idc" label="身份別" sortable />
          <el-table-column prop="gender" label="性別" />
          <el-table-column prop="period" label="任期" sortable />
          <el-table-column prop="contact" label="聯絡方式" sortable />
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
      <section>
        <div class="count-card-box">
          <el-card header="委員名單比例">
            <el-row>
              <el-col :span="12" :xs="24">
                <canvas
                  ref="genderPie"
                  aria-label="性別比例"
                  role="img"
                  style="margin: 0 auto"
                ></canvas>
                <div class="hint">性別比例</div>
              </el-col>
              <el-col :span="12" :xs="24">
                <canvas
                  ref="councilPie"
                  aria-label="委員類別比例"
                  role="img"
                  style="margin: 0 auto"
                ></canvas>
                <div class="hint">委員類別比例</div>
              </el-col>
            </el-row>
          </el-card>
          <el-card>
            <template #header>
              <div class="card-header">
                <div>小組會議記錄</div>
                <nuxt-link title="前往 小組會議記錄" to="/meeting_minutes"> 查看全部 </nuxt-link>
              </div>
            </template>
            <ul class="dataset-list">
              <li v-for="(item, index) in popList" :key="index" class="dataset-item">
                <div class="dataset-title">
                  <nuxt-link :title="`前往 ${item.title}`" :to="'/dataset/' + item.nid">{{
                    item.title
                  }}</nuxt-link>
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
                </ul>
              </li>
            </ul>
          </el-card>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
import { Chart, registerables } from 'chart.js'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('「內政部資料開放諮詢小組」委員名單')
const pageDescription = ref('「內政部資料開放諮詢小組」委員名單')
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

const currentTerm = ref()
const termOptions = ['全部', '2021-07-27~2024-07-27']
const tableData = ref([
  {
    name: '劉立方',
    unit: '內政部民政司',
    idc: '機關代表',
    gender: '女',
    period: '2021-07-27 ~ 2024-07-27',
    contact: ''
  },
  {
    name: '劉立方',
    unit: '內政部民政司',
    idc: '機關代表',
    gender: '女',
    period: '2021-07-27 ~ 2024-07-27',
    contact: ''
  },
  {
    name: '劉立方',
    unit: '內政部民政司',
    idc: '機關代表',
    gender: '女',
    period: '2021-07-27 ~ 2024-07-27',
    contact: ''
  },
  {
    name: '劉立方',
    unit: '內政部民政司',
    idc: '機關代表',
    gender: '女',
    period: '2021-07-27 ~ 2024-07-27',
    contact: ''
  },
  {
    name: '劉立方',
    unit: '內政部民政司',
    idc: '機關代表',
    gender: '女',
    period: '2021-07-27 ~ 2024-07-27',
    contact: ''
  },
  {
    name: '劉立方 last',
    unit: '內政部民政司',
    idc: '機關代表',
    gender: '女',
    period: '2021-07-27 ~ 2024-07-27',
    contact: ''
  }
])

const currentPage = ref(1)
const pageSize = ref(5)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return tableData.value.slice(start, end)
})

Chart.register(...registerables)
const genderPie = ref<HTMLCanvasElement | null>(null)
const councilPie = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (genderPie.value) {
    const ctx = genderPie.value.getContext('2d') as CanvasRenderingContext2D
    const genderPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['男性', '女性'],
        datasets: [
          {
            label: '性別比例',
            data: [13, 7],
            backgroundColor: ['#e8864a', '#f7d6c1']
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }
  if (councilPie.value) {
    const ctx = councilPie.value.getContext('2d') as CanvasRenderingContext2D
    const councilPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['機關代表', '民間代表'],
        datasets: [
          {
            label: '委員類別比例',
            data: [13, 7],
            backgroundColor: ['#c5e0b4', '#9bdcd4']
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }
})

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
const { isRadio, addThScope } = useJSAccessibility()
onMounted(() => {
  isRadio()
  addThScope()
})
</script>

<style scoped>
.hint {
  text-align: center;
}
</style>
