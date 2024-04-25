<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-divider />
      <el-button type="primary" size="large" plain>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
          <path
            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          />
        </svg>
        下載各部會資料開放情形
      </el-button>
      <div class="month-select">
        <el-button>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
            <path
              d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
            />
          </svg>
          <span class="visually-hidden">上個月</span>
        </el-button>
        &nbsp;
        <span>2024年02月</span>
        &nbsp;
        <el-button>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
            <path
              d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
            />
          </svg>
          <span class="visually-hidden">下個月</span>
        </el-button>
      </div>
      <ul class="od-custom-chart-list">
        <li v-for="(item, index) in pageData" :key="index" class="od-custom-chart-item">
          <div class="item-left">
            <div class="inner">{{ item.name }}</div>
          </div>
          <div class="item-right">
            <div class="item-right__row total">
              <div class="label">總數</div>
              <div class="value">
                <div class="num">{{ item.totalDataset }}</div>
                <div
                  class="bar"
                  :style="`width: ${
                    item.totalDataset == 0 ? '0' : (item.totalDataset / item.maxTotalDataset) * 100
                  }%;`"
                ></div>
              </div>
            </div>
            <div class="item-right__row mon-pub">
              <div class="label">每月上架數</div>
              <div class="value">
                <div class="num">{{ item.pubCount }}</div>
                <div
                  class="bar"
                  :style="`width: ${
                    item.pubCount == 0 ? '0' : (item.pubCount / item.maxPubCount) * 100
                  }%;`"
                ></div>
              </div>
            </div>
            <div class="item-right__row unpub">
              <div class="label">下架數</div>
              <div class="value">
                <div class="num">{{ item.totalUnpubCount }}</div>
                <div
                  class="bar"
                  :style="`width: ${
                    item.totalUnpubCount == 0
                      ? '0'
                      : (item.totalUnpubCount / item.maxTotalUnpubCount) * 100
                  }%;`"
                ></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('各部會資料開放情形')
const pageDescription = ref('各部會資料開放情形')
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

const pageData = ref([
  {
    name: '內政部',
    totalDataset: 1644,
    maxTotalDataset: 24985,
    pubCount: 6,
    maxPubCount: 57,
    totalUnpubCount: 161,
    maxTotalUnpubCount: 7900
  }
])
</script>

<style scoped>
.month-select {
  text-align: center;
}
</style>
