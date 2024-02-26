<template>
  <header>
    <div class="logo">
      <router-link to="/" title="前往首頁">
        <img class="logo-desktop" src="@/assets/images/logo.png" alt="政府資料開放平臺 Logo" />
        <img class="logo-mobile" src="@/assets/images/logo-mobile.png" alt="政府資料開放平臺 Logo" />
      </router-link>
    </div>
    <div class="menu">
      <el-button class="btn-mobile-menu" @click="handleMobileMenu()">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        &nbsp;選單
      </el-button>
      <nav :class="mobileMenuState ? 'is-open' : ''">
        <ul class="menu-list">
          <li class="menu-item">
            <router-link class="menu-link" to="/layout" title="前往 版型介紹" @click="closeMobileMenu()">版型介紹</router-link>
          </li>
          <li class="menu-item">
            <router-link class="menu-link" to="/home" title="前往 版型介紹" @click="closeMobileMenu()">首頁範例</router-link>
          </li>
          <li class="menu-item">
            <router-link class="menu-link" to="/dataset" title="前往 範例：資料集" @click="closeMobileMenu()">範例：資料集</router-link>
          </li>
          <li class="menu-item">
            <el-button size="small">登出</el-button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const mobileMenuState = ref(false)
const handleMobileMenu = () => {
  mobileMenuState.value = !mobileMenuState.value
}
const closeMobileMenu = () => {
  mobileMenuState.value = false
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: var(--el-color-primary);
  padding: 0 2rem;
  z-index: 4;
  @media screen and (width <= 1024px) {
    padding: 0 1rem;
  }
}

.logo {
  padding: 1rem 0;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  @media screen and (width <= 960px) {
    padding: 0.5rem 0;
  }
  & img {
    vertical-align: middle;
    height: auto;
    object-fit: contain;
    height: 3rem;
    @media screen and (width <= 960px) {
      height: 2.5rem;
    }
    &.logo-desktop {
      display: inline-block;
      @media screen and (width <= 640px) {
        display: none;
      }
    }
    &.logo-mobile {
      display: none;
      @media screen and (width <= 640px) {
        display: inline-block;
      }
    }
  }
}

.btn-mobile-menu {
  display: none;
  @media screen and (width <= 960px) {
    display: block;
    margin: auto 0;
  }
}

.menu {
  display: flex;
  align-items: stretch;
}

nav {
  @media screen and (width <= 960px) {
    display: none;
  }
  &.is-open {
    @media screen and (width <= 960px) {
      display: block;
      position: absolute;
      top: 3.5rem;
      right: 0;
      height: calc(100dvh - 3.5rem);
      width: 10rem;
      background-color: var(--el-color-primary-dark-2);
      padding: 1rem;
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none; 
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

.menu-list {
  display: flex;
  gap: 0.5rem;
  height: 100%;
  align-items: center;
  color: var(--el-color-white);
  @media screen and (width <= 960px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding-bottom: 1rem;
  }
}

.menu-item {
  display: flex;
  height: 100%;
  align-items: center;
  @media screen and (width <= 960px) {
    width: 100%;
  }
}

.menu-link {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  color: var(--el-color-white);
  &:after {
    content: '';
    position: absolute;
    bottom: 0.625rem;
    left: 0;
    width: 0;
    height: 3px;
    background-color: var(--color-secondary);
    transition: width 160ms ease-in,  background-color 160ms ease-in;
  }
  &[aria-current="page"] {
    &:after {
      width: 100%;
    }
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
  &:active {
    &:after {
      background-color: var(--el-color-primary-dark-2);
    }
  }
  @media screen and (width <= 960px) {
    padding: 0.625rem 0 0.625rem  0.625rem;
    &:after {
      transition: height 160ms ease-in,  background-color 160ms ease-in;
      bottom: 0;
      top: 0;
      height: 0;
      width: 3px;
    }
    &[aria-current="page"] {
      &:after {
        width: 3px;
        height: 100%;
      }
    }
    &:hover {
      &:after {
        width: 3px;
        height: 100%;
      }
    }
  }
}
</style>