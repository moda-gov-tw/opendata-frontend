<template>
  <main>
    <TheBreadcrumbs
      :previous-page="[
        {
          link: '/dataset',
          title: '資料集'
        },
        {
          link: '/dataset/provider',
          title: '資料提供者功能'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page page--2cols page--2cols-right">
      <div class="page-cols">
        <AsideMenu :data="datasetMenuData"/>
      </div>
      <div class="page-cols">
        <h2>{{ pageTitle }}</h2>
        <el-card shadow="never">
          <el-form
            ref="odbsFormRef"
            :model="odbsForm"
            :rules="odbsRules"
            label-position="left"
            label-width="120px"
            class="od-bs-form"
          >
            <el-form-item label="資料集識別碼" prop="code">
              <el-input v-model="odbsForm.code" placeholder="請輸入"></el-input>
              <div class="text-hint">資料集識別碼為唯一值，若指定本條件，系統會忽略其他欄位條件</div>
            </el-form-item>
            <el-form-item label="資料集名稱" prop="name">
              <el-input v-model="odbsForm.name" placeholder="查詢資料集名稱、描述或關鍵字"></el-input>
            </el-form-item>
            <el-form-item label="資料集屬性">
              <el-select v-model="odbsForm.type" placeholder="請選擇">
                <el-option label="全部" value="" />
                <el-option label="開放資料" value="開放資料" />
                <el-option label="Open API" value="Open API" />
              </el-select>
            </el-form-item>
            <el-form-item label=" ">
              <el-button type="primary" size="large" @click="doSearch">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                  <!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc. -->
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
                查詢
              </el-button>
              <el-button size="large" @click="resetSearch">重設</el-button>
            </el-form-item>
          </el-form>
          <el-table
            v-loading="isLoading"
            element-loading-text="讀取中..."
            :data="paginatedList"
            :default-sort="{
              prop: 'modifyDate',
              order: 'descending'
            }"
            empty-text="暫無資料"
            stripe
            border
            flexible
          >
            <el-table-column prop="modifyDate" label="修改日期" sortable width="150" />
            <el-table-column prop="agency" label="提供機關" sortable width="170" />
            <el-table-column prop="title" label="資料集名稱" sortable>
              <template #default="scope">
                <span v-if="scope.row.pin" class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"/></svg>
                </span>
                <router-link :to="scope.row.path" :title="`前往 ${scope.row.title}`">
                  {{ scope.row.title }}
                </router-link>
              </template>
            </el-table-column>
            <el-table-column prop="type" label="資料集屬性" sortable  />
            <el-table-column prop="supplier" label="資料提供者" sortable  />
            <el-table-column prop="status" label="資料集狀態" sortable  />
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
        </el-card>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import { datasetMenuData } from '@/const/datasetMenuData'
import zhTW from 'element-plus/es/locale/lang/zh-tw'
const pageTitle = ref('資料集（含草稿）')

interface odbsFormType {
  code: string
  name: string
  type: string
}

const odbsFormRef = ref<FormInstance>()
const odbsForm = reactive<odbsFormType>({
  code: '',
  name: '',
  type: ''
})
const odbsRules = reactive<FormRules<odbsFormType>>({
  code: [
    { min: 1, max: 255, message: '本資料集的全名(255 字元內)', trigger: 'blur' },
  ],
  name: [
    { min: 1, max: 255, message: '本資料集的全名(255 字元內)', trigger: 'blur' },
  ]
})
const originTableData = reactive<any>([]);
const tableData = ref([
  {
    modifyDate: '2023-11-21',
    title: 'test 20230829',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '草稿'
  },
  {
    modifyDate: '2023-08-30',
    title: '測試資料集_083001',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '下架（歷史資料專區）'
  },
  {
    modifyDate: '2023-11-21',
    title: 'test 20230829',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '草稿'
  },
  {
    modifyDate: '2023-08-30',
    title: '測試資料集_083001',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '下架（歷史資料專區）'
  },
  {
    modifyDate: '2023-11-21',
    title: 'test 20230829',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '草稿'
  },
  {
    modifyDate: '2023-08-30',
    title: '測試資料集_083001',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '下架（歷史資料專區）'
  },
  {
    modifyDate: '2023-11-21',
    title: 'test 20230829',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '草稿'
  },
  {
    modifyDate: '2023-08-30',
    title: '測試資料集_083001',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '下架（歷史資料專區）'
  },
  {
    modifyDate: '2023-11-21',
    title: 'test 20230829',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '草稿'
  },
  {
    modifyDate: '2023-08-30',
    title: '測試資料集_083001',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '下架（歷史資料專區）'
  },
  {
    modifyDate: '2023-11-21',
    title: 'test 20230829',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '草稿'
  },
  {
    modifyDate: '2023-08-30',
    title: '測試資料集_083001',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '下架（歷史資料專區）'
  },
  {
    modifyDate: '2023-11-21',
    title: 'test 20230829',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '草稿'
  },
  {
    modifyDate: '2023-08-30',
    title: '測試資料集_083001',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '下架（歷史資料專區）'
  },
  {
    modifyDate: '2023-11-21',
    title: 'test 20230829',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '草稿'
  },
  {
    modifyDate: '2023-08-30',
    title: '測試資料集_083001',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '下架（歷史資料專區）'
  },
  {
    modifyDate: '2023-11-21',
    title: 'test 20230829',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '草稿'
  },
  {
    modifyDate: '2023-08-30',
    title: '測試資料集_083001',
    path: '/dataset/detail',
    agency: '國家發展委員會',
    type: '開放資料',
    supplier: '根使用者 (1)',
    status: '下架（歷史資料專區）'
  },
])

const currentPage = ref(1)
const pageSize = ref(15)

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = currentPage.value * pageSize.value
  return tableData.value.slice(start, end)
})

const isLoading = ref(false)
const doSearch = ()=>{
  isLoading.value = true;
  let result_list = [];
  // use odbsForm's name to find match value from tableData
  for(let i=0; i<tableData.value.length; i++){
    if(tableData.value[i].title.includes(odbsForm.name) &&
      tableData.value[i].type.includes(odbsForm.type)){
      result_list.push(tableData.value[i]);
    }
  }
  tableData.value = result_list;
  isLoading.value = false;
}
const resetSearch = ()=>{
  tableData.value = originTableData;
  odbsForm.code = '';
  odbsForm.name = '';
  odbsForm.type = '';
}
onMounted(() => {
  for(let i=0; i<tableData.value.length; i++){
    originTableData.push(tableData.value[i]);
  }
})
</script>
<style scoped>
  /deep/ .el-loading-mask{
    z-index: 3;
  }
</style>