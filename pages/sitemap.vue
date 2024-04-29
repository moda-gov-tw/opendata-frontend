<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <section>
        <p>本網站依無障礙網頁設計原則建置，網站的主要內容分為三大區塊：</p>
        <p>1. 上方功能區塊、2. 中央內容區塊、3.下方功能區塊。</p>
      </section>
      <section>
        <p>本網站的快速鍵﹝Accesskey﹞設定如下：</p>
        <p>Alt+U：右上方功能區塊，包括回首頁、網站導覽、網站搜尋、字體選擇等。</p>
        <p>Alt+C：中央內容區塊，為本頁主要內容區。</p>
        <p>Alt+S：網站搜尋。</p>
        <p>Alt+Z：下方功能區塊。</p>
        <p>
          如果您的瀏覽器是Firefox，快速鍵的使用方法是 Shift+Alt+(快速鍵字母)，例如
          Shift+Alt+C會跳至網頁中央區塊，以此類推。
        </p>
      </section>
      <section>
        <div class="sitemap-box">
          <ul v-if="sitemapList" class="sitemap">
            <li v-for="(item, idx) in sitemapList" :key="idx" class="sitemap-group">
              <span class="sitemap-group-title">{{ item.title }}</span>
              <ul v-if="item.children" class="sitemap-list">
                <li
                  v-for="(itemChild, idxChild) in item.children"
                  :key="idxChild"
                  class="sitemap-item"
                >
                  <nuxt-link :to="itemChild.path" :title="`前往 ${itemChild.name}`">
                    {{ itemChild.name }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('網站導覽')
const pageDescription = ref(
  '提供' + runtimeConfig.public.websiteName + '的網站區塊、快捷鍵和網站地圖'
)
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

const sitemapList = [
  {
    title: '資料集',
    children: [
      {
        path: '/datasets/search',
        name: '全部資料集瀏覽'
      },
      {
        path: '/datasets/unpublished',
        name: '預計下架資料集'
      },
      {
        path: '/datasets/history',
        name: '歷史資料專區'
      },
      {
        path: '/datasets/datasets_download',
        name: '資料集清單下載區'
      },
      {
        path: '/datasets/search?dt=openapi',
        name: 'Open API資料集'
      }
    ]
  },
  {
    title: '高應用價值主題專區',
    children: [
      {
        path: '/high_value_datasets',
        name: '高應用價值主題專區'
      }
    ]
  },
  {
    title: '資料故事館',
    children: [
      {
        path: '/expos',
        name: '應用展示專區'
      },
      {
        path: '/courses',
        name: '教育資源專區'
      },
      {
        path: '/applications',
        name: '活化應用專區'
      },
      {
        path: '/rewards',
        name: '獎勵活動專區'
      }
    ]
  },
  {
    title: '互動專區',
    children: [
      {
        path: '/suggests',
        name: '我想要更多'
      },
      {
        path: '/comments',
        name: '我有話要說'
      }
    ]
  },
  {
    title: '消息專區',
    children: [
      {
        path: '/news',
        name: '最新消息'
      },
      {
        path: '/columns',
        name: '專欄文章'
      }
    ]
  },
  {
    title: '諮詢小組',
    children: [
      {
        path: '/consult_team',
        name: '諮詢小組'
      }
    ]
  },
  {
    title: '關於平臺',
    children: [
      {
        path: '/about',
        name: '關於平臺'
      },
      {
        path: '/sitemap',
        name: '網站導覽'
      },
      {
        path: '/faqs',
        name: '常見問答'
      }
    ]
  },
  {
    title: '統計資料',
    children: [
      {
        path: '/statistics/site',
        name: '網站使用統計'
      },
      {
        path: '/statistics/datasets',
        name: '資料分類統計'
      },
      {
        path: '/statistics/agency',
        name: '各部會資料開放情形'
      },
      {
        path: '/statistics/quality',
        name: '機關資料品質情形'
      },
      {
        path: '/statistics/wordcloud',
        name: '標籤雲'
      },
      {
        path: '/statistics/dashboard',
        name: '各部會及地方政府統計'
      }
    ]
  },
  {
    title: '規範及授權',
    children: [
      {
        path: '/licenses',
        name: '授權條款'
      },
      {
        path: '/m2m',
        name: 'M2M專區'
      },
      {
        path: '/about#about_document',
        name: '相關指導文件'
      }
    ]
  },
  {
    title: '相關連結',
    children: [
      {
        path: '/datasets_links2',
        name: '跨平臺介接即時狀態表'
      },
      {
        path: '/civil_dataset_center',
        name: '相關資料中心'
      }
    ]
  },
  {
    title: '英文版',
    children: [
      {
        path: '/',
        name: '英文版'
      }
    ]
  }
]
</script>
