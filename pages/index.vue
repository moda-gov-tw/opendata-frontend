<template>
  <main>
    <div class="page page--index">
      <!-- 這裡可放banner -->
      <!-- <div class="banner"></div> -->
      <akContainer class="ak-container-box-bg" />
      <h2 class="visually-hidden">{{ pageTitle }}</h2>
      <div class="spotlight-box">
        <theSearchbar show-hot-keywords />
      </div>
      <section>
        <h3 class="title-with-line">資料集服務分類</h3>
        <div class="datasets-categories-list-box">
          <ul class="datasets-categories-list">
            <li
              v-for="(item, index) in categoryDefault"
              :key="index"
              class="datasets-categories-item"
            >
              <nuxt-link
                :title="`前往 ${item.label}`"
                :to="'/datasets/search?ct=' + item.value"
                class="datasets-categories-link"
              >
                <div class="datasets-categories-img"></div>
                <div class="datasets-categories-des">
                  <span>{{ item.label }}</span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </section>
      <section class="section-bg">
        <div class="count-card-box">
          <el-card>
            <template #header>
              <div class="card-header">
                <h3>每日異動資料集</h3>
                <el-button type="primary" text>下載每日異動資料</el-button>
              </div>
            </template>
            <el-empty v-if="changeList.length == 0" description="目前沒有資料" />
            <ul v-else class="dataset-list">
              <li v-for="(item, index) in changeList" :key="index" class="dataset-item">
                <div class="dataset-title">
                  <nuxt-link :title="`前往 ${item.title}`" :to="'/dataset/' + item.nid">{{
                    item.title
                  }}</nuxt-link>
                </div>
                <div class="dataset-content">
                  {{ item.content }}
                </div>
                <ul class="dataset-info">
                  <li class="dataset-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                      />
                    </svg>
                    <span class="visually-hidden">提供單位</span> {{ item.agency_name }}
                  </li>
                  <li class="dataset-info-item">
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
                    <el-tag
                      type="info"
                      effect="plain"
                      style="
                        color: rgb(0, 94, 21);
                        border-color: rgb(0, 94, 21);
                        background: white;
                        cursor: default;
                        margin-left: 5px;
                      "
                    >
                      JSON
                    </el-tag>
                  </li>
                </ul>
              </li>
            </ul>
          </el-card>
          <el-card>
            <template #header>
              <div class="card-header">
                <h3>熱門資料集</h3>
                <nuxt-link title="前往 熱門資料集" to="/datasets/search"> 查看全部 </nuxt-link>
              </div>
            </template>
            <el-empty v-if="popList.length == 0" description="description" />
            <ul v-else class="dataset-list">
              <li v-for="(item, index) in popList" :key="index" class="dataset-item">
                <div class="dataset-title">
                  <nuxt-link :title="`前往 ${item.title}`" :to="'/dataset/' + item.nid">{{
                    item.title
                  }}</nuxt-link>
                </div>
                <div class="dataset-content">
                  {{ item.content }}
                </div>
                <ul class="dataset-info">
                  <li class="dataset-info-item">
                    <span class="agency-button">
                      <span class="visually-hidden">提供單位{{ item.agency_name }}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                        />
                      </svg>
                    </span>
                    {{ item.agency_name }}
                  </li>
                  <li class="dataset-info-item">
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
                    <el-tag
                      type="info"
                      effect="plain"
                      style="
                        color: rgb(0, 94, 21);
                        border-color: rgb(0, 94, 21);
                        background: white;
                        cursor: default;
                        margin-left: 5px;
                      "
                    >
                      JSON
                    </el-tag>
                  </li>
                </ul>
              </li>
            </ul>
          </el-card>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('首頁')

useHead({
  title: pageTitle,
  meta: [
    {
      hid: 'og:title',
      property: 'og:title',
      content: pageTitle.value + ' ｜ ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: pageTitle.value + ' ｜ ' + runtimeConfig.public.websiteName
    }
  ]
})

const categoryDefault = [
  { label: '生育保健', value: 291 },
  { label: '出生及收養', value: 285 },
  { label: '求學及進修', value: 280 },
  { label: '服兵役', value: 548 },
  { label: '求職及就業', value: 261 },
  { label: '開創事業', value: 258 },
  { label: '婚姻', value: 549 },
  { label: '投資理財', value: 254 },
  { label: '休閒旅遊', value: 253 },
  { label: '交通及通訊', value: 257 },
  { label: '就醫', value: 274 },
  { label: '購屋及遷徙', value: 417 },
  { label: '選舉及投票', value: 283 },
  { label: '生活安全及品質', value: 247 },
  { label: '退休', value: 550 },
  { label: '老年安養', value: 286 },
  { label: '生命禮儀', value: 416 },
  { label: '公共資訊', value: 249 }
]

const changeList = [
  {
    nid: 1,
    title: '農業部農業氣象影音',
    content: '提供農業部農業氣象影音RSS',
    agency_name: '農業部'
  },
  {
    nid: 2,
    title: '農業部新聞澄清稿',
    content: '提供農業部新聞澄清稿RSS',
    agency_name: '農業部'
  },
  {
    nid: 3,
    title: '農業部資訊圖文',
    content: '提供農業部最新圖文RSS',
    agency_name: '農業部'
  },
  {
    nid: 4,
    title: '農業部公告',
    content: '提供農業部公告RSS',
    agency_name: '農業部'
  },
  {
    nid: 5,
    title: '農業部活動預告',
    content: '提供農業部活動預告RSS',
    agency_name: '農業部'
  }
]

const popList = [
  {
    nid: 1,
    title: 'CNS11643中文標準交換碼全字庫(簡稱全字庫)',
    content:
      'zip壓縮檔，內容包含全字庫字型、屬性資料及中文碼對照表三部分，其中全字庫字型提供明體、正宋體及正楷體3種；屬性資料則涵蓋注音、倉頡、筆畫、部首、拼音、部件及筆順等7種；中文碼對照表則提供BIG5、Unicode、電信碼、地政自造字、財稅內碼、稅務碼及工商自造字等7種中文內碼對照。',
    agency_name: '數位發展部'
  },
  {
    nid: 2,
    title: '上市公司每月營業收入彙總表',
    content: '上市公司每月營業收入彙總表 (證交所)',
    agency_name: '金融監督管理委員會證券期貨局'
  },
  {
    nid: 3,
    title: '臺中市公告類加值應用圖輯(TCGIS)',
    content:
      '本資料集為依台中市政府公布的資訊，將原始檔案提升開放為可加值利用之檔案，計有確診足跡、噪音管制區、重劃區、土地使用分區等高應用價值檔案，並將不定期擴充',
    agency_name: '臺中市政府數位治理局'
  },
  {
    nid: 4,
    title: '盤後資訊 > 個股日成交資訊',
    content: '上市個股日成交資訊 (臺灣證券交易所)',
    agency_name: '金融監督管理委員會證券期貨局'
  },
  {
    nid: 5,
    title: '臺南市流感疫苗接種合約醫療院所名單',
    content: '本資料集主要提供流感疫苗接種合約醫療院所名單',
    agency_name: '臺南市政府衛生局'
  }
]
</script>
