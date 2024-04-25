<template>
  <div class="col-right col-main">
    <h2>{{ pageTitle }}</h2>
    <el-form
      ref="editProfileFormRef"
      :model="editProfileForm"
      :rules="rules"
      :validate-on-rule-change="true"
      label-position="left"
      label-width="140px"
      class="od-form"
    >
      <el-form-item label="姓名" prop="name">
        <el-input id="name" v-model="editProfileForm.name" placeholder="請輸入" />
      </el-form-item>
      <el-form-item label="顯示名" prop="nickname">
        <el-input id="nickname" v-model="editProfileForm.nickname" placeholder="請輸入" />
      </el-form-item>
      <el-form-item label="電話" prop="phoneNumber">
        <el-input
          id="phone-number"
          v-model="editProfileForm.phoneNumber"
          placeholder="請輸入"
          type="tel"
        />
      </el-form-item>
    </el-form>
    <el-divider />
    <el-alert
      title="提醒您請盡量避免使用身分證字號等個資相關資訊為帳號名稱，謝謝！"
      type="error"
      effect="dark"
      :closable="false"
    />
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('編輯帳號')
const pageDescription = ref('編輯帳號')
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

interface EditProfileForm {
  name: string
  nickname: string
  phoneNumber: number | null
}

const editProfileFormRef = ref<FormInstance>()
const editProfileForm = reactive<EditProfileForm>({
  name: '',
  nickname: '',
  phoneNumber: null
})

const rules = reactive<FormRules<EditProfileForm>>({
  name: [
    { required: true, message: '請輸入', trigger: 'blur' },
    { max: 255, message: '超過 255 字元，請刪減名稱', trigger: 'blur' }
  ],
  nickname: [{ max: 255, message: '超過 255 字元，請刪減', trigger: 'blur' }],
  phoneNumber: [
    { type: 'number', message: '請輸入數字' },
    { max: 255, message: '超過 255 字元，請刪減', trigger: 'blur' }
  ]
})
</script>
