<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" ak-container-bg />
    <div class="spotlight-box">
      <h2>{{ pageTitle }}</h2>
    </div>
    <div class="page page--highvalue">
      <div class="links-group links-group--with-icons">
        <el-row type="flex" justify="center" :gutter="10">
          <el-col
            v-for="(element, index) in pageData"
            :key="'icon' + index"
            :xs="12"
            :sm="8"
            :md="4"
          >
            <nuxt-link
              :to="`/high_value_datasets/${element.hacid}`"
              :title="`前往${element.title}`"
            >
              <div>{{ element.title }}</div>
              <img :src="element.imgPath" :alt="`從${element.title}資料到應用示意圖`" />
            </nuxt-link>
          </el-col>
        </el-row>
      </div>
      <article>
        <section>
          <h3>共創主題解方</h3>
          <p>創意，來自看見資料不同的應用價值。</p>
          <p>
            主題式資料協作為各界應用需求。我們嘗試以主題式整合列示跨機關相關開放資料集，期待您一起發想協作，激盪創意解方，發展活化應用，發掘資料的潛在用途，創造資料更高的使用價值。
          </p>
        </section>
        <section>
          <h3>主題範疇與類別</h3>
          <p>
            參考國內外發展趨勢，本主題專區優先聚焦以氣候環境、災害防救、交通運輸、健康醫療、能源管理、社會救助等6項主題，由環境部、內政部、交通部、衛福部、經濟部等部會協同相關協辦機關，優化並深化開放具主題應用價值之資料集。未來將持續新增高應用價值主題，期建構主題式資料應用生態圈，讓資料愈分享愈有價值。
          </p>
        </section>
        <section>
          <div>
            <el-row :gutter="60" style="margin-bottom: 30px">
              <el-col v-if="allCat['氣候環境']" :span="8" :xs="24">
                <div>
                  <nuxt-link
                    :to="`/high_value_datasets/${allCat['氣候環境'].hacid}`"
                    :title="`前往${allCat['氣候環境'].title}`"
                  >
                    <!-- <img src="/images/氣候環境.png" alt="氣候環境封面圖" height="190"> -->
                    <picture>
                      <source srcset="/images/氣候環境.webp" type="image/webp" />
                      <source srcset="/images/氣候環境.png" type="image/png" />
                      <img src="/images/氣候環境.webp" alt="氣候環境封面圖" height="190" />
                    </picture>
                  </nuxt-link>
                </div>
                <div>
                  <div>主要類別：氣候環境</div>
                  <div
                    v-if="
                      allCat['氣候環境'].sub_category.length > 0 &&
                      allCat['氣候環境'].sub_category[0] != ''
                    "
                  >
                    <span v-for="(element, index) in allCat['氣候環境'].sub_category" :key="index">
                      <nuxt-link
                        v-if="element"
                        class="underline"
                        :to="'/high_value_datasets/' + allCat['氣候環境'].hacid + '?hq=' + element"
                        :title="'前往搜尋' + element"
                      >
                        {{ element }}
                      </nuxt-link>
                      <span v-if="element && index != allCat['氣候環境'].sub_category.length - 1"
                        >、</span
                      >
                    </span>
                  </div>
                </div>
              </el-col>
              <el-col v-if="allCat['災害防救']" :span="8" :xs="24">
                <div>
                  <nuxt-link
                    :to="`/high_value_datasets/${allCat['災害防救'].hacid}`"
                    :title="`前往${allCat['災害防救'].title}`"
                  >
                    <!-- <img src="/images/災害防救.png" alt="災害防救封面圖" height="190"> -->
                    <picture>
                      <source srcset="/images/災害防救.webp" type="image/webp" />
                      <source srcset="/images/災害防救.png" type="image/png" />
                      <img src="/images/災害防救.webp" alt="災害防救封面圖" height="190" />
                    </picture>
                  </nuxt-link>
                </div>
                <div>
                  <div>主要類別：災害防救</div>
                  <div
                    v-if="
                      allCat['災害防救'].sub_category.length > 0 &&
                      allCat['災害防救'].sub_category[0] != ''
                    "
                  >
                    <span v-for="(element, index) in allCat['災害防救'].sub_category" :key="index">
                      <nuxt-link
                        v-if="element"
                        class="underline"
                        :to="'/high_value_datasets/' + allCat['災害防救'].hacid + '?hq=' + element"
                        :title="'前往搜尋' + element"
                      >
                        {{ element }}
                      </nuxt-link>
                      <span v-if="element && index != allCat['災害防救'].sub_category.length - 1"
                        >、</span
                      >
                    </span>
                  </div>
                </div>
              </el-col>
              <el-col v-if="allCat['交通運輸']" :span="8" :xs="24">
                <div>
                  <nuxt-link
                    :to="`/high_value_datasets/${allCat['交通運輸'].hacid}`"
                    :title="`前往${allCat['交通運輸'].title}`"
                  >
                    <!-- <img src="/images/交通運輸.png" alt="交通運輸封面圖" height="190"> -->
                    <picture>
                      <source srcset="/images/交通運輸.webp" type="image/webp" />
                      <source srcset="/images/交通運輸.png" type="image/png" />
                      <img src="/images/交通運輸.webp" alt="交通運輸封面圖" height="190" />
                    </picture>
                  </nuxt-link>
                </div>
                <div>
                  <div>主要類別：交通運輸</div>
                  <div
                    v-if="
                      allCat['交通運輸'].sub_category.length > 0 &&
                      allCat['交通運輸'].sub_category[0] != ''
                    "
                  >
                    <span v-for="(element, index) in allCat['交通運輸'].sub_category" :key="index">
                      <nuxt-link
                        v-if="element"
                        class="underline"
                        :to="'/high_value_datasets/' + allCat['交通運輸'].hacid + '?hq=' + element"
                        :title="'前往搜尋' + element"
                      >
                        {{ element }}
                      </nuxt-link>
                      <span v-if="element && index != allCat['交通運輸'].sub_category.length - 1"
                        >、</span
                      >
                    </span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="60">
              <el-col v-if="allCat['健康醫療']" :span="8" :xs="24">
                <div>
                  <nuxt-link
                    :to="`/high_value_datasets/${allCat['健康醫療'].hacid}`"
                    :title="`前往${allCat['健康醫療'].title}`"
                  >
                    <!-- <img src="/images/健康醫療.png" alt="健康醫療封面圖" height="190"> -->
                    <picture>
                      <source srcset="/images/健康醫療.webp" type="image/webp" />
                      <source srcset="/images/健康醫療.png" type="image/png" />
                      <img src="/images/健康醫療.webp" alt="健康醫療封面圖" height="190" />
                    </picture>
                  </nuxt-link>
                </div>
                <div>
                  <div>主要類別：健康醫療</div>
                  <div
                    v-if="
                      allCat['健康醫療'].sub_category.length > 0 &&
                      allCat['健康醫療'].sub_category[0] != ''
                    "
                  >
                    <span v-for="(element, index) in allCat['健康醫療'].sub_category" :key="index">
                      <nuxt-link
                        v-if="element"
                        class="underline"
                        :to="'/high_value_datasets/' + allCat['健康醫療'].hacid + '?hq=' + element"
                        :title="'前往搜尋' + element"
                      >
                        {{ element }}
                      </nuxt-link>
                      <span v-if="element && index != allCat['健康醫療'].sub_category.length - 1"
                        >、</span
                      >
                    </span>
                  </div>
                </div>
              </el-col>
              <el-col v-if="allCat['能源管理']" :span="8" :xs="24">
                <div>
                  <nuxt-link
                    :to="`/high_value_datasets/${allCat['能源管理'].hacid}`"
                    :title="`前往${allCat['能源管理'].title}`"
                  >
                    <!-- <img src="/images/能源管理.png" alt="能源管理封面圖" height="190"> -->
                    <picture>
                      <source srcset="/images/能源管理.webp" type="image/webp" />
                      <source srcset="/images/能源管理.png" type="image/png" />
                      <img src="/images/能源管理.webp" alt="能源管理封面圖" height="190" />
                    </picture>
                  </nuxt-link>
                </div>
                <div>
                  <div>主要類別：能源管理</div>
                  <div
                    v-if="
                      allCat['能源管理'].sub_category.length > 0 &&
                      allCat['能源管理'].sub_category[0] != ''
                    "
                  >
                    <span v-for="(element, index) in allCat['能源管理'].sub_category" :key="index">
                      <nuxt-link
                        v-if="element"
                        class="underline"
                        :to="'/high_value_datasets/' + allCat['能源管理'].hacid + '?hq=' + element"
                        :title="'前往搜尋' + element"
                      >
                        {{ element }}
                      </nuxt-link>
                      <span v-if="element && index != allCat['能源管理'].sub_category.length - 1"
                        >、</span
                      >
                    </span>
                  </div>
                </div>
              </el-col>
              <el-col v-if="allCat['社會救助']" :span="8" :xs="24">
                <div>
                  <nuxt-link
                    :to="`/high_value_datasets/${allCat['社會救助'].hacid}`"
                    :title="`前往${allCat['社會救助'].title}`"
                  >
                    <!-- <img src="/images/社會救助.png" alt="社會救助封面圖" height="190"> -->
                    <picture>
                      <source srcset="/images/社會救助.webp" type="image/webp" />
                      <source srcset="/images/社會救助.png" type="image/png" />
                      <img src="/images/社會救助.webp" alt="社會救助封面圖" height="190" />
                    </picture>
                  </nuxt-link>
                </div>
                <div>
                  <div>主要類別：社會救助</div>
                  <div
                    v-if="
                      allCat['社會救助'].sub_category.length > 0 &&
                      allCat['社會救助'].sub_category[0] != ''
                    "
                  >
                    <span v-for="(element, index) in allCat['社會救助'].sub_category" :key="index">
                      <nuxt-link
                        v-if="element"
                        class="underline"
                        :to="'/high_value_datasets/' + allCat['社會救助'].hacid + '?hq=' + element"
                        :title="'前往搜尋' + element"
                      >
                        {{ element }}
                      </nuxt-link>
                      <span v-if="element && index != allCat['社會救助'].sub_category.length - 1"
                        >、</span
                      >
                    </span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </section>
        <section>
          <h3>主題應用案例</h3>
          <div class="custom-carousel custom-carousel--card">
            <el-carousel
              ref="card"
              trigger="click"
              arrow="never"
              :indicator-position="'none'"
              :interval="5000"
              type="card"
            >
              <el-carousel-item v-for="(element, index) in relApp" :key="'app' + index">
                <ul class="normal-list is-image is-image--top">
                  <li class="normal-item">
                    <div class="normal-item-image">
                      <nuxt-link :title="`前往 ${element.title} 活化應用`" :to="element.path">
                        <img :src="element.imgPath" :alt="`${element.title}應用圖片`" />
                      </nuxt-link>
                    </div>
                    <nuxt-link
                      :title="`前往 ${element.title} 活化應用`"
                      :to="element.path"
                      class="normal-item-title"
                    >
                      {{ element.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </el-carousel-item>
              <el-button class="custom-carousel-btn-left" @click="cardPrev()">
                <span class="visually-hidden">上一個</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                  />
                </svg>
              </el-button>
              <el-button class="custom-carousel-btn-right" @click="cardNext()">
                <span class="visually-hidden">下一個</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                  />
                </svg>
              </el-button>
            </el-carousel>
          </div>
        </section>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('高應用價值主題專區')
const pageDescription = ref('高應用價值主題專區')
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

const card = ref<any | null>(null)
const cardPrev = () => {
  if (card.value) {
    card.value.prev()
  }
}
const cardNext = () => {
  if (card.value) {
    card.value.next()
  }
}

const relApp = ref([
  {
    title: '高雄農來訊',
    path: '/applications/1',
    imgPath: '/images/logo-icon.png'
  },
  {
    title: '高雄農來訊2',
    path: '/applications/1',
    imgPath: '/images/logo-icon.png'
  },
  {
    title: '高雄農來訊3',
    path: '/applications/1',
    imgPath: '/images/logo-icon.png'
  },
  {
    title: '高雄農來訊4',
    path: '/applications/1',
    imgPath: '/images/logo-icon.png'
  },
  {
    title: '高雄農來訊5',
    path: '/applications/1',
    imgPath: '/images/logo-icon.png'
  }
])

const pageData = ref([
  {
    hacid: 1,
    title: '氣候環境',
    imgPath: '/images/high-value-demo-mobile-climate.jpg'
  },
  {
    hacid: 2,
    title: '災害防救',
    imgPath: '/images/high-value-demo-mobile-disaster.jpg'
  },
  {
    hacid: 3,
    title: '交通運輸',
    imgPath: '/images/high-value-demo-mobile-traffic.jpg'
  },
  {
    hacid: 4,
    title: '健康醫療',
    imgPath: '/images/high-value-demo-mobile-health.jpg'
  },
  {
    hacid: 5,
    title: '能源管理',
    imgPath: '/images/high-value-demo-mobile-energy.jpg'
  },
  {
    hacid: 6,
    title: '社會救助',
    imgPath: '/images/high-value-demo-mobile-social.jpg'
  }
])

const allCat = {
  氣候環境: { hacid: '1', title: '氣候環境', sub_category: ['天氣', '大氣觀測', '環境監測'] },
  災害防救: { hacid: '2', title: '災害防救', sub_category: ['天然災害', '動植物疫災', '救災資源'] },
  交通運輸: {
    hacid: '3',
    title: '交通運輸',
    sub_category: ['公共運輸', '道路服務', '低碳交通', '交通安全', '觀光遊憩']
  },
  健康醫療: { hacid: '4', title: '健康醫療', sub_category: ['傳染病防治', '食藥管理', '國民健康'] },
  能源管理: {
    hacid: '5',
    title: '能源管理',
    sub_category: ['能源資源', '電力供需', '再生能源發展']
  },
  社會救助: { hacid: '6', title: '社會救助', sub_category: ['友善高齡', '弱勢平權', '社福補助'] }
}
</script>

<style scoped>
.el-carousel__item {
  opacity: 0;
  &.is-in-stage {
    opacity: 1;
  }
}
</style>
