<template>
  <main>
    <TheBreadcrumbs :current-page="pageTitle" />
    <div class="page page--2cols page--2cols-right">
      <div class="page-cols">
        <AsideMenu :data="datasetMenuData"/>
      </div>
      <div class="page-cols">
        <h2>{{ pageTitle }}</h2>
        <el-row :gutter="16">
          <el-col :xs="24" :md="12">
            <el-card shadow="never">
              <template #header>
                <div class="flex flex-between flex-align-center">
                  <div>資料提供者</div>
                  <el-button type="primary" @click="$router.push('/dataset/provider/dataset-add')">新增資料集</el-button>
                </div>
              </template>
              <ul class="normal-list">
                <li class="normal-item">
                  <router-link to="/dataset/provider/publish-draft" title="前往 資料集 草稿">草稿</router-link>：5
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/provider/published" title="前往 資料集 上架">上架</router-link>：0
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/provider/publish-moderate" title="前往 資料集 上架審查中">上架審查中</router-link>：0
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/provider/publish-moderate-reject" title="前往 資料集 上架審查退回">上架審查退回</router-link>：0
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/provider/editing" title="前往 資料集 修改中-未送審">修改中-未送審</router-link>：0
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/provider/edit-moderate" title="前往 資料集 修改審查中">修改審查中</router-link>：0
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/provider/edit-moderate-reject" title="前往 資料集 修改審查退回">修改審查退回</router-link>：0
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/provider/unpublished" title="前往 資料集 下架">下架</router-link>：14
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/provider/unpublish-moderate" title="前往 資料集 下架審查中">下架審查中</router-link>：0
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/provider/unpublish-moderate-reject" title="前往 資料集 下架審查退回">下架審查退回</router-link>：0
                </li>
              </ul>
            </el-card>
            <br />
          </el-col>
          <el-col :xs="24" :md="12">
            <el-card header="資料審查者" shadow="never">
              <ul class="normal-list">
                <li class="normal-item">
                  <router-link to="/dataset/moderator/publish-moderate" title="前往 資料集 待審查--上架">待審查--上架</router-link>：5
                </li>
                <li class="normal-item">
                  <router-link to="/dataset/moderator/edit-moderate" title="前往 資料集 待審查--修改">待審查--修改</router-link>：0
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
import { datasetMenuData } from '@/const/datasetMenuData'
const pageTitle = ref('資料集')

</script>