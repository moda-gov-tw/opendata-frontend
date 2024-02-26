<template>
  <main>
    <TheBreadcrumbs
      :previous-page="[
        {
          link: '/dataset',
          title: '資料集'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-card class="page-card" shadow="never">
        <el-form
          ref="odbsFormRef"
          :model="odbsForm"
          :rules="odbsRules"
          label-position="left"
          label-width="180px"
          class="od-bs-form"
        >
          <p>
            請各機關擬公開政府資料時，請依據「<a href="https://file.data.gov.tw/content/about/%E6%94%BF%E5%BA%9C%E8%B3%87%E6%96%99%E9%96%8B%E6%94%BE%E4%BD%9C%E6%A5%AD%E5%8E%9F%E5%89%87%E4%BF%AE%E6%AD%A3%E8%A6%8F%E5%AE%9A_%E5%90%AB%E4%BF%AE%E8%A8%82%E6%AD%B7%E7%A8%8B_.pdf" target="_blank" rel="noreferrer noopener">行政院及所屬各級機關政府資料開放作業原則</a>」，確認預計開放之資料，為各機關於職權範圍內取得或作成，且依法得公開之各類電子資料。
          </p>
          <span style="float: right">
            <el-switch
              v-model="ifAutoTranslate"
              active-text="資料提供者自行管理"
              inactive-text="平臺自動翻譯"
            />
          </span>
          <br /><br />
          <el-form-item label="資料集名稱" prop="name">
            <el-input v-model="odbsForm.name" placeholder="請輸入"></el-input>
            <div class="text-hint">本資料集的全名(255 字元內)</div>
          </el-form-item>
          <el-form-item label="提供機關" prop="agency_tid">
            <el-radio-group v-model="odbsForm.agency_tid">
              <el-radio label="國家發展委員會" />
              <el-radio label="數位發展部" />
            </el-radio-group>
            <div class="text-hint">「提供機關」選定後即不可更改</div>
          </el-form-item>
          <div class="align-center">
            <el-button type="primary" size="large">儲存並至下一步</el-button>
          </div>
        </el-form>
      </el-card>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
const pageTitle = ref('建立 資料集')

interface odbsFormType {
  name: string
  agency_tid: string
}

const odbsFormRef = ref<FormInstance>()
const odbsForm = reactive<odbsFormType>({
  name: '',
  agency_tid: ''
})
const odbsRules = reactive<FormRules<odbsFormType>>({
  name: [
    { required: true, message: '此欄位為必填', trigger: 'blur' },
    { min: 1, max: 255, message: '本資料集的全名(255 字元內)', trigger: 'blur' },
  ],
  agency_tid: [
    { required: true, message: '請選擇提供機關', trigger: 'change' },
  ],
})
const ifAutoTranslate = ref(false)
</script>