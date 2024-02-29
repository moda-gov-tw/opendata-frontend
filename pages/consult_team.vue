<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <section>
        <h3>政府資料開放諮詢小組</h3>
        <ul>
          <li>
            <nuxt-link
              :title="`另開視窗 下載 政府資料開放諮詢小組設置要點_全文版_.pdf`"
              href="https://file.data.gov.tw/content/%E6%94%BF%E5%BA%9C%E8%B3%87%E6%96%99%E9%96%8B%E6%94%BE%E8%AB%AE%E8%A9%A2%E5%B0%8F%E7%B5%84%E8%A8%AD%E7%BD%AE%E8%A6%81%E9%BB%9E_%E5%85%A8%E6%96%87%E7%89%88_.pdf"
            >
              政府資料開放諮詢小組設置要點
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/consult/1" title="前往 行政院政府資料開放諮詢小組委員名單和會議記錄">
              行政院政府資料開放諮詢小組委員名單和會議記錄
            </nuxt-link>
          </li>
          <li>
            <div>中央二級資料開放諮詢小組委員名單&會議記錄</div>
            <ul class="consult-list">
              <li v-for="(item, index) in consultTeamList" :key="index">
                <nuxt-link to="/consult/1" :title="`前往 ${item.agName} 諮詢小組委員名單`">
                  {{ item.agName }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('諮詢小組')
const pageDescription = ref('諮詢小組')
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

const consultTeamList = [
  { agName: '內政部' },
  { agName: '外交部' },
  { agName: '國防部' },
  { agName: '財政部' },
  { agName: '教育部' },
  { agName: '法務部' },
  { agName: '經濟部' },
  { agName: '交通部' },
  { agName: '勞動部' },
  { agName: '農業部' },
  { agName: '衛生福利部' },
  { agName: '環境部' },
  { agName: '文化部' },
  { agName: '數位發展部' },
  { agName: '國家發展委員會' },
  { agName: '國家科學及技術委員會' },
  { agName: '大陸委員會' },
  { agName: '金融監督管理委員會' },
  { agName: '海洋委員會' },
  { agName: '僑務委員會' },
  { agName: '國軍退除役官兵輔導委員會' },
  { agName: '原住民族委員會' },
  { agName: '客家委員會' },
  { agName: '行政院公共工程委員會' },
  { agName: '行政院主計總處' },
  { agName: '行政院人事行政總處' },
  { agName: '中央銀行' },
  { agName: '國立故宮博物院' },
  { agName: '中央選舉委員會' },
  { agName: '公平交易委員會' },
  { agName: '國家通訊傳播委員會' }
]
</script>

<style scoped>
ul {
  list-style-type: disc;
}

li {
  margin-bottom: 1rem;
  margin-left: 20px;
  & div {
    margin-bottom: 1rem;
  }
}

.consult-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(33.3333% - 1rem));
  @media screen and (width <= 992px) {
    grid-template-columns: repeat(auto-fill, calc(50% - 1rem));
  }
}
</style>
