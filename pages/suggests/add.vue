<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/suggests',
          title: '互動專區'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page page--narrow">
      <h2>{{ pageTitle }}</h2>
      <el-form
        ref="responseFormRef"
        :model="responseForm"
        :rules="rules"
        :validate-on-rule-change="true"
        label-position="left"
        label-width="140px"
        class="od-form"
      >
        <el-form-item label="標題" prop="title">
          <el-input
            id="title"
            v-model="responseForm.title"
            placeholder="填寫建議資料集開放之標題，例如:中文標準交換碼開放建議。"
          ></el-input>
        </el-form-item>
        <el-form-item label="建議資料集名稱" prop="suggestName">
          <el-input
            id="suggest-name"
            v-model="responseForm.suggestName"
            placeholder="填寫建議之資料集名稱，例如:CNS11643中文標準交換碼全字庫。"
          ></el-input>
        </el-form-item>
        <el-form-item label="建議開放的欄位" prop="suggestCols">
          <el-input
            id="body"
            v-model="responseForm.suggestCols"
            type="textarea"
            :autosize="{ minRows: 4 }"
            placeholder="填寫建議之開放欄位，例如:名稱、所屬、類別、說明。"
          />
        </el-form-item>
        <el-form-item label="指定Email回復電子信箱" prop="mail">
          <el-input id="mail" v-model="responseForm.mail" type="email" />
          <div class="color-info">請以 ; 做區隔</div>
        </el-form-item>
        <el-form-item label="建議原因" prop="body">
          <el-input
            id="body"
            v-model="responseForm.body"
            type="textarea"
            :autosize="{ minRows: 4 }"
            placeholder="請輸入"
          />
        </el-form-item>
        <el-form-item label="建議派發機關" prop="comment_unit">
          <el-select
            id="comment_unit"
            v-model="responseForm.comment_unit"
            filterable
            placeholder="請選擇"
            style="width: 100%"
            aria-label="選擇建議派發機關"
          >
            <el-option
              v-for="item in unitOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :aria-label="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="身份別" prop="comment_identity">
          <el-select
            id="comment_identity"
            v-model="responseForm.comment_identity"
            placeholder="請選擇"
            style="width: 100%"
            aria-label="選擇身份別"
          >
            <el-option
              v-for="item in identityOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="產業領域" prop="comment_industry">
          <el-select
            id="comment_industry"
            v-model="responseForm.comment_industry"
            filterable
            placeholder="請選擇"
            style="width: 100%"
            aria-label="選擇產業領域"
          >
            <el-option
              v-for="item in industryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label=" ">
          <el-button type="primary" size="large"> 儲存 </el-button>
          <el-button size="large"> 取消 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('新增資料集開放建議')
const pageDescription = ref('新增資料集開放建議')
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

interface ResponseForm {
  mail: string
  comment_industry: string
  comment_unit: string
  comment_identity: string
  title: string
  body: string
  suggestName: string
  suggestCols: string
}

const responseFormRef = ref<FormInstance>()
const responseForm = reactive<ResponseForm>({
  title: '',
  suggestName: '',
  suggestCols: '',
  mail: '',
  body: '',
  comment_unit: '',
  comment_identity: '',
  comment_industry: ''
})

const rules = reactive<FormRules<ResponseForm>>({
  title: [
    { required: true, message: '請輸入', trigger: 'blur' },
    { max: 255, message: '超過 255 字元，請刪減名稱', trigger: 'blur' }
  ],
  suggestName: [
    { required: true, message: '請輸入', trigger: 'blur' },
    { max: 255, message: '超過 255 字元，請刪減名稱', trigger: 'blur' }
  ],
  suggestCols: [
    {
      required: true,
      message: '填寫建議之開放欄位，例如:名稱、所屬、類別、說明。',
      trigger: 'blur'
    }
  ],
  mail: [
    { required: true, message: '請輸入電子信箱', trigger: 'blur' },
    { type: 'email', message: '請輸入正確電子信箱格式', trigger: ['blur', 'change'] }
  ],
  body: [{ required: true, message: '填寫建議開放之原因', trigger: 'blur' }],
  comment_identity: [{ required: true, message: '請選擇', trigger: 'change' }],
  comment_industry: [{ required: true, message: '請選擇', trigger: 'change' }]
})

const unitOptions = ref([
  {
    label: '內政部',
    value: '1'
  },
  {
    label: '行政部',
    value: '2'
  }
])
const identityOptions = ref([
  {
    label: '公司',
    value: '1'
  },
  {
    label: '協會',
    value: '2'
  },
  {
    label: '社群',
    value: '3'
  }
])
const industryOptions = ref([
  {
    label: '農、牧業',
    value: '1'
  },
  {
    label: '林業',
    value: '2'
  }
])
</script>
