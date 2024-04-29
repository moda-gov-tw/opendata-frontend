<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <ul v-if="columnsList" class="od-list od-list--type2">
        <li v-for="(item, index) in paginatedList" :key="index" class="od-item">
          <div class="od-item-image">
            <img :src="item.image.path" :alt="`${item.title}的封面照片`" />
          </div>
          <div class="od-item-container">
            <nuxt-link :to="item.link" class="od-item-title" :title="`前往 ${item.title}`">
              {{ item.title }}
            </nuxt-link>
            <div class="od-item-subinfo">
              作者： {{ item.author }}&nbsp;&nbsp;&nbsp;發布日期：{{ item.publishDate }}
            </div>
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
          :total="columnsList.length"
          :hide-on-single-page="true"
        />
      </ElConfigProvider>
    </div>
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('專欄文章')
const pageDescription = ref('專欄文章')
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

const columnsList = ref([
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '政府財稅資料開放之友善措施',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-09-30',
    content:
      '為促進政府運作公開透明、推動施政便民服務，並鼓勵民間加值、發展創新應用，我國近年來積極推動政府資料開放。建構於政府資訊公開法運行架構下，行政院於102年2月23日發布之「行政院及所屬各級機關政府資料開放作業原則」(以下簡稱作業原則)，即明確強調政府資料以開放為原則，且各機關針對不予開放之資料應定期檢討有無適時開放之必要。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  },
  {
    image: {
      path: '/images/logo-icon.png'
    },
    title: '各國資料開放應用暨成效─資料開放帶動商業創新發展',
    link: '/columns/1',
    author: '政府資料開放維運團隊',
    publishDate: '2016-08-31',
    content:
      '資料開放自發展初期以來就被視為帶動經濟發展的時代新動力，各國政府皆希冀透過釋放政府內部的大量資料，搭配業界靈活有創意的特點，推動創新發展、促進產業加值，以提升各式服務與應用品質。本期專欄將透過2015年GovLab與Omidyar Network的案例研究，介紹紐約、倫敦均不約而同的透過資料開放釋出地圖，成功推動小型企業發展及產業創新加值；以及臺灣本地企業如何運用資料開放於物流、交通產業，佐證資料開放確能透過創新運用以促進經濟成長與發展，為市民和群體創造新的機會。'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return columnsList.value.slice(start, end)
})
</script>
