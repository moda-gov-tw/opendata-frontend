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
      <el-card shadow="never" class="unpublish">
          <table>
            <tr>
              <th scope="row">操作：</th>
              <td>
                目前狀態為：<el-text size="large" type="danger">草稿</el-text>
                <br /><br />
                <div>
                  <el-button type="success">申請上架審查</el-button>
                  <el-button type="primary">看品質檢測結果</el-button>
                  <el-button type="warning">編輯資料資源</el-button>
                  <el-button type="primary">列於預計上架清單</el-button>
                  <el-button>編輯</el-button>
                  <el-button>刪除</el-button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">主要欄位說明：</th>
              <td>ObjectID、Name、Town_N、X、Y、SW_WTH、Slope</td>
            </tr>
            <tr>
              <th scope="row">資料集評分：</th>
              <td>0/5</td>
            </tr>
            <tr>
              <th scope="row">資料集描述：</th>
              <td>https://tpnco.blob.core.windows.net/blobfs/Data/TP_Ramp.json</td>
            </tr>
            <tr>
              <th scope="row">提供機關：</th>
              <td>數位發展部</td>
            </tr>
            <tr>
              <th scope="row">資料下載網址：</th>
              <td>
                <table>
                  <tr>
                    <th scope="row">資料資源欄位：</th>
                    <td>ObjectID、Name、Town_N、X、Y、SW_WTH、Slope</td>
                  </tr>
                  <tr>
                    <th scope="row">檔案格式：
                    </th>
                    <td>JSON</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </el-card>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheBreadcrumbs from '@/components/TheBreadcrumbs.vue'
const pageTitle = ref('134909新工處')
</script>