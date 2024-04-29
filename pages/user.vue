<template>
  <main>
    <theBreadcrumbs :current-page="currentPageTitle" />
    <div class="page">
      <div class="two-cols">
        <div class="col-left col-small">
          <ul class="aside-menu">
            <li>
              <nuxt-link to="/user" title="前往 我的帳號">我的帳號</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/user/edit" title="前往 編輯帳號">編輯帳號</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/user/subscriptions" title="前往 訂閱資料集清單">
                訂閱資料集清單
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/user/suggests" title="前往 我想要更多">我想要更多</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/user/comments" title="前往 我有話要說">我有話要說</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/user/applications" title="前往 活化應用推薦">活化應用推薦</nuxt-link>
            </li>
          </ul>
        </div>
        <NuxtPage @updateTitle="updateTitle" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const currentPageTitle = ref('')

const updateTitle = (newTitle: string) => {
  currentPageTitle.value = newTitle
}
</script>

<style scoped>
.aside-menu {
  & li {
    & a {
      display: block;
      padding: 0.8725rem;
      border-radius: 0.25rem;
      color: var(--el-color-primary);
      &[aria-current='page'] {
        padding: 0.8725rem;
        border-radius: 0.25rem;
        display: block;
        background-color: var(--el-color-primary);
        color: var(--el-color-white);
      }
    }
  }
}
</style>
