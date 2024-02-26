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
    <div class="page page--2cols page--2cols-left">
      <div class="page-cols">
        <h2>{{ pageTitle }}</h2>
        <el-card shadow="never">
          <p>
            如果有需要，也可以使用主要畫面在左的雙欄版型。
          </p>
        </el-card>
      </div>
      <div class="page-cols">
        <AsideMenu :data="layoutMenuData"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import { layoutMenuData } from '@/const/layoutMenuData'
const pageTitle = ref('主要畫面在左')
</script>