<template>
  <main>
    <TheBreadcrumbs :current-page="pageTitle" />
    <div class="page page--2cols page--2cols-right">
      <div class="page-cols">
        <AsideMenu :data="layoutMenuData"/>
      </div>
      <div class="page-cols">
        <h2>{{ pageTitle }}</h2>
        <el-row :gutter="16">
          <el-col :xs="24" :md="12">
            <el-card header="單欄頁面" shadow="never">
              <ul class="normal-list">
                <li class="normal-item">
                  <router-link to="/layout/single-article" title="前往 文章頁面">文章頁面</router-link>
                </li>
                <li class="normal-item">
                  <router-link to="/layout/single-form" title="前往 表單頁面">表單頁面</router-link>
                </li>
              </ul>
            </el-card>
            <br />
          </el-col>
          <el-col :xs="24" :md="12">
            <el-card header="雙欄頁面" shadow="never">
              <ul class="normal-list">
                <li class="normal-item">
                  <router-link to="/layout/two-cols-right-main" title="前往 主要畫面在右">主要畫面在右</router-link>
                </li>
                <li class="normal-item">
                  <router-link to="/layout/two-cols-left-main" title="前往 主要畫面在左">主要畫面在左</router-link>
                </li>
              </ul>
            </el-card>
            <br />
          </el-col>
        </el-row>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import { layoutMenuData } from '@/const/layoutMenuData'
const pageTitle = ref('版型介紹')
</script>