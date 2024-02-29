<template>
  <header>
    <a id="ak-jump" href="#ak-container" title="跳至主要內容">跳至主要內容</a>
    <h1 class="visually-hidden">網站名稱</h1>
    <div class="header-first">
      <div class="logo">
        <nuxt-link to="/" title="前往首頁">這裡可放logo</nuxt-link>
      </div>
      <div :class="['submenu-box', mobileSubMenuOpen ? 'submenu-box--open' : '']">
        <el-button class="mobile-submenu-btn" size="large" text @click="handleMobileSubMenuOpen">
          <div v-if="mobileSubMenuOpen === false">
            <span class="visually-hidden">子選單已開啟</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
          <div v-else>
            <span class="visually-hidden">子選單已關閉</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </div>
        </el-button>
        <nav class="submenu" aria-label="次要選單">
          <ul class="submenu-list">
            <li class="submenu-item">
              <nuxt-link to="/sitemap" title="前往 網站導覽" @click="mobileSubMenuOpen = false">
                網站導覽
              </nuxt-link>
            </li>
            <li class="submenu-item">
              <nuxt-link
                to="https://twitter.com/intent/tweet?text="
                title="另開視窗 分享到 X (前 Twitter)"
                class="twitter"
                @click="mobileSubMenuOpen = false"
              >
                <span class="visually-hidden">分享到 X (前 Twitter)</span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
                  />
                </svg>
              </nuxt-link>
              <nuxt-link
                to="https://www.facebook.com/share.php?u="
                title="另開視窗 分享到 Facebook"
                class="facebook"
                @click="mobileSubMenuOpen = false"
              >
                <span class="visually-hidden">分享到 Facebook</span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                  />
                </svg>
              </nuxt-link>
            </li>
            <li class="submenu-item">
              <nuxt-link to="/" title="前往英文版網頁" @click="mobileSubMenuOpen = false">
                EN
              </nuxt-link>
            </li>
            <li class="submenu-item">
              <el-button
                type="primary"
                size="large"
                @click="(mobileSubMenuOpen = false), (showChatbotDrawer = true)"
              >
                客服小幫手
              </el-button>
              <odChatbot v-model:drawer="showChatbotDrawer" />
              <nuxt-link
                class="el-button el-button--primary el-button--large"
                to="/user"
                title="前往 會員專區"
                @click="mobileSubMenuOpen = false"
              >
                會員專區
              </nuxt-link>
              <el-button
                type="primary"
                size="large"
                @click="(mobileSubMenuOpen = false), navigateTo('/login')"
              >
                登出
              </el-button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="header-second">
      <div :class="['menu-box', mobileMenuOpen ? 'menu-box--open' : '']">
        <el-button
          class="mobile-menu-btn"
          type="primary"
          size="large"
          text
          @click="handleMobileMenuOpen"
        >
          <span v-if="mobileMenuOpen === false">展開主選單</span>
          <span v-else>收合主選單</span>
        </el-button>
        <nav class="menu" aria-label="主要選單">
          <ul class="menu-list">
            <li><a id="ak-header" href="#ak-header" title="主選單區塊" accesskey="U">:::</a></li>
            <li
              v-for="(menuItem, menuIndex) in menuList"
              :key="`menu-${menuIndex}`"
              class="menu-item"
            >
              <template v-if="menuItem.children">
                <el-dropdown trigger="click" @command="handleMenuCommand">
                  <el-button link>
                    {{ menuItem.label }}
                    <el-icon class="el-icon--right">
                      <arrow-down />
                    </el-icon>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item
                        v-for="(menuChildren, menuChildrenIndex) in menuItem.children"
                        :key="`menu-${menuChildrenIndex}`"
                        :command="menuChildren.value"
                      >
                        <span>{{ menuChildren.label }}</span>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </template>
              <template v-else>
                <nuxt-link
                  :to="menuItem.value"
                  :title="`前往 ${menuItem.label}`"
                  @click="mobileMenuOpen = false"
                >
                  {{ menuItem.label }}
                </nuxt-link>
              </template>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

const menuList = [
  {
    label: '資料集',
    value: '',
    children: [
      {
        label: '全部資料集瀏覽',
        value: '/datasets/search'
      },
      {
        label: '預計下架資料集',
        value: '/datasets/unpublished'
      },
      {
        label: '歷史資料專區',
        value: '/datasets/history'
      },
      {
        label: '資料集清單下載區',
        value: '/datasets/datasets_download'
      }
    ]
  },
  {
    label: '高應用價值主題專區',
    value: '/high_value_datasets'
  },
  {
    label: '資料故事館',
    value: '',
    children: [
      {
        label: '應用展示專區',
        value: '/expos'
      },
      {
        label: '教育資源專區',
        value: '/courses'
      },
      {
        label: '活化應用專區',
        value: '/applications'
      },
      {
        label: '獎勵活動專區',
        value: '/rewards'
      }
    ]
  },
  {
    label: '互動專區',
    value: '',
    children: [
      {
        label: '我想要更多',
        value: '/suggests'
      },
      {
        label: '我有話要說',
        value: '/comments'
      }
    ]
  },
  {
    label: '消息專區',
    value: '',
    children: [
      {
        label: '最新消息',
        value: '/news'
      },
      {
        label: '專欄文章',
        value: '/columns'
      }
    ]
  },
  {
    label: '諮詢小組',
    value: '/consult_team'
  },
  {
    label: '授權條款',
    value: '/licenses'
  },
  {
    label: '關於平臺',
    value: '',
    children: [
      {
        label: '關於平臺',
        value: '/about'
      },
      {
        label: '網站導覽',
        value: '/sitemap'
      },
      {
        label: '常見問答',
        value: '/faqs'
      }
    ]
  }
]

const mobileSubMenuOpen = ref(false)
const handleMobileSubMenuOpen = () => {
  mobileSubMenuOpen.value = !mobileSubMenuOpen.value
}

const mobileMenuOpen = ref(false)
const handleMobileMenuOpen = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleMenuCommand = async (command: string) => {
  await navigateTo(command)
  mobileMenuOpen.value = false
}

const showChatbotDrawer = ref(false)
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 4;
  background-color: var(--header-bg);
  border-bottom: 1px solid var(--el-border-color);
  @media screen and (width <= 992px) {
    box-shadow: var(--el-box-shadow);
  }
}

#ak-jump {
  position: absolute;
  top: -1px;
  left: 0;
  font-size: 0.875rem;
  color: transparent;
  z-index: -1;
  &:focus-within {
    color: var(--el-color-primary);
    background-color: var(--el-color-white);
    z-index: inherit;
  }
}

.header-first {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--el-border-color);
}

.submenu-box {
  position: relative;
  &.submenu-box--open {
    & .submenu {
      @media screen and (width <= 992px) {
        display: block;
      }
    }
  }
}

.submenu {
  display: block;
  @media screen and (width <= 992px) {
    display: none;
    position: absolute;
    top: 2.5rem;
    right: 0;
    box-shadow: var(--el-box-shadow-dark);
    z-index: 1;
    background-color: var(--el-color-white);
  }
}

.submenu-list {
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
  @media screen and (width <= 992px) {
    display: block;
    padding: 0 0.25rem;
  }
}

.submenu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  @media screen and (width <= 992px) {
    justify-content: center;
    padding: 0.5rem;
    flex-wrap: wrap;
  }
  &:not(:last-of-type) {
    border-right: 1px solid var(--el-border-color);
    padding-right: 0.75rem;
    @media screen and (width <= 992px) {
      border-right: 0;
      border-bottom: 1px solid var(--el-border-color);
    }
  }
  & svg {
    height: 36px;
    width: auto;
  }
  .el-button {
    margin: 0;
    @media screen and (width <= 992px) {
      width: 100%;
    }
  }
}

.mobile-submenu-btn {
  display: none;
  @media screen and (width <= 992px) {
    display: block;
  }
  & svg {
    & path {
      fill: var(--el-color-primary);
    }
  }
}

.menu-box {
  &.menu-box--open {
    & .menu-list {
      @media screen and (width <= 992px) {
        display: block;
      }
    }
  }
}

.menu-list {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  @media screen and (width <= 992px) {
    display: none;
  }
  & .el-button {
    &.is-link {
      font-size: 1rem;
      &:focus {
        color: var(--el-text-color-regular);
        border-radius: 0;
      }
    }
  }
  & a {
    color: var(--el-text-color-regular);
    font-weight: 500;
    &:hover {
      color: var(--el-color-info);
    }
    &:focus-visible {
      color: var(--el-text-color-regular);
      opacity: 1;
    }
  }
  #ak-header {
    @media screen and (width <= 992px) {
      position: absolute;
    }
  }
}

.menu-item {
  @media screen and (width <= 992px) {
    & .el-dropdown {
      display: block;
      & .el-button {
        width: 100%;
        display: block;
        padding: 0.5rem 0;
      }
    }
    & a {
      display: block;
      text-align: center;
      padding: 0.5rem 0;
    }
  }
}

.mobile-menu-btn {
  display: none;
  width: 100%;
  @media screen and (width <= 992px) {
    display: block;
  }
}
</style>
