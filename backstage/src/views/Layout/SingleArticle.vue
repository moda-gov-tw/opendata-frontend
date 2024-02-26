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
      <el-card shadow="never">
        <p>
          主要使用於文章、填寫表單類型的內容。
        </p>
      </el-card>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
const pageTitle = ref('文章頁面')
</script>