<template>
  <div class="searchbar">
    <div class="searchbar-main">
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
      <div class="searchbar-main__btns">
        <el-button
          id="btn-adv-search"
          type="primary"
          size="large"
          aria-controls="adv-search-content"
          :aria-expanded="advSearchOpen"
          @click="advSearchOpen = !advSearchOpen"
        >
          進階搜尋
        </el-button>
        <el-button type="primary" size="large">重設</el-button>
      </div>
    </div>
    <div v-if="showHotKeywords" class="hot-keywords-set">
      <div class="hot-keywords">
        <div class="hot-keywords-text">熱門關鍵字：</div>
        <ul class="hot-keywords-list">
          <li v-for="(item, idx) in hotKeywordsList" :key="idx" class="hot-keywords-item">
            <nuxt-link :to="`/datasets/search?query=${item.name}`" :title="`簡易搜尋 ${item.name}`">
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      id="adv-search-content"
      :class="['adv-search', advSearchOpen ? 'adv-search--open' : '']"
      role="region"
      :aria-hidden="!advSearchOpen"
      aria-labelledby="btn-adv-search"
    >
      <el-form
        ref="advSearchFormRef"
        :model="advSearchForm"
        :validate-on-rule-change="true"
        label-position="left"
        label-width="140px"
        class="od-form"
      >
        <el-form-item label="資料集提供單位" prop="agencyTid">
          <el-select
            v-model="advSearchForm.agencyTid"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="請選擇資料集提供單位(複選)"
            :remote-method="remoteMethod"
            :loading="agencyLoading"
            class="adv-select"
            loading-text="載入中"
            aria-label="選擇資料集提供單位(複選)"
          >
            <el-option
              v-for="item in agencyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <label for="agency-children" class="visually-hidden">是否須包含底下子機關</label>
          <el-checkbox
            id="agency-children"
            v-model="advSearchForm.inclueSubAgency"
            label="是否須包含底下子機關"
            class="agency-children"
          />
        </el-form-item>
        <el-form-item label="檔案格式" prop="fileFormatTid">
          <el-select
            id="filetype-select"
            v-model="advSearchForm.fileFormatTid"
            filterable
            multiple
            placeholder="請選擇檔案格式(複選)"
            name="請選擇檔案格式"
            class="adv-select"
            aria-label="選擇檔案格式(複選)"
          >
            <el-option
              v-for="item in filetypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="標章類型" prop="qualityBadgeType">
          <el-select
            id="award-select"
            v-model="advSearchForm.qualityBadgeType"
            filterable
            multiple
            placeholder="請選擇標章類型(複選)"
            class="adv-select"
            aria-label="選擇標章類型(複選)"
          >
            <el-option
              v-for="item in awardOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="服務分類" prop="categoryTid">
          <el-select
            id="award-select"
            v-model="advSearchForm.categoryTid"
            filterable
            multiple
            placeholder="請選擇服務分類(複選)"
            class="adv-select"
            aria-label="選擇服務分類(複選)"
          >
            <el-option
              v-for="item in categoryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="資料集 ID" prop="title">
          <el-input id="adv-nid" v-model="advSearchForm.nid" placeholder="請輸入"></el-input>
        </el-form-item>
        <el-form-item label=" ">
          <el-button type="primary" size="large">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
            &nbsp; 搜尋
          </el-button>
          <el-button size="large"> 取消 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'

const props = defineProps({
  showHotKeywords: {
    type: Boolean,
    default: false
  }
})
const input = ref('')
const advSearchOpen = ref(false)
const hotKeywordsList = [
  {
    name: '公告地價'
  },
  {
    name: '疫情'
  },
  {
    name: '營業稅'
  }
]

interface advSearchForm {
  agencyTid: string
  fileFormatTid: string
  qualityBadgeType: string
  categoryTid: string
  nid: string
  inclueSubAgency: any
}

const advSearchFormRef = ref<FormInstance>()
const advSearchForm = reactive<advSearchForm>({
  agencyTid: '',
  fileFormatTid: '',
  qualityBadgeType: '',
  categoryTid: '',
  nid: '',
  inclueSubAgency: false
})

const agencyLoading = ref(false)
const remoteMethod = (query: string) => {
  agencyLoading.value = true
  setTimeout(() => {
    agencyLoading.value = false
  }, 1000)
}

const agencyOptions = ref([
  {
    label: '內政部',
    value: 1
  },
  {
    label: '內政部國土繪測中心',
    value: 2
  }
])

const filetypeOptions = ref([
  {
    label: 'CSV',
    value: 1
  },
  {
    label: 'XML',
    value: 2
  }
])

const awardOptions = ref([
  {
    label: 'CSV',
    value: 1
  },
  {
    label: 'XML',
    value: 2
  }
])

const categoryOptions = ref([
  {
    label: '開創事業',
    value: 1
  },
  {
    label: '服兵役',
    value: 2
  }
])
</script>

<style scoped>
.searchbar {
  padding: 0 1rem;
  width: 80dvh;
  @media screen and (width <= 768px) {
    width: 100%;
  }
  & .el-col {
    text-align: center;
    margin: 0.25rem 0;
  }
}

.searchbar-main {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  @media screen and (width <= 768px) {
    flex-direction: column;
  }
  & .el-row {
    width: 100%;
  }
  & .searchbar-main__btns {
    display: flex;
  }
}

.hot-keywords {
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  flex-wrap: wrap;
}

.hot-keywords-list {
  display: flex;
}

.hot-keywords-text {
  color: var(--el-text-color-regular);
}

.hot-keywords-item {
  &:not(:last-of-type) {
    &:after {
      content: '、';
    }
  }
}

.adv-search {
  display: none;
  margin-top: 0.5rem;
  &.adv-search--open {
    display: block;
  }
}

.adv-select {
  width: 100%;
  & .el-input__inner {
    height: 40px;
  }
}
.agency-children {
  --el-checkbox-font-weight: 400;
}
</style>
