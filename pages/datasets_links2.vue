<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <section>
        <el-table
          :data="tableData"
          :default-sort="{ prop: 'modifyDateTime', order: 'descending' }"
          empty-text="暫無資料"
        >
          <el-table-column prop="unit" label="提供機關" sortable>
            <template #default="scope">
              <nuxt-link :to="scope.row.path" :title="`前往搜尋 ${scope.row.unit} 資料集`">
                {{ scope.row.unit }}
              </nuxt-link>
            </template>
          </el-table-column>
          <el-table-column prop="modifyDateTime" label="最後更新時間" align="right" sortable />
        </el-table>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('跨平臺介接即時狀態表')
const pageDescription = ref('跨平臺介接即時狀態表')
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

const tableData = ref([
  {
    modifyDateTime: '',
    unit: '新北市政府農業局',
    path: '/datasets/search'
  },
  {
    modifyDateTime: '2024-06-02 10:51',
    unit: '公務人員退休撫卹基金管理委員會',
    path: '/datasets/search'
  },
  {
    modifyDateTime: '2024-06-02 10:51',
    unit: '公務人員退休撫卹基金管理委員會',
    path: '/datasets/search'
  },
  {
    modifyDateTime: '2024-06-02 10:51',
    unit: '公務人員退休撫卹基金管理委員會',
    path: '/datasets/search'
  },
  {
    modifyDateTime: '2024-06-02 10:51',
    unit: '公務人員退休撫卹基金管理委員會',
    path: '/datasets/search'
  },
  {
    modifyDateTime: '2024-06-02 10:51',
    unit: '公務人員退休撫卹基金管理委員會',
    path: '/datasets/search'
  },
  {
    modifyDateTime: '2024-06-02 10:51',
    unit: '公務人員退休撫卹基金管理委員會',
    path: '/datasets/search'
  },
  {
    modifyDateTime: '2024-06-02 10:51',
    unit: '公務人員退休撫卹基金管理委員會',
    path: '/datasets/search'
  },
  {
    modifyDateTime: '2024-06-02 10:51',
    unit: '公務人員退休撫卹基金管理委員會',
    path: '/datasets/search'
  },
  {
    modifyDateTime: '2024-06-02 10:51',
    unit: '公務人員退休撫卹基金管理委員會',
    path: '/datasets/search'
  }
])
const { isRadio, addThScope } = useJSAccessibility()
onMounted(() => {
  isRadio()
  addThScope()
})
</script>
