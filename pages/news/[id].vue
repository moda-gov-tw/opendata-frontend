<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/news',
          title: '最新消息'
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
                <strong>發布日期</strong>
              </div>
              <div class="table-cell">2024-11-08</div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>內文</strong>
              </div>
              <div class="table-cell">
                主旨：辦理「單位預算」資料集下架事宜。
                說明：配合組織改造單位整併，為避免資料重複擺放，將原經濟部貿易調查委員會單位預算資料下架。
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>最新消息分類</strong>
              </div>
              <div class="table-cell">資料集下架公告</div>
            </div>
          </div>
        </section>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('單位預算資料集下架公告')
const pageDescription = ref('單位預算資料集下架公告')
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
