<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page page--narrow">
      <h2>{{ pageTitle }}</h2>
      <el-card class="login-card">
        <el-row :gutter="16">
          <el-col :span="12" :xs="24">
            <el-button class="btn-login">
              <img src="@/assets/images/egov-logo.svg" alt="Egov Logo" />
              <div>Egov 登入</div>
            </el-button>
          </el-col>
          <el-col :span="12" :xs="24">
            <el-button class="btn-login btn-login--google google-bg">
              <img src="@/assets/images/google-logo.svg" alt="Google Logo" />
              <div>Google 登入</div>
            </el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('會員登入')
const pageDescription = ref('會員登入')
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
</script>

<style scoped>
.btn-login {
  width: 100%;
  display: block;
  height: auto;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0.5rem 0;
  & :deep(span) {
    display: block;
  }
  & img {
    display: inline-block;
    height: 2rem;
    width: auto;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }
  &.btn-login--google {
    color: var(--el-color-white);
  }
}
</style>
