<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/rewards',
          title: '獎勵活動專區'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-tabs v-model="Tab">
        <el-tab-pane label="金質獎" name="first">
          <h3>中央機關</h3>
          <h4>第一組</h4>
          <ul class="od-list od-list--type2 od-list--type2--bordered">
            <li class="od-item">
              <div class="od-item-image">
                <img src="/images/logo-icon.png" alt="照片" />
              </div>
              <div class="od-item-container">
                <div class="title">
                  獲獎單位：
                  <nuxt-link to="/datasets/search" title="前往搜尋有關 內政部 的開放資料">
                    <span class="color-warning-dark">內政部</span>
                  </nuxt-link>
                </div>
                <div class="content">金質獎</div>
              </div>
            </li>
            <li class="od-item">
              <div class="od-item-image">
                <img src="/images/logo-icon.png" alt="照片" />
              </div>
              <div class="od-item-container">
                <div class="title">
                  獲獎單位：
                  <nuxt-link to="/datasets/search" title="前往搜尋有關 內政部 的開放資料">
                    <span class="color-warning-dark">財政部</span>
                  </nuxt-link>
                </div>
                <div class="content">金質獎</div>
              </div>
            </li>
          </ul>
          <el-button @click="navigateTo('/rewards')">返回列表頁</el-button>
        </el-tab-pane>
        <el-tab-pane label="人氣獎" name="second">
          <ul class="od-list od-list--type2">
            <li class="od-item">
              <div class="od-item-image">
                <img src="/images/logo-icon.png" alt="照片" />
              </div>
              <div class="od-item-container">
                <div class="title">
                  獲獎資料集：<br />
                  <nuxt-link to="/dataset/1" title="前往資料集 上市公司每月營業收入彙總表">
                    上市公司每月營業收入彙總表
                  </nuxt-link>
                </div>
                <br />
                <div class="title">提供機關：<br />融監督管理委員會證券期貨局</div>
                <br />
                <div class="content">第 1 名</div>
              </div>
            </li>
            <li class="od-item">
              <div class="od-item-image">
                <img src="/images/logo-icon.png" alt="照片" />
              </div>
              <div class="od-item-container">
                <div class="title">
                  獲獎資料集：<br />
                  <nuxt-link
                    to="/dataset/1"
                    title="前往資料集 CNS11643中文標準交換碼全字庫(簡稱全字庫)"
                  >
                    CNS11643中文標準交換碼全字庫(簡稱全字庫)
                  </nuxt-link>
                </div>
                <br />
                <div class="title">提供機關：<br />數位發展部</div>
                <br />
                <div class="content">第 2 名</div>
              </div>
            </li>
          </ul>
          <el-button @click="navigateTo('/rewards')">返回列表頁</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('2022頒獎典禮獲獎名單')
const pageDescription = ref('2022頒獎典禮獲獎名單')
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

const Tab = ref('first')
</script>
