<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/courses',
          title: '教育資源專區'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page page--narrow">
      <h2>{{ pageTitle }}</h2>
      <article>
        <section>
          <p>
            因應政府資料開放平臺啟用資料品質檢核功能，辦理資料品質教育訓練，以提升機關同仁對於資料品質之認知，輔導使用者如何檢視資料集之資料品質檢測結果、瞭解資料品質檢測的各個面向，並說明如何排除資料品質常見錯誤樣態，同時亦蒐集使用者對於資料品質檢核系統流程與機制相關建議，作為未來評估資料品質檢核系統功能優化與擴充。
          </p>
        </section>
        <div class="video-box">
          <div class="video">
            <iframe
              src="https://www.youtube.com/embed/1SwrpxAuwIw?si=OIWsNKRupP6jBFQu"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="dowaload">
          <p>文件下載:</p>
          <ul class="normal-list">
            <li class="normal-item">
              <nuxt-link title="下載" download="下載" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    fill="#0071AB"
                    d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                  />
                </svg>
                111年政府資料開放平臺_資料品質訓練手冊.pdf
              </nuxt-link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('111年政府資料開放平臺資料品質教育訓練')
const pageDescription = ref('111年政府資料開放平臺資料品質教育訓練')
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
