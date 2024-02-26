<template>
  <el-menu
    router
    :default-active="currentPath"
    :unique-opened="true"
    class="aside-menu"
  >
    <el-sub-menu
      v-for="(item,index) in props.data"
      :key="index"
      :index="item.title"
    >
      <template #title>
        <router-link v-if="item.path" :to="item.path" :title="`前往 ${item.title}`">{{ item.title }}</router-link>
        <span v-else>{{ item.title }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item 
          v-for="(child, index) in item.children" 
          :key="index" 
          :index="child.path"
        >
          {{ child.title }}
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import{ useRoute } from 'vue-router'
import { type menuDataType } from '@/const/layoutMenuData'

const props = defineProps({
  data: {
    type: Array as PropType<menuDataType[]>,
    required: true,
  }
});

const route = useRoute()

const currentPath = computed(() => {
  let alias = route.meta.alias;
  if(typeof alias !== 'undefined')
    return alias;
  else
    return route.path;
})
</script>