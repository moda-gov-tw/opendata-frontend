<template>
  <div class="col-right col-main">
    <h2>{{ pageTitle }}</h2>
    <div class="table table--fixed od-table od-table--bordered">
      <div class="table-row">
        <div class="table-cell th">
          <strong>帳號</strong>
        </div>
        <div class="table-cell">小明 王</div>
      </div>
      <div class="table-row">
        <div class="table-cell th">
          <strong>姓名</strong>
        </div>
        <div class="table-cell"></div>
      </div>
      <div class="table-row">
        <div class="table-cell th">
          <strong>部會管理回應機關</strong>
        </div>
        <div class="table-cell"></div>
      </div>
    </div>
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
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('我的帳號')
const pageDescription = ref('我的帳號')
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
</script>
