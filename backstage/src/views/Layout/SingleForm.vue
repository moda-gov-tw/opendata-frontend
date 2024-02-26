<template>
  <main>
    <TheBreadcrumbs
      :previous-page="[
        {
          link: '/layout',
          title: '版型介紹'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-card class="page-card" shadow="never">
        <el-form
          ref="demoFormRef"
          :model="demoForm"
          :rules="demoRules"
          label-position="left"
          label-width="180px"
          class="od-bs-form"
        >
          <p>
            這裡是單欄頁面，內容為表單範例。
          </p>
          <el-form-item label="名稱" prop="name">
            <el-input v-model="demoForm.name" placeholder="請輸入"></el-input>
            <div class="text-hint">請輸入 255 字元內</div>
          </el-form-item>
          <el-form-item label="性別" prop="gender">
            <el-radio-group v-model="demoForm.gender">
              <el-radio label="不公開" />
              <el-radio label="男" />
              <el-radio label="女" />
            </el-radio-group>
          </el-form-item>
          <div class="align-center">
            <el-button type="primary" size="large">儲存</el-button>
            <el-button type="success" size="large">新增</el-button>
            <el-button size="large">預覽</el-button>
            <el-button size="large">取消</el-button>
            <el-button type="danger" size="large">刪除</el-button>
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
const pageTitle = ref('表單頁面')

interface demoFormType {
  name: string
  gender: string
}

const demoFormRef = ref<FormInstance>()
const demoForm = reactive<demoFormType>({
  name: '',
  gender: ''
})
const demoRules = reactive<FormRules<demoFormType>>({
  name: [
    { required: true, message: '此欄位為必填', trigger: 'blur' },
    { min: 1, max: 255, message: '請輸入 255 字元內', trigger: 'blur' },
  ],
  gender: [
    { required: true, message: '請選擇提供機關', trigger: 'change' },
  ],
})
</script>