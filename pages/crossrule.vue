<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <article>
        <section>
          <p>
            為了讓任一資料開放平臺之資料集詮釋資料可同步至其他資料開放平臺，且資料集詮釋資料異動後，也可同步更新至其他資料開放平臺，故訂定資料集詮釋資料跨平臺同步模式及流程，提供跨平臺統一的依循架構和原則。<span
              class="color-primary"
              >各資料平臺申請與本平臺之介接將以「機關發佈publish」機制為優先</span
            >。
          </p>
          <p>
            <nuxt-link to="/instruction" title="前往 機關發布(Publish)開發指引">
              機關發布(Publish)開發指引
            </nuxt-link>
          </p>
          <p>
            政府資料開放跨平臺介接規範第一版下載(108年12月31日停用)：
            <nuxt-link
              to="https://file.data.gov.tw/opendatafile/%E6%94%BF%E5%BA%9C%E8%B3%87%E6%96%99%E9%96%8B%E6%94%BE%E8%B7%A8%E5%B9%B3%E8%87%BA%E4%BB%8B%E6%8E%A5%E8%A6%8F%E7%AF%84.pdf"
              title="下載 政府資料開放跨平臺介接規範第一版下載.pdf "
              download="下載 政府資料開放跨平臺介接規範第一版下載.pdf"
            >
              pdf
            </nuxt-link>
          </p>
          <p>
            政府資料開放跨平臺介接規範第二版下載：
            <nuxt-link
              to="https://file.data.gov.tw/opendatafile/%E6%94%BF%E5%BA%9C%E8%B3%87%E6%96%99%E9%96%8B%E6%94%BE%E8%B7%A8%E5%B9%B3%E8%87%BA%E4%BB%8B%E6%8E%A5%E8%A6%8F%E7%AF%84%E7%AC%AC2%E7%89%88%E4%B8%8A%E7%A8%BF%E7%89%88%E6%9C%AC.pdf"
              title="下載 政府資料開放跨平臺介接規範第二版下載.pdf"
              download="下載 政府資料開放跨平臺介接規範第二版下載.pdf"
            >
              pdf
            </nuxt-link>
          </p>
          <p>
            政府資料開放跨平臺介接規範第三版下載：
            <nuxt-link
              to="https://file.data.gov.tw/content/政府資料開放跨平臺介接規範第3版上稿版本.pdf"
              title="下載 政府資料開放跨平臺介接規範第三版下載.pdf"
              download="下載 政府資料開放跨平臺介接規範第三版下載.pdf"
            >
              pdf
            </nuxt-link>
          </p>
          <p>
            申請表下載：
            <nuxt-link
              to="https://file.data.gov.tw/event/M2M_API.pdf"
              title="下載 申請表.pdf"
              download="下載 申請表.pdf"
            >
              pdf
            </nuxt-link>
            &nbsp;
            <nuxt-link
              to="https://file.data.gov.tw/event/M2M_API.odt"
              title="下載 申請表.odt"
              download="下載 申請表.odt"
            >
              odt
            </nuxt-link>
          </p>
        </section>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('政府資料開放跨平臺介接規範')
const pageDescription = ref('政府資料開放跨平臺介接規範')
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
