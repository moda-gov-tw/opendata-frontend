<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <ul v-if="exposList" class="od-list od-list--type1">
        <li v-for="(item, index) in paginatedList" :key="index" class="od-item">
          <div class="od-item-image">
            <img :src="item.image.path" :alt="`${item.title}的封面照片`" />
          </div>
          <div class="od-item-container">
            <nuxt-link :to="item.link" class="od-item-title" :title="`前往 ${item.title}`">
              {{ item.title }}
            </nuxt-link>
            <div class="od-item-content">{{ item.content }}</div>
          </div>
        </li>
      </ul>
      <ElConfigProvider :locale="zhTW">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :small="true"
          layout="total, prev, pager, next, jumper"
          :total="exposList.length"
          :hide-on-single-page="true"
        />
      </ElConfigProvider>
    </div>
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('應用展示專區')
const pageDescription = ref('應用展示專區')
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

const exposList = ref([
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】文化部應用成果說明',
    link: '/expos/1',
    content:
      '文化部為我國掌管文化事務的最高主管機關，負責國家各項文化振興、藝術發展、出版、廣播影視等相關產業推廣輔導工作。自101年升格以來，文化部致力於「厚植文化力，帶動文化參與」的使命，目標再造文化治理、建構藝術自由支持體系；連結與再現土地與人民的歷史記憶；深化社區營造，發揚生活「所在」的在地文化；提升文化內涵以提振文化經濟；重視青年創意、強化數位革新，創造國際連結等施政方向。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '【應用工作坊】審計部應用成果說明last',
    link: '/expos/1',
    content:
      '審計制度是現代國家最重要監督與維護國家治理的制度之一，審計機關不僅包括監督預算執行、審核財務收支、審定決算、考核財務效能、稽察財務上之違失、核定財務責任等職權，更能透過職權行使促進國家透明度、確保課責、提升績效、對抗貪腐，以提升國家良善治理。'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return exposList.value.slice(start, end)
})
</script>
