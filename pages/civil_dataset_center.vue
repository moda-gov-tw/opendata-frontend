<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-collapse v-model="activeName" accordion>
        <template v-for="(item, index) in civilDatasetCenterList" :key="index">
          <el-collapse-item :title="item.main" :name="index">
            <ul v-id="item.children">
              <li v-for="(itemChild, indexChild) in item.children" :key="indexChild">
                <nuxt-link :to="itemChild.path" :title="`另開視窗 前往 ${itemChild.name}`">
                  {{ itemChild.name }}
                </nuxt-link>
              </li>
            </ul>
          </el-collapse-item>
        </template>
      </el-collapse>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('相關資料中心')
const pageDescription = ref('相關資料中心')
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

const activeName = ''
const civilDatasetCenterList = [
  {
    main: '立法院',
    children: [
      {
        path: 'https://data.ly.gov.tw/catelog.action',
        name: '立法院開放資料服務平台'
      }
    ]
  },
  {
    main: '內政部',
    children: [
      {
        path: 'https://data.moi.gov.tw/MoiOD/Data/DataList.aspx',
        name: '內政資料開放平臺'
      }
    ]
  },
  {
    main: '農業部',
    children: [
      {
        path: 'https://data.coa.gov.tw/index.aspx',
        name: '農業部農業資料開放平臺'
      }
    ]
  },
  {
    main: '環境部',
    children: [
      {
        path: 'https://data.moenv.gov.tw/',
        name: '環境部環境資料開放平臺'
      }
    ]
  },
  {
    main: '文化部',
    children: [
      {
        path: 'https://opendata.culture.tw/frontsite/openData/list',
        name: '文化資料開放服務網'
      }
    ]
  },
  {
    main: '國立故宮博物院',
    children: [
      {
        path: 'https://theme.npm.edu.tw/opendata/DigitDataSets.aspx',
        name: '故宮OPENDATA專區'
      }
    ]
  },
  {
    main: '衛生福利部',
    children: [
      {
        path: 'https://data.fda.gov.tw/frontsite/data/DataAction.do?method=doList',
        name: '食品藥物管理署_食品藥物開放資料平臺'
      },
      {
        path: 'https://data.cdc.gov.tw/',
        name: '疾病管制署_資料開放平台'
      },
      {
        path: 'https://data.nhi.gov.tw/Index.aspx',
        name: '中央健康保險署_健保資料開放服務'
      }
    ]
  },
  {
    main: '交通部',
    children: [
      {
        path: 'https://ptx.transportdata.tw/PTX/',
        name: '公共運輸整合資訊流通服務平臺'
      },
      {
        path: 'https://event.motc.gov.tw/index.jsp?webid=201506260001',
        name: '交通部政府資料開放專區'
      }
    ]
  }
]
</script>

<style scoped>
:deep(.el-collapse-item__content) {
  & ul {
    list-style-type: disc;
  }
  & li {
    margin-left: 20px;
  }
}
</style>
