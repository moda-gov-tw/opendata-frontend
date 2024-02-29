<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/applications',
          title: '活化應用專區'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page">
      <div class="applications-header">
        <div class="application-image">
          <img src="/images/app-demo.png" :alt="`${pageTitle}標題圖片`" />
        </div>
        <div class="applications-info">
          <h2>
            {{ pageTitle }}
            <el-tag type="info"> -- </el-tag>
          </h2>
          <div class="sub">幫助尋找你的寵物夥伴</div>
          <div class="info">
            <span class="info-text"> 創作者: MeetStudio </span>
            <span class="info-text"> 聯絡方式: sohotguys@gmail.com </span>
            <span class="info-text"> 推薦人: Ted Scott </span>
          </div>
        </div>
      </div>
      <el-divider />
      <div class="applications-container">
        <article>
          <h3>預覽</h3>
          <section>
            <ul class="img-list">
              <li v-for="(item, index) in 7" :key="index" class="img-item">
                <nuxt-link
                  target="_blank"
                  :to="`/images/app-demo-${index + 2}.png`"
                  :title="`另開視窗 前往 活化應用 ${pageTitle} 預覽照片之 ${index + 1}`"
                >
                  <img
                    :src="`/images/app-demo-${index + 2}.png`"
                    :alt="`另開視窗 前往 活化應用 ${pageTitle} 預覽照片之 ${index + 1}`"
                    class="img-list__img"
                  />
                </nuxt-link>
              </li>
            </ul>
          </section>
          <section>
            <h3>描述</h3>
            主要特色:<br />
            1. 政府開放資源API的資訊更新速度保證最新<br />
            2. 協助大家尋找自己想要領養的毛小孩<br />
            3. 幫忙尋找遺失的貓貓狗狗<br />
            4. 可以把目前喜歡的貓貓狗狗都先加入我的最愛名單喔<br />
            5. 推送系統可以把最即時的資訊推送給您<br />
            6. 紀錄自己所飼養寵物的資訊
          </section>
          <section>
            <h3>關鍵字</h3>
            <div>寵物,遺失,動物,狗,貓</div>
          </section>
          <section>
            <h3>運用資料集</h3>
            <ul>
              <li>
                <nuxt-link :title="`前往 寵物遺失啟事 資料集`" :to="'/dataset/1'">
                  寵物遺失啟事
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :title="`前往 動物認領養 資料集`" :to="'/dataset/1'">
                  動物認領養
                </nuxt-link>
              </li>
            </ul>
          </section>
          <section>
            <h3>推薦連結</h3>
            <ul>
              <li>
                <nuxt-link
                  to="https://apps.apple.com/us/app/%E5%AF%B5%E7%89%A9%E6%89%BE%E7%88%B8%E5%AA%BD/id6463616454"
                  title="`另開視窗 前往 iOS app`"
                >
                  iOS
                </nuxt-link>
              </li>
            </ul>
          </section>
          <section>
            <h3>服務條款</h3>
            <p>
              <nuxt-link
                target="_blank"
                title="`另開視窗 前往 https://himydream.me/adoptpet/`"
                to="https://himydream.me/adoptpet/"
              >
                https://himydream.me/adoptpet/
              </nuxt-link>
            </p>
          </section>
          <section>
            <h3>計費方式</h3>
            --
          </section>
          <section>
            <h3>社群分享</h3>
            <div class="shar-btns">
              <nuxt-link
                class="twitter-bg"
                to="https://twitter.com/intent/tweet?text="
                title="另開視窗 分享到 X (前 Twitter)"
              >
                <span class="visually-hidden">分享到 X</span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
                  />
                </svg>
              </nuxt-link>
              <nuxt-link
                to="https://www.facebook.com/share.php?u="
                title="另開視窗 分享到Facebook"
                class="facebook-bg"
              >
                <span class="visually-hidden">分享到 Facebook</span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                  />
                </svg>
              </nuxt-link>
              <el-button>複製連結</el-button>
            </div>
          </section>
        </article>
      </div>
      <div class="applications-footer"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('寵物找爸媽')
const pageDescription = ref('幫助尋找你的寵物夥伴')
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

<style scoped>
.img-list__img {
  max-width: 300px;
  height: auto;
  @media screen and (width <= 576px) {
    max-width: 160px;
  }
}
</style>
