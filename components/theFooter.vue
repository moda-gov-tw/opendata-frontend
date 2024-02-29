<template>
  <footer>
    <a id="ak-footer" href="#ak-footer" title="底部區塊" accesskey="Z">:::</a>
    <el-collapse v-model="sitemapToggle">
      <el-collapse-item name="1">
        <template #title>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
            <path
              d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"
            />
          </svg>
          <span class="visually-hidden">網站目錄</span>
        </template>
        <div class="sitemap-box">
          <ul v-if="sitemapList" class="sitemap">
            <li v-for="(item, idx) in sitemapList" :key="idx" class="sitemap-group">
              <span class="sitemap-group-title">{{ item.title }}</span>
              <ul v-if="item.children" class="sitemap-list">
                <li
                  v-for="(itemChild, idxChild) in item.children"
                  :key="idxChild"
                  class="sitemap-item"
                >
                  <nuxt-link :to="itemChild.path" :title="`前往 ${itemChild.name}`">
                    {{ itemChild.name }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="footer-info">
      <ul>
        <li></li>
      </ul>
      <ul>
        <li>
          <nuxt-link :title="`前往 隱私權保護、使用與資安政策`" to="/privacy"
            >隱私權保護、使用與資安政策</nuxt-link
          >
        </li>
      </ul>
      <ul>
        <li></li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const sitemapToggle = ref([''])
const sitemapList = [
  {
    title: '資料集',
    children: [
      {
        path: '/datasets/search',
        name: '全部資料集瀏覽'
      },
      {
        path: '/datasets/unpublished',
        name: '預計下架資料集'
      },
      {
        path: '/datasets/history',
        name: '歷史資料專區'
      },
      {
        path: '/datasets/datasets_download',
        name: '資料集清單下載區'
      },
      {
        path: '/datasets/search?dt=openapi',
        name: 'Open API資料集'
      }
    ]
  },
  {
    title: '高應用價值主題專區',
    children: [
      {
        path: '/high_value_datasets',
        name: '高應用價值主題專區'
      }
    ]
  },
  {
    title: '資料故事館',
    children: [
      {
        path: '/expos',
        name: '應用展示專區'
      },
      {
        path: '/courses',
        name: '教育資源專區'
      },
      {
        path: '/applications',
        name: '活化應用專區'
      },
      {
        path: '/rewards',
        name: '獎勵活動專區'
      }
    ]
  },
  {
    title: '互動專區',
    children: [
      {
        path: '/suggests',
        name: '我想要更多'
      },
      {
        path: '/comments',
        name: '我有話要說'
      }
    ]
  },
  {
    title: '消息專區',
    children: [
      {
        path: '/news',
        name: '最新消息'
      },
      {
        path: '/columns',
        name: '專欄文章'
      }
    ]
  },
  {
    title: '諮詢小組',
    children: [
      {
        path: '/consult_team',
        name: '諮詢小組'
      }
    ]
  },
  {
    title: '關於平臺',
    children: [
      {
        path: '/about',
        name: '關於平臺'
      },
      {
        path: '/sitemap',
        name: '網站導覽'
      },
      {
        path: '/faqs',
        name: '常見問答'
      }
    ]
  },
  {
    title: '統計資料',
    children: [
      {
        path: '/statistics/site',
        name: '網站使用統計'
      },
      {
        path: '/statistics/datasets',
        name: '資料分類統計'
      },
      {
        path: '/statistics/agency',
        name: '各部會資料開放情形'
      },
      {
        path: '/statistics/quality',
        name: '機關資料品質情形'
      },
      {
        path: '/statistics/wordcloud',
        name: '標籤雲'
      },
      {
        path: '/statistics/dashboard',
        name: '各部會及地方政府統計'
      }
    ]
  },
  {
    title: '規範及授權',
    children: [
      {
        path: '/licenses',
        name: '授權條款'
      },
      {
        path: '/m2m',
        name: 'M2M專區'
      },
      {
        path: '/about#about_document',
        name: '相關指導文件'
      }
    ]
  },
  {
    title: '相關連結',
    children: [
      {
        path: '/datasets_links2',
        name: '跨平臺介接即時狀態表'
      },
      {
        path: '/civil_dataset_center',
        name: '相關資料中心'
      }
    ]
  },
  {
    title: '英文版',
    children: [
      {
        path: '/',
        name: '英文版'
      }
    ]
  }
]
</script>

<style scoped>
footer {
  padding: 1rem;
  background-color: var(--footer-bg);
  & a {
    color: var(--el-color-white);
    &:focus-within {
      outline: 2px dashed var(--el-color-warning);
    }
  }
}

.el-collapse {
  --el-border-color: 255, 255, 255;
  --el-collapse-header-height: auto;
  border: 0;
  border-bottom: 1px solid rgba(var(--el-border-color), 0.3);
}

:deep(.el-collapse-item__wrap) {
  border: 0;
  background: transparent;
}

:deep(.el-collapse-item__header) {
  background: transparent;
  color: var(--el-color-white);
  width: auto;
  margin: 0 auto 1rem;
  border: 0;
  & svg {
    width: 1rem;
    height: auto;
    & path {
      fill: var(--el-color-white);
    }
  }
}

:deep(.el-collapse-item__header .el-collapse-item__arrow) {
  margin-right: 0;
}

:deep(.el-collapse-item__header.focusing) {
  outline: 2px dashed var(--el-color-warning);
}

:deep(.el-collapse-item__content) {
  padding: 0;
}

.sitemap {
  font-size: 0.875rem;
}

.sitemap-group-title {
  color: var(--el-color-white);
  opacity: 0.8;
}
.footer-info {
  --el-border-color: 255, 255, 255;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem auto 0;
  max-width: 1280px;
  font-size: 0.875rem;
  line-height: 1rem;
  gap: 1rem;
  color: var(--el-color-white);
  padding-bottom: 2rem;
  @media screen and (width <= 768px) {
    flex-direction: column;
  }
  & ul {
    border-right: 1px solid rgba(var(--el-border-color), 0.3);
    box-sizing: border-box;
    flex: 1;
    @media screen and (width <= 768px) {
      border-right: 0;
      margin-bottom: 1rem;
    }
    &:last-child {
      border-right: 0;
    }
    & li {
      margin-bottom: 8px;
      @media screen and (width <= 768px) {
        text-align: center;
      }
      & a {
        color: var(--el-color-white);
      }
    }
  }
}
</style>
