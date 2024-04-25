<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/faqs',
          title: '常見問答'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page page--narrow">
      <h2>{{ pageTitle }}</h2>
      <article>
        <section>
          <div class="table table--fixed od-table od-table--bordered">
            <div class="table-row">
              <div class="table-cell th">
                <strong>分類</strong>
              </div>
              <div class="table-cell">平臺功能常見問題</div>
            </div>
          </div>
        </section>
        <section>
          <p>本平臺可使用我的E政府、google帳號登入使用，成為政府資料開放平臺的會員享有5大優勢</p>
          <ol>
            <li>
              會員訂閱資料集後，方便使用者快速取得自己訂閱的資料集清單，亦可以取消訂閱的內容。
            </li>
            <li>可以推薦自己覺得不錯的活化應用。</li>
            <li>可以建議新增開放資料集。</li>
            <li>可以收到資料集提供機關的回覆訊息 。</li>
            <li>未來可以在會員專區看到討論區中其他人與我的互動以及推薦的資料集。</li>
          </ol>
        </section>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('加入會員可以享受哪些服務')
const pageDescription = ref('加入會員可以享受哪些服務')
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
