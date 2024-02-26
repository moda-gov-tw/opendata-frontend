<template>
  <div>
    <div class="el-breadcrumb-box">
      <el-breadcrumb v-if="mode == true" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <span>首頁</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="(item, index) in previousPage"
          :key="index"
          :to="{ path: (item as any).link }"
        >
          {{ (item as any).title }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span>{{ currentPage }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-breadcrumb v-else separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <span>後臺首頁</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in previousPage" :key="index">
          {{ (item as any).title }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <span>{{ currentPage }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <akContainer :class="akContainerBg ? 'ak-container-box-bg' : ''" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  currentPage: String,
  previousPage: Array,
  mode: {
    type: Boolean,
    default: true
  },
  akContainerBg: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.el-breadcrumb {
  max-width: 1280px;
  margin: 0 auto 1.5rem;
}
</style>
