<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/datasets/search',
          title: '資料集'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <section>
        <h3>全部資料集清單下載</h3>
        <p>
          <el-button type="primary" plain title="下載全部資料集清單CSV"> 下載 CSV </el-button>
          <el-button type="primary" plain title="下載全部資料集清單XML"> 下載 XML </el-button>
          <el-button type="primary" plain title="下載全部資料集清單JSON"> 下載 JSON </el-button>
        </p>
      </section>
      <section>
        <h3>異動資料集清單下載專區</h3>
        <ul class="datasets-download-list">
          <li>
            <div>異動清單-2024-11-05</div>
            <div>
              <el-button type="primary" plain title="下載 2024-11-05 異動資料集清單CSV">
                下載 CSV
              </el-button>
              <el-button type="primary" plain title="下載 2024-11-05 異動資料集清單XML">
                下載 XML
              </el-button>
              <el-button type="primary" plain title="下載 2024-11-05 異動資料集清單JSON">
                下載 JSON
              </el-button>
            </div>
          </li>
          <li>
            <div>異動清單-2024-11-04</div>
            <div>
              <el-button type="primary" plain title="下載 2024-11-04 異動資料集清單CSV">
                下載 CSV
              </el-button>
              <el-button type="primary" plain title="下載 2024-11-04 異動資料集清單XML">
                下載 XML
              </el-button>
              <el-button type="primary" plain title="下載 2024-11-04 異動資料集清單JSON">
                下載 JSON
              </el-button>
            </div>
          </li>
          <li>
            <div>異動清單-2024-11-03</div>
            <div>
              <el-button type="primary" plain title="下載 2024-11-03 異動資料集清單CSV">
                下載 CSV
              </el-button>
              <el-button type="primary" plain title="下載 2024-11-03 異動資料集清單XML">
                下載 XML
              </el-button>
              <el-button type="primary" plain title="下載 2024-11-03 異動資料集清單JSON">
                下載 JSON
              </el-button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('資料集清單下載專區')
const pageDescription = ref('資料集清單下載專區')
const route = useRoute()

useHead({
  title: pageTitle,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: pageDescription.value
    },
    { hid: 'og:url', property: 'og:url', content: runtimeConfig.public.baseUrl + route.path },
    {
      hid: 'og:title',
      property: 'og:title',
      content: pageTitle.value + ' ｜ ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: pageDescription.value
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: runtimeConfig.public.baseUrl + route.path
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: pageTitle.value + ' ｜ ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: pageDescription.value
    }
  ]
})
</script>

<style scoped>
.datasets-download-list {
  & li {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    &:before {
      content: '•';
    }
    & div {
      margin-right: 1rem;
    }
  }
}

.el-button {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
