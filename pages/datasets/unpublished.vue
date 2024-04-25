<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/datasets',
          title: '資料集'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <div class="page-tool-bar">
        <div class="searchbar">
          <el-row :gutter="16" align="middle">
            <el-col :md="12">
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
            </el-col>
            <el-col :md="12">
              <el-button type="primary" size="large" @click="advSearchOpen = !advSearchOpen">
                進階搜尋
              </el-button>
              <el-button type="primary" size="large">重設</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <section>
        <el-table
          :data="paginatedList"
          :default-sort="{ prop: 'unpublishDate', order: 'descending' }"
          empty-text="暫無資料"
        >
          <el-table-column prop="unpublishDate" label="下架日期" sortable width="120" />
          <el-table-column prop="name" label="資料集名稱" sortable>
            <template #default="scope">
              <nuxt-link :to="scope.row.path" :title="`前往資料集 ${scope.row.name}`">
                {{ scope.row.name }}
              </nuxt-link>
            </template>
          </el-table-column>
          <el-table-column prop="unit" label="提供機關" align="right" sortable />
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
const pageTitle = ref('預計下架資料集')
const pageDescription = ref('預計下架資料集')
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

const advSearchOpen = ref(false)

const input = ref('')

const tableData = ref([])

const currentPage = ref(1)
const pageSize = ref(10)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return tableData.value.slice(start, end)
})

const { addThScope } = useJSAccessibility()
onMounted(() => {
  addThScope()
})
</script>
