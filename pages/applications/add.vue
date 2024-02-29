<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page page--narrow">
      <h2>{{ pageTitle }}</h2>
      <nuxt-link to="/declaration" title="前往 民間回饋區免責聲明書">
        民間回饋區免責聲明書(中英文版)
      </nuxt-link>
      <el-divider />
      <el-form
        ref="addAppFormRef"
        :model="addAppForm"
        :rules="rules"
        :validate-on-rule-change="true"
        label-position="left"
        label-width="140px"
        class="od-form"
      >
        <el-form-item label="名稱" prop="title">
          <el-input id="title" v-model="addAppForm.title" placeholder="請輸入名稱"></el-input>
        </el-form-item>
        <el-form-item label="推薦人" prop="recommender">
          <el-input
            id="recommender"
            v-model="addAppForm.recommender"
            placeholder="請輸入推薦人"
          ></el-input>
        </el-form-item>
        <el-form-item label="摘要" prop="abstract">
          <el-input
            id="abstract"
            v-model="addAppForm.abstract"
            type="textarea"
            :autosize="{ minRows: 4 }"
            placeholder="請輸入摘要"
          />
        </el-form-item>
        <el-form-item label="描述" prop="content">
          <el-input
            id="content"
            v-model="addAppForm.content"
            type="textarea"
            :autosize="{ minRows: 4 }"
            placeholder="請輸入描述"
          />
        </el-form-item>
        <el-form-item label="創作者" prop="author">
          <el-input id="author" v-model="addAppForm.author" placeholder="請輸入創作者"></el-input>
        </el-form-item>
        <el-form-item label="聯絡方式" prop="contactinfo">
          <el-input
            id="contactinfo"
            v-model="addAppForm.contactinfo"
            placeholder="請輸入聯絡方式"
          ></el-input>
        </el-form-item>
        <el-form-item label="運用資料集">
          <div
            v-for="(item, index) in addAppForm.datasetValues"
            :key="index"
            class="flex-group"
            :prop="'datasetValue_' + index"
          >
            <div class="flex-item item-main">
              <el-select
                v-model="item.datasetValue"
                filterable
                clearable
                remote
                reserve-keyword
                placeholder="搜尋資料集"
                loading-text="讀取中"
                style="width: 100%"
                aria-label="搜尋資料集"
              >
                <el-option
                  v-for="item_opt in datasetOptions"
                  :key="item_opt.value"
                  :label="item_opt.label + '(' + item_opt.value + ')'"
                  :value="item_opt.value"
                  style="max-width: 600px"
                >
                </el-option>
              </el-select>
            </div>
            <div class="flex-item">
              <el-select
                v-model="item.datasetSort"
                placeholder="排序"
                style="width: 80px"
                aria-label="選擇排序"
              >
                <el-option
                  v-for="item_opt in datasetSortOptions"
                  :key="item_opt.value"
                  :label="item_opt.label"
                  :value="item_opt.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="flex-item">
              <el-button type="danger" plain @click="removeDatasetValue(item)">
                <span class="visually-hidden">移除</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                  />
                </svg>
              </el-button>
            </div>
          </div>
          <el-button type="success" @click="addDatasetValue()">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
            新增運用資料集
          </el-button>
        </el-form-item>
        <el-form-item label="類型">
          <el-radio-group v-model="addAppForm.application_type">
            <el-radio label="">無</el-radio>
            <el-radio label="a00">應用</el-radio>
            <el-radio label="b00">資料清理</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="推薦連結">
          <div class="flex-group">
            <div class="flex-item">
              <el-input
                v-model="addAppForm.url_title"
                label="請輸入連結標題"
                placeholder="請輸入連結標題"
              ></el-input>
            </div>
            <div class="flex-item item-main">
              <el-input
                v-model="addAppForm.url"
                label="請輸入連結"
                placeholder="請輸入 URL"
              ></el-input>
            </div>
          </div>
          <div class="color-hint">連結標題只能 128 個字元</div>
        </el-form-item>
        <el-form-item label="圖示">
          <el-upload
            ref="uploadFeatureRef"
            v-model:file-list="featuredImage"
            action="/"
            accept="image/png, image/jpeg, .gif"
            list-type="picture"
            :limit="1"
            :on-change="doFeatureImageUpload"
            :on-exceed="doImageExceed"
            :auto-upload="false"
          >
            <el-button type="success">選擇檔案</el-button>
            <template #tip>
              <div class="el-upload__tip">
                檔案必須小於 20 MB。允許上載的副檔名：png, gif, jpg, jpeg。
              </div>
            </template>
            <template #file="{ file }">
              <div>
                <div class="flex-group file-custom">
                  <div class="flex-item thumbnail">
                    <img :src="file.url" alt="file.name" />
                  </div>
                  <div class="flex-item">
                    <el-button type="danger" plain @click="featuredImage.pop()">
                      <span class="visually-hidden">移除</span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                        />
                      </svg>
                    </el-button>
                  </div>
                </div>
              </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="預覽圖">
          <el-upload
            ref="uploadScreenShotRef"
            multiple
            action="/"
            :file-list="screenShot"
            accept="image/png, image/jpeg, .gif"
            list-type="picture"
            :on-change="doScreenShotUpload"
            :auto-upload="false"
          >
            <el-button type="success">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
              新增檔案
            </el-button>
            <template #tip>
              <div class="el-upload__tip">
                檔案必須小於 20 MB。允許上載的副檔名：png, gif, jpg, jpeg。
              </div>
            </template>
            <template #file="{ file }">
              <div>
                <div class="flex-group file-custom">
                  <div class="flex-item thumbnail">
                    <img :src="file.url" alt="file.name" />
                  </div>
                  <div class="flex-item">
                    <el-select
                      v-model="file.screenshotSort"
                      placeholder="排序"
                      style="width: 80px"
                      aria-label="選擇排序"
                    >
                      <el-option
                        v-for="item in screenOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <div class="flex-item">
                    <el-button type="danger" plain>
                      <span class="visually-hidden">移除</span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                        <path
                          d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                        />
                      </svg>
                    </el-button>
                  </div>
                </div>
              </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="收費方式">
          <el-radio-group v-model="addAppForm.charge">
            <el-radio label="">無</el-radio>
            <el-radio label="免費"></el-radio>
            <el-radio label="收費"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="關鍵字">
          <div
            v-for="(item, index) in addAppForm.datasetTags"
            :key="index"
            class="flex-group"
            :prop="'datasetValue_' + index"
          >
            <div class="flex-item item-main">
              <el-input
                v-model="item.tags"
                placeholder="請輸入關鍵字"
                label="請輸入關鍵字"
              ></el-input>
            </div>
            <div class="flex-item">
              <el-select
                v-model="item.datasetTagSort"
                placeholder="排序"
                style="width: 80px"
                aria-label="選擇排序"
              >
                <el-option
                  v-for="item_tag in tagOptions"
                  :key="item_tag.value"
                  :label="item_tag.label"
                  :value="item_tag.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="flex-item">
              <el-button type="danger" plain @click="removeDatasetTag(item)">
                <span class="visually-hidden">移除</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                  />
                </svg>
              </el-button>
            </div>
          </div>
          <el-button type="success" @click="addDatasetTag()">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
            新增關鍵字
          </el-button>
        </el-form-item>
        <el-form-item label="note_admin" prop="note_admin">
          <el-input
            id="note_admin"
            v-model="addAppForm.note_admin"
            type="textarea"
            :autosize="{ minRows: 4 }"
            placeholder="請輸入 note_admin"
          />
        </el-form-item>
        <el-form-item label="服務條款">
          <el-radio-group v-model="addAppForm.license_tid">
            <el-radio v-for="(item, index) in licenseOptions" :key="index" :label="item.value">
              {{ item.label }} <br />
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="服務條款網址" prop="license_url">
          <el-input
            id="license_url"
            v-model="addAppForm.license_url"
            placeholder="請輸入服務條款網址"
          ></el-input>
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
import { genFileId } from 'element-plus'
import type {
  FormInstance,
  FormRules,
  UploadProps,
  UploadUserFile,
  UploadInstance,
  UploadRawFile
} from 'element-plus'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('建立 活化應用')
const pageDescription = ref('建立 活化應用')
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

interface DatasetItem {
  datasetTitle: string
  datasetValue: string
  datasetSort: any
}

interface DatasetTagItem {
  tags: string
  datasetTagSort: any
}
interface AddAppForm {
  title: string
  recommender: string
  abstract: string
  content: string
  author: string
  contactinfo: string
  application_type: string
  charge: string
  license_tid: string
  license_url: string
  datasetValues: Array<DatasetItem>
  url_title: string
  url: string
  datasetTags: Array<DatasetTagItem>
  note_admin: string
}
const addAppFormRef = ref<FormInstance>()
const addAppForm = reactive<AddAppForm>({
  title: '',
  recommender: '小明 王',
  abstract: '',
  content: '',
  author: '',
  contactinfo: '',
  application_type: '',
  charge: '',
  license_tid: '',
  license_url: '',
  datasetValues: [
    {
      datasetTitle: '',
      datasetValue: '',
      datasetSort: null
    }
  ],
  url_title: '',
  url: '',
  datasetTags: [
    {
      tags: '',
      datasetTagSort: null
    }
  ],
  note_admin: ''
})
const rules = reactive<FormRules<AddAppForm>>({
  title: [
    { required: true, message: '請輸入', trigger: 'blur' },
    { max: 255, message: '超過 255 字元，請刪減名稱', trigger: 'blur' }
  ],
  recommender: [
    { required: true, message: '請輸入', trigger: 'blur' },
    { max: 255, message: '超過 255 字元，請刪減名稱', trigger: 'blur' }
  ],
  abstract: [{ required: true, message: '請輸入摘要', trigger: 'blur' }],
  content: [{ required: true, message: '請輸入摘要', trigger: 'blur' }],
  author: [
    { required: true, message: '請輸入', trigger: 'blur' },
    { max: 255, message: '超過 255 字元，請刪減名稱', trigger: 'blur' }
  ],
  contactinfo: [{ max: 255, message: '超過 255 字元，請刪減名稱', trigger: 'blur' }]
})
const datasetOptions = ref([
  {
    label: '資料集',
    value: 1
  }
])
interface SortOption {
  label: string
  value: number
}
const datasetSortOptions = ref<SortOption[]>([
  {
    label: '1',
    value: 1
  }
])
const tagOptions = ref<SortOption[]>([
  {
    label: '1',
    value: 1
  }
])
const addDatasetValue = () => {
  addAppForm.datasetValues.push({
    datasetTitle: '',
    datasetValue: '',
    datasetSort: addAppForm.datasetValues.length + 1
  })
  datasetSortOptions.value.push({
    value: addAppForm.datasetValues.length,
    label: addAppForm.datasetValues.length.toString()
  })
}
const removeDatasetValue = (item: DatasetItem) => {
  const index = addAppForm.datasetValues.indexOf(item)
  if (index !== -1) {
    // minus sort value when item got deleted
    addAppForm.datasetValues.forEach((item) => {
      if (item.datasetSort > addAppForm.datasetValues[index].datasetSort) item.datasetSort--
    })
    addAppForm.datasetValues.splice(index, 1)
    datasetSortOptions.value.pop()
  }
}
const addDatasetTag = () => {
  addAppForm.datasetTags.push({
    tags: '',
    datasetTagSort: addAppForm.datasetTags.length + 1
  })
  tagOptions.value.push({
    value: addAppForm.datasetTags.length,
    label: addAppForm.datasetTags.length.toString()
  })
}
const removeDatasetTag = (item: DatasetTagItem) => {
  const index = addAppForm.datasetTags.indexOf(item)
  if (index !== -1) {
    // minus sort value when item got deleted
    addAppForm.datasetTags.forEach((item) => {
      if (item.datasetTagSort > addAppForm.datasetTags[index].datasetTagSort) item.datasetTagSort--
    })
    addAppForm.datasetTags.splice(index, 1)
    tagOptions.value.pop()
  }
}
const featuredImage = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: '/images/logo-icon.png'
  }
])
const uploadFeatureRef = ref<UploadInstance>()
const doFeatureImageUpload: UploadProps['onChange'] = () => {
  console.log('upload image')
}
const doImageExceed: UploadProps['onExceed'] = (files) => {
  uploadFeatureRef.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  uploadFeatureRef.value!.handleStart(file)
}
const uploadScreenShotRef = ref<UploadInstance>()
const doScreenShotUpload: UploadProps['onChange'] = () => {
  console.log('upload image')
}
const screenShot = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: '/images/logo-icon.png'
  },
  {
    name: 'food.jpeg',
    url: '/images/logo-icon.png'
  }
])
const screenOptions = ref([
  {
    label: '1',
    value: 1
  }
])

const licenseOptions = ref([
  {
    label: '無',
    value: '1'
  },
  {
    label: '政府資料開放授權條款-第1版',
    value: '2'
  },
  {
    label: '其他',
    value: '3'
  },
  {
    label: '創作共用 姓名標示(CC BY 4.0)',
    value: '4'
  },
  {
    label: '創作共用 姓名標示-相同方式分享(CC BY-SA 4.0)',
    value: '5'
  },
  {
    label: '開放字型授權條款 OFL-1.1',
    value: '6'
  },
  {
    label: '公眾領域貢獻宣告(CC0)',
    value: '7'
  }
])
const { isRadio, isImgInput } = useJSAccessibility()
onMounted(() => {
  isRadio()
  isImgInput()
})
</script>
