<template>
  <div class="col-right col-main">
    <h2>{{ pageTitle }}</h2>
    <el-switch
      v-model="subscribeNotiValue"
      active-text="開啟更新通知"
      inactive-text="關閉"
      label="更新通知開關"
      size="large"
    />
    <p>(開啟後若有資料集更新則會寄送Email進行通知)</p>
    <section>
      <el-table
        :data="paginatedList"
        :default-sort="{ prop: 'subscribeDate', order: 'descending' }"
        empty-text="暫無資料"
      >
        <el-table-column prop="subscribeDate" label="訂閱日期" sortable width="120" />
        <el-table-column prop="name" label="資料集名稱" sortable>
          <template #default="scope">
            <nuxt-link :to="scope.row.path" :title="`前往資料集 ${scope.row.name}`">
              {{ scope.row.name }}
            </nuxt-link>
          </template>
        </el-table-column>
        <el-table-column prop="unit" label="更新通知" align="right" sortable />
      </el-table>
      <ElConfigProvider :locale="zhTW">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :small="true"
          layout="total, prev, pager, next, jumper"
          :total="tableData.length"
          :hide-on-single-page="true"
        />
      </ElConfigProvider>
    </section>
  </div>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('訂閱資料集清單')
const pageDescription = ref('訂閱資料集清單')
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

const emit = defineEmits(['updateTitle'])
onMounted(() => {
  emit('updateTitle', pageTitle.value)
})

const subscribeNotiValue = ref(false)

const tableData = ref([
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  },
  {
    subscribeDate: '2024-11-08',
    name: '112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)',
    path: '/dataset/1',
    updateNotification: ''
  }
])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return tableData.value.slice(start, end)
})
const { isRadio, addThScope } = useJSAccessibility()
onMounted(() => {
  isRadio()
  addThScope()
})
</script>
