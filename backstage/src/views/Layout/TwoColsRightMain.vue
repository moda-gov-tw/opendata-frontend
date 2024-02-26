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
    <div class="page page--2cols page--2cols-right">
      <div class="page-cols">
        <AsideMenu :data="layoutMenuData"/>
      </div>
      <div class="page-cols">
        <h2>{{ pageTitle }}</h2>
        <el-card shadow="never">
        <p>
          全站主要使用此版面，適用於列表、儀表板頁面。
        </p>
      </el-card>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import { layoutMenuData } from '@/const/layoutMenuData'
const pageTitle = ref('主要畫面在右')
</script>