<template>
  <main>
    <div class="page page--2cols page--2cols-right">
      <div class="page-cols">
        <el-card header="個人資訊" shadow="never">
          <ul class="normal-list">
            <li class="normal-item">
              <div class="title">公務帳號</div>
              <div class="content">root</div>
            </li>
            <li class="normal-item">
              <div class="title">姓名</div>
              <div class="content">根使用者</div>
            </li>
          </ul>
        </el-card>
        <el-card header="身份" shadow="never">
          <ul class="normal-list normal-list--indent">
            <li class="normal-item">
              <div class="title">資料提供者</div>
              <div class="content">
                  <ul>
                    <li>國家發展委員會</li>
                    <li>數位發展部</li>
                  </ul>
              </div>
            </li>
            <li class="normal-item">
              <div class="title">資料審查者</div>
              <div class="content">
                  <ul>
                    <li>行政院</li>
                    <li>國家發展委員會</li>
                    <li>數位發展部</li>
                  </ul>
              </div>
            </li>
          </ul>
        </el-card>
      </div>
      <div class="page-cols">
        <div class="page-toolbar">
          <div class="input-button-combine-bar">
            <el-input v-model="searchBar" placeholder="查詢公告名稱、內容" accesskey="S" size="large"/>
            <el-button type="primary" size="large">
              <span class="visually-hidden">搜尋</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </el-button>
          </div>
        </div>
        <br />
        <el-table :data="paginatedList" stripe border empty-text="暫無資料" flexible >
          <el-table-column prop="publishDate" label="發布日期" width="150" />
          <el-table-column prop="title" label="標題">
            <template #default="scope">
              <span v-if="scope.row.pin" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"/></svg>
              </span>
              <router-link :to="scope.row.path" :title="`前往 ${scope.row.title}`">
                {{ scope.row.title }}
              </router-link>
            </template>
          </el-table-column>
        </el-table>
        <ElConfigProvider :locale="zhTW">
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[15, 30, 50, 100]"
            layout="total, prev, pager, next, sizes"
            :total="tableData.length"
            :hide-on-single-page="true"
            background
          />
        </ElConfigProvider>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import zhTW from 'element-plus/es/locale/lang/zh-tw'

const searchBar = ref('')

const tableData = ref([
  {
    publishDate: '2021-01-19',
    title: '確認新增公告功能(測試)',
    path: '/contentadmin/announcement?nid=54',
    pin: true
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
  {
    publishDate: '2021-01-19',
    title: '公告(上架)',
    path: '/contentadmin/announcement?nid=55',
    pin: false
  },
])

const currentPage = ref(1)
const pageSize = ref(15)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return tableData.value.slice(start, end)
})
</script>
