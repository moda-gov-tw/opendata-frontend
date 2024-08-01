<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/high_value_datasets',
          title: '高應用價值主題專區 '
        }
      ]"
      :current-page="pageTitle"
      ak-container-bg
    />
    <div class="spotlight-box">
      <h2>高應用價值主題專區：{{ pageTitle }}</h2>
    </div>
    <div
      :class="[
        'page',
        'page--highvalue page--highvalue-detail',
        slugWord ? 'page--highvalue-detail--' + slugWord : ''
      ]"
    >
      <div class="mobile-banner">
        <img :src="`/images/high-value-demo-mobile-${slugWord}.jpg`" alt="氣候環境資料應用示意圖" />
      </div>
      <div class="links-group links-group--with-icons">
        <el-row type="flex" justify="center" :gutter="10">
          <el-col v-for="(element, index) in pageData" :key="'icon' + index" :span="4">
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
      <div class="desktop-banner">
        <img
          :src="`/images/high-value-demo-desktop-${slugWord}.jpg`"
          alt="氣候環境資料應用示意圖"
        />
      </div>
      <section>
        <h3 class="title-with-line">資料集清單</h3>
        <div class="dataset-group">
          <div class="dataset-sort">
            <div class="page-tool-bar">
              <div class="searchbar">
                <el-row>
                  <el-col :span="20">
                    <label>
                      <el-input
                        id="searchbar-input"
                        v-model="input"
                        accesskey="S"
                        placeholder="請輸入關鍵字"
                        size="large"
                        label="請輸入關鍵字搜尋"
                      />
                    </label>
                  </el-col>
                  <el-col :span="4">
                    <el-button type="primary" size="large" class="searchbar-submit-btn">
                      <span class="visually-hidden">搜尋</span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                      </svg>
                    </el-button>
                  </el-col>
                </el-row>
              </div>
              <label for="term_select">排序：</label>
              <el-select
                id="term_select"
                v-model="currentTerm"
                placeholder="請選擇排序"
                size="large"
                aria-label="選擇排序"
              >
                <el-option
                  v-for="(item, index) in termOptions"
                  :key="index"
                  :value="item"
                  :label="item"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="dataset-radio">
          子類別:
          <el-radio-group v-model="currentCategory" style="margin-left: 10px; margin-top: 5px">
            <el-radio
              v-for="(element, key) in allCategory"
              :key="'radio' + key"
              :label="element.label"
              style="margin-left: 3px"
            >
              {{ element.label }}
            </el-radio>
          </el-radio-group>
        </div>
        <p>提供金標章且單階層結構化之資料集資料預覽功能</p>
        <ul class="dataset-list">
          <li v-for="(item, index) in paginatedList" :key="index" class="dataset-item">
            <div class="dataset-title">
              <nuxt-link :to="item.path" :title="`另開視窗 前往 ${item.title}`">
                {{ item.title }}
              </nuxt-link>
              <el-button :id="'highvalue-resource' + index" type="primary"> 資料預覽 </el-button>
            </div>
            <div class="dataset-content">
              <p>{{ item.content }}</p>
              <p><strong>主要欄位說明：</strong> {{ item.mainCol }}</p>
            </div>
            <div class="dataset-info">
              <ul class="dataset-info">
                <li class="dataset-info-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                    class="award type-1"
                  >
                    <title>金標章</title>
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"
                    />
                  </svg>
                </li>
                <li class="dataset-info-item">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <title>白金標章</title>
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
                    />
                  </svg>
                </li>
                <li class="dataset-info-item">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                    />
                  </svg>
                  <span class="visually-hidden">提供單位</span> {{ item.unit }}
                </li>
                <li class="dataset-info-item">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                    />
                  </svg>
                  {{ item.modifyDateTime }} 更新
                </li>
                <li class="dataset-info-item">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                    />
                  </svg>
                  <span class="visually-hidden">下載數</span> {{ item.downloadCount }}
                </li>
                <li class="dataset-info-item">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
                    />
                  </svg>
                  <span class="visually-hidden">意見數</span> {{ item.commentCount }}
                </li>
              </ul>
            </div>
            <div class="tag-group">
              <el-tag
                type="info"
                effect="plain"
                style="
                  color: rgb(224, 0, 133);
                  border-color: rgb(224, 0, 133);
                  background: white;
                  cursor: default;
                  margin-left: 5px;
                "
              >
                CSV
              </el-tag>
            </div>
          </li>
        </ul>
        <div class="pagination">
          <ElConfigProvider :locale="zhTW">
            <el-pagination
              v-model:current-page="currentPage"
              v-model:page-size="pageSize"
              :small="true"
              layout="total, prev, pager, next, jumper"
              :total="dataList.length"
              :hide-on-single-page="true"
            />
          </ElConfigProvider>
        </div>
      </section>
      <section v-if="relApp.length > 0" class="app-section">
        <h3 class="title-with-line">相關活化應用</h3>
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
      <section class="info-block">
        <img src="/images/info-block-deco.svg" alt="" class="deco" />
        <div class="info-block-container">
          <div class="left">
            <div class="title-with-line">文字雲</div>
            <div class="cloud-box">
              <div id="word_cloud" ref="canvas" class="statistics-wordcloud"></div>
            </div>
          </div>
          <div class="right">
            <div class="title-with-line">近六個月數值統計</div>
            <canvas
              ref="valueChart"
              aria-label="近六個月數值統計"
              role="img"
              style="width: 100%; height: 300px"
            ></canvas>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'
import zhTW from 'element-plus/es/locale/lang/zh-tw'
import { Chart, registerables } from 'chart.js'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('')
const pageDescription = ref('')
const route = useRoute()
const { $wordcloud }: any = useNuxtApp()
const canvas = ref(null)

useHead({
  title: computed(() => '高應用價值主題專區：' + pageTitle.value),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: computed(() => pageDescription.value)
    },
    { hid: 'og:url', property: 'og:url', content: runtimeConfig.public.baseUrl + route.path },
    {
      hid: 'og:title',
      property: 'og:title',
      content: computed(
        () => '高應用價值主題專區：' + pageTitle.value + ' ｜ ' + runtimeConfig.public.websiteName
      )
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: computed(() => pageDescription.value)
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: runtimeConfig.public.baseUrl + route.path
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: computed(
        () => '高應用價值主題專區：' + pageTitle.value + ' ｜ ' + runtimeConfig.public.websiteName
      )
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: computed(() => pageDescription.value)
    }
  ]
})

Chart.register(...registerables)
const valueChart = ref<HTMLCanvasElement | null>(null)
const { isRadio, addThScope } = useJSAccessibility()
onMounted(() => {
  if (valueChart.value) {
    const ctx = valueChart.value.getContext('2d') as CanvasRenderingContext2D
    const valueChartChart = new Chart(ctx, {
      data: {
        labels: ['2024/5', '2024/6', '2024/7', '2024/8', '2024/9', '2024/10'],
        datasets: [
          {
            type: 'bar',
            yAxisID: 'y',
            label: '下載數',
            data: [1974326, 1975295, 1976095, 1977026, 1977542, 1977921],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // backgroundColor: ['rgba(0, 116, 173, 0.5)'],
            // borderColor: ['rgba(0, 116, 173, 1)'],
            borderWidth: 1
          },
          {
            yAxisID: 'y1',
            type: 'line',
            label: '瀏覽數',
            data: [633461, 642667, 651621, 662705, 675909, 684200],
            borderColor: 'rgb(54, 162, 235)'
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
            min: 1973320,
            position: 'left'
          },
          y1: {
            type: 'linear',
            position: 'right',
            beginAtZero: false,
            min: 533460
          }
        }
      }
    })
  }
  document.getElementById('word_cloud')!.addEventListener('wordcloudstop', () => {
    const word = document.getElementsByClassName('custom-class')
    for (let i = 0; i < word.length; i++) {
      word[i].setAttribute('tabindex', '0')
      word[i].addEventListener('keyup', (event: any) => {
        if (event.keyCode === 13) {
          const text = word[i].textContent
          navigateTo('/datasets/search?rtt=' + text)
        }
      })
    }
  })
  render()
  isRadio()
  addThScope()
})

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

const slugWord = ref('')

const updateValues = (id: string | string[]) => {
  switch (id) {
    case '1':
      slugWord.value = 'climate'
      pageTitle.value = '氣候變遷'
      pageDescription.value = '氣候變遷'
      break
    case '2':
      slugWord.value = 'disaster'
      pageTitle.value = '災害防救'
      pageDescription.value = '災害防救'
      break
    case '3':
      slugWord.value = 'traffic'
      pageTitle.value = '交通運輸'
      pageDescription.value = '交通運輸'
      break
    case '4':
      slugWord.value = 'health'
      pageTitle.value = '健康醫療'
      pageDescription.value = '健康醫療'
      break
    case '5':
      slugWord.value = 'energy'
      pageTitle.value = '能源管理'
      pageDescription.value = '能源管理'
      break
    case '6':
      slugWord.value = 'social'
      pageTitle.value = '社會救助'
      pageDescription.value = '社會救助'
      break
    default:
      slugWord.value = '--'
      pageTitle.value = '----'
      pageDescription.value = '----'
      break
  }
}

const routeId = computed(() => route.params.id)

watch(
  routeId,
  (newId) => {
    updateValues(newId)
  },
  { immediate: true }
)

const input = ref('')
const currentTerm = ref('上架日期新至舊')
const termOptions = [
  '上架日期新至舊',
  '上架日期舊至新',
  '瀏覽次數多至少',
  '瀏覽次數少至多',
  '詮釋資料最後修改日期新至舊',
  '詮釋資料最後修改日期舊至新',
  '下載次數多至少',
  '下載次數少至多',
  '最近七天下載次數多至少',
  '最近七天下載次數少至多',
  '機關名稱頭至尾',
  '機關名稱尾至頭'
]

const currentCategory = ref('all')
const allCategory = [
  {
    id: 'all',
    label: '全部'
  },
  {
    id: '1',
    label: '天然災害'
  },
  {
    id: '2',
    label: '動植物疫災'
  },
  {
    id: '3',
    label: '救災資源'
  }
]

const dataList = ref([
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  },
  {
    title: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    content: '本資料集屬112至116年規劃更新成果。',
    mainCol: '圖資名稱、資料格式、坐標系統、下載網址',
    cat: '開放資料',
    unit: '內政部國土測繪中心',
    modifyDateTime: '2024-11-08 17:13:50',
    downloadCount: '0',
    commentCount: '0'
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return dataList.value.slice(start, end)
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
const tags = [
  ['政府統計', 10],
  ['政府支出', 4],
  ['政府預算', 6],
  ['主計', 3]
]
const render = (wordSize: number = 10) => {
  $wordcloud(document.getElementById('word_cloud'), {
    list: tags,
    gridSize: 24,
    weightFactor: wordSize,
    fontFamily: 'Noto Sans TC',
    rotateRatio: 0,
    classes: 'custom-class',
    color: () => {
      const ind = customCrypt()
      return ['#E51010', '#A26A15', '#0079B7', '#068415'][ind]
    },
    click: (item: any) => {
      navigateTo('/datasets/search?rtt=' + item[0])
    },
    hover: (item: any) => {
      if (item !== undefined) {
        document.body.style.cursor = 'pointer'
        document.getElementById('word_cloud')!.title = `移至資料集列表，關鍵字: ${item[0]}`
      } else {
        document.body.style.cursor = 'default'
      }
    }
  })
}
const customCrypt = () => {
  const crypto = window.crypto || (window as any).msCrypto
  const array = new Uint32Array(1)
  crypto.getRandomValues(array) // Compliant for security-sensitive use cases
  return array[0] % 4
}
</script>
<style>
.statistics-wordcloud {
  width: 80%;
  height: 360px;
  margin: 0 auto;
  background-color: #e9edf2 !important;
}
</style>
