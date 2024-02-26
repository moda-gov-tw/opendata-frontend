<template>
  <main>
    <TheBreadcrumbs
      :previous-page="[
        {
          link: '/dataset/dashboard',
          title: '資料集'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-card shadow="never">
        123
      </el-card>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
const pageTitle = ref('建立 資料集')
</script>