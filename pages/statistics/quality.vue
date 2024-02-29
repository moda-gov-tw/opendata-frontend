<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-divider />
      <p>資料更新時間: 2024-11-12 05:01:56</p>
      <section>
        <h3>中央部會</h3>
        <div style="width: 100%; height: 300px">
          <canvas
            ref="qualityCentralPie"
            aria-label="訪客類型"
            role="img"
            style="margin: 0 auto"
          ></canvas>
        </div>
      </section>
      <section>
        <h3>地方機關</h3>
        <canvas
          ref="qualityLocalPie"
          aria-label="訪客類型"
          role="img"
          style="margin: 0 auto"
        ></canvas>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('機關資料品質情形')
const pageDescription = ref('機關資料品質情形')
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

Chart.register(...registerables)
const qualityCentralPie = ref<HTMLCanvasElement | null>(null)
const qualityLocalPie = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (qualityCentralPie.value) {
    const ctx = qualityCentralPie.value.getContext('2d') as CanvasRenderingContext2D
    const qualityCentralPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['金標章', '銀標章', '銅標章', '無標章'],
        datasets: [
          {
            label: '中央機關',
            data: [23577, 505, 1135, 311],
            backgroundColor: ['#E6A23C', '#C0C4CC', '#B9561A', '#303133']
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }
  if (qualityLocalPie.value) {
    const ctx = qualityLocalPie.value.getContext('2d') as CanvasRenderingContext2D
    const qualityLocalPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['金標章', '銀標章', '銅標章', '無標章'],
        datasets: [
          {
            label: '地方機關',
            data: [24651, 1453, 699, 987],
            backgroundColor: ['#E6A23C', '#C0C4CC', '#B9561A', '#303133']
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }
})
</script>
