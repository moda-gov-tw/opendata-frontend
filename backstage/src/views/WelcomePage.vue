<template>
  <main>
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-card shadow="never">
        <section>
          <p>
            歡迎使用 政府資料開放平臺 後臺管理系統 版型開源專案！
          </p>
        </section>
        <section>
          <h3>使用框架</h3>
          <p>
            本專案使用 Vue3 前端框架並使用 ElementPlus 前端 UI 框架。<br />
            使用時請以 ElementPlus 為主，<br />
            若不敷使用再自行客製化或尋求第三方。<br />
          </p>
        </section>
        <section>
          <h3>CSS 技術</h3>
          <p>
            目前各大主流瀏覽器支援最新 CSS 技術度已經蠻完整的，<br />
            例如：CSS Variables、CSS Cascade layers 以及 CSS Nesting。<br />
            所以為了減少依賴，使用原生 CSS 撰寫，<br />
            減少在開發階段因 CSS Preprocessor 造成的問題。<br />
            例如版本衝突、SASS/SCSS/LESS 寫法<br />
          </p>
        </section>
      </el-card>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const pageTitle = ref('歡迎！')
</script>