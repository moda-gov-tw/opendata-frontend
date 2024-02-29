<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/consult_team',
          title: '諮詢小組'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <section>
        <el-table
          :data="paginatedList"
          :default-sort="{ prop: 'modifyDate', order: 'descending' }"
          empty-text="暫無資料"
        >
          <el-table-column prop="modifyDate" label="詮釋資料最後更新時間" sortable width="220" />
          <el-table-column prop="unit" label="機關" sortable width="160" />
          <el-table-column prop="name" label="標題" sortable>
            <template #default="scope">
              <nuxt-link :to="scope.row.path" :title="`前往資料集 ${scope.row.name}`">
                {{ scope.row.name }}
              </nuxt-link>
            </template>
          </el-table-column>
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
  </main>
</template>

<script setup lang="ts">
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('政府資料開放諮詢小組會議紀錄')
const pageDescription = ref('政府資料開放諮詢小組會議紀錄')
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
    modifyDate: '2024-08-02',
    unit: '內政部資訊中心',
    name: '內政部資料開放諮詢小組會議紀錄',
    path: '/dataset/1'
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
