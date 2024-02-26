<template>
  <main>
    <TheBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-card class="page-card" shadow="never">
        <article>
          <p><i>2021-01-18</i></p>
          <p>為提升平臺使用效能及服務優化，「政府資料開放平臺」於109年1月18日改版上線，除進行功能優化外亦保留原有網站之重要功能，歡迎民眾多加使用。</p>
          <img src="@/assets/images/logo-along.png" alt="logo" />
        </article>
      </el-card>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
const pageTitle = ref('政府資料開放平臺改版上線')
</script>
