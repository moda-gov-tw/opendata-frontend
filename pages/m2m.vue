<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <article>
        <section>
          <p>
            為逐步推動透過應用程式介面(Application Programming
            Interface,API)取用政府開放資料，達成系統自動介接(Machine To
            Machine,M2M)之目標，本專區將集中列示開放資料介接相關規範及資訊，供各界查閱及應用。
          </p>
          <p>政府資料開放技術標準規範：</p>
          <p>為便利民眾取用政府開放資料，爰制訂政府資料開放技術標準規範，內容如下：</p>
          <p>(一)「資料集詮釋資料標準規範」：</p>
          <p>
            為使政府開放資料集詮釋資料欄位能完整說明資料集內容，讓使用者能快速了解及應用資料內容。參考國內外各領域詮釋資料格式，訂出37個資料集詮釋資料欄位，同時提供範例供使用者瞭解各欄位資料內容。
          </p>
          <p>
            (二)<a href="/crossrule" class="" title="前往 「政府資料開放跨平臺介接規範」"
              >「政府資料開放跨平臺介接規範」</a
            >：
          </p>
          <p>
            提供統一依據架構和原則，讓任一資料開放平臺之資料集詮釋資料可依本規範同步至其他資料開放平臺。
          </p>
          <p>(三)「我有話要說、我想要更多、品質檢測介接規範」</p>
          <p>
            供機關自建之資料開放平臺可取得政府資料開放平臺上，該機關的民眾我有話要說及品質檢測資料；並可將我有話要說機關回應及執行品質檢測同步更新至政府資料開放平臺。
          </p>
          <p>(四)「我有話要說、我想要更多、品質檢測OAS文件」：</p>
          <p>我有話要說OAS文件</p>
          <p>我想要更多OAS文件</p>
          <p>品質檢測OAS文件</p>
        </section>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('M2M專區')
const pageDescription = ref('M2M專區')
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
</script>
