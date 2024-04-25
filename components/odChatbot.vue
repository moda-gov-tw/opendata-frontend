<template>
  <el-drawer
    v-model="showCurrentDrawer"
    title="哈囉!我是客服小幫手，請問你今天想詢問哪一方面的問題呢?"
    direction="ltr"
    append-to-body
    size="40%"
    :before-close="handleCloseChatbotDrawer"
    class="od-drawer"
  >
    <div class="drawer-container">
      <div class="drawer-content">
        <div class="fast-btn-group">
          <el-button v-for="(item, index) in questionTypes" :key="index">
            {{ item.label }}
          </el-button>
        </div>
        <div class="msgs">
          <div class="msg msg--user">
            <div class="msg-content">資料品質提升機制</div>
          </div>
          <div class="msg msg--bot">
            <div class="msg-content">
              關於資料品質提升機制，請選擇您想要了解的問題：<br />
              <el-button>資料品質提升介紹</el-button><br />
              <el-button>資料品質檢測介紹</el-button><br />
              <el-button>檢測檔案格式說明</el-button><br />
            </div>
          </div>
          <div class="msg msg--user">
            <div class="msg-content">資料品質提升介紹</div>
          </div>
          <div class="msg msg--bot">
            <div class="msg-content">
              關於資料品質提升介紹，您可以參考：<br />
              <nuxt-link to="/faqs/1" title="前往 政府資料品質提升機制簡介 常見問答">
                政府資料品質提升機制簡介
              </nuxt-link>
              <nuxt-link to="/faqs/1" title="前往 資料品質檢測系統基本方針 常見問答">
                資料品質檢測系統基本方針
              </nuxt-link>
            </div>
          </div>
          <div class="msg msg--user">
            <div class="msg-content">資料品質提升機制</div>
          </div>
          <div class="msg msg--bot">
            <div class="msg-content">
              關於資料品質提升機制，請選擇您想要了解的問題：<br />
              <el-button>資料品質提升介紹</el-button><br />
              <el-button>資料品質檢測介紹</el-button><br />
              <el-button>檢測檔案格式說明</el-button><br />
            </div>
          </div>
          <div class="msg msg--user">
            <div class="msg-content">資料品質提升介紹</div>
          </div>
          <div class="msg msg--bot">
            <div class="msg-content">
              關於資料品質提升介紹，您可以參考：<br />
              <nuxt-link to="/faqs/1" title="前往 政府資料品質提升機制簡介 常見問答">
                政府資料品質提升機制簡介
              </nuxt-link>
              <nuxt-link to="/faqs/1" title="前往 資料品質檢測系統基本方針 常見問答">
                資料品質檢測系統基本方針
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="drawer-footer">
        <label for="drawer-footer-input" class="visually-hidden">想說點什麼嗎？</label>
        <el-input
          id="drawer-footer-input"
          v-model="drawerFooterInputValue"
          type="text"
          autosize
          placeholder="想說點什麼嗎？"
        >
        </el-input>
        <el-button type="primary">送出</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
const props = defineProps({
  drawer: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:drawer'])

const showCurrentDrawer = ref(props.drawer)

watchEffect(() => {
  showCurrentDrawer.value = props.drawer
})

watch(showCurrentDrawer, (newValue) => {
  emit('update:drawer', newValue)
})

const handleCloseChatbotDrawer = () => {
  showCurrentDrawer.value = false
}
const drawerFooterInputValue = ref('')

const questionTypes = ref([
  {
    label: '資料品質提升機制',
    value: '資料品質提升機制'
  },
  {
    label: '資料品質檢測常見問題',
    value: '資料品質檢測常見問題'
  },
  {
    label: '平臺功能',
    value: '平臺功能'
  },
  {
    label: '資料集使用常見問題',
    value: '資料集使用常見問題'
  },
  {
    label: '其他',
    value: '其他'
  },
  {
    label: '熱門資料集',
    value: '熱門資料集'
  },
  {
    label: '最新消息',
    value: 'news_header'
  }
])
</script>

<style scoped>
.drawer-container {
  --el-drawer-padding-primary: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100% + 2 * var(--el-drawer-padding-primary));
  margin: calc(0px - (var(--el-drawer-padding-primary)));
}
.drawer-content {
  flex: 1 0 auto;
  padding: var(--el-drawer-padding-primary);
}
.fast-btn-group {
  & .el-button {
    margin: 5px;
  }
}
.drawer-footer {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 10px;
  position: sticky;
  bottom: calc(0px - (var(--el-drawer-padding-primary)));
  background-color: var(--el-color-white);
  box-shadow: 0 -0.5rem 0.5rem rgba(0, 0, 0, 0.1);
}

.msgs {
  margin: 16px 5px;
  & .msg {
    & a {
      display: block;
    }
    & .msg-content {
      display: inline-block;
      vertical-align: middle;
      text-align: left;
      padding: 10px;
      border-radius: 10px;
      line-height: 1.5;
      color: var(--el-text-color-primary);
      margin-bottom: 16px;
      word-break: break-word;
    }
    &.msg--bot {
      padding-right: 20%;
      & .msg-content {
        background-color: var(--el-color-primary-light-9);
        border-bottom-left-radius: 0;
      }
    }
    &.msg--user {
      padding-left: 20%;
      text-align: right;
      .msg-content {
        border: 1px solid var(--el-border-color);
        border-bottom-right-radius: 0;
      }
    }
  }
}
</style>
