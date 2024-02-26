<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <el-divider />
      <div class="page-tool-bar">
        <div>下載：</div>
        <el-button type="primary" plain>訪客數統計</el-button>
        <el-button type="primary" plain>訪客類型統計</el-button>
        <el-button type="primary" plain>瀏覽器類型統計</el-button>
        <el-button type="primary" plain>作業系統類型統計</el-button>
      </div>
      <section>
        <h3>訪客數</h3>
        <canvas
          ref="visitorCountBar"
          aria-label="訪客數"
          role="img"
          style="width: 100%; height: 300px"
        ></canvas>
      </section>
      <section>
        <h3>訪客類型</h3>
        <div style="width: 100%; height: 300px">
          <canvas
            ref="visitorTypePi"
            aria-label="訪客類型"
            role="img"
            style="margin: 0 auto"
          ></canvas>
        </div>
      </section>
      <section>
        <h3>最近一個月前十大瀏覽器</h3>
        <canvas
          ref="visitorBrowserHorizontalBar"
          aria-label="最近一個月前十大瀏覽器"
          role="img"
          style="width: 100%; height: 300px"
        ></canvas>
      </section>
      <section>
        <h3>最近一個月前十大作業系統</h3>
        <canvas
          ref="visitorOSHorizontalBar"
          aria-label="最近一個月前十大作業系統"
          role="img"
          style="width: 100%; height: 300px"
        ></canvas>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('網站使用統計')
const pageDescription = ref('網站使用統計')
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

const visitorCountBar = ref<HTMLCanvasElement | null>(null)
const visitorTypePi = ref<HTMLCanvasElement | null>(null)
const visitorBrowserHorizontalBar = ref<HTMLCanvasElement | null>(null)
const visitorOSHorizontalBar = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (visitorCountBar.value) {
    const ctx = visitorCountBar.value.getContext('2d') as CanvasRenderingContext2D
    const visitorCountBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['11-08', '11-09', '11-10', '11-11', '11-12'],
        datasets: [
          {
            label: '訪客數',
            data: [3000, 1500, 1600, 3500, 3800],
            backgroundColor: ['rgba(0, 116, 173, 0.5)'],
            borderColor: ['rgba(0, 116, 173, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
  if (visitorTypePi.value) {
    const ctx = visitorTypePi.value.getContext('2d') as CanvasRenderingContext2D
    const visitorTypePiChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Returning Visitor', 'New Visitor'],
        datasets: [
          {
            label: '訪客類型',
            data: [42, 158],
            backgroundColor: ['#0079B7', '#303133']
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }
  if (visitorBrowserHorizontalBar.value) {
    const ctx = visitorBrowserHorizontalBar.value.getContext('2d') as CanvasRenderingContext2D
    const visitorBrowserHorizontalBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Chrome',
          'Safari',
          'Edge',
          'Safari (in-app)',
          'Firefox',
          'Android Webview',
          'Samsung Internet',
          'Internet Explore',
          'Opera',
          'Mozilla compatible Agent'
        ],
        datasets: [
          {
            label: '最近一個月前十大瀏覽器',
            data: [103368, 15315, 14867, 1998, 1618, 1025, 779, 629, 301, 0],
            backgroundColor: ['rgba(0, 116, 173, 0.5)'],
            borderColor: ['rgba(0, 116, 173, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y'
        // cutoutPercentage: 0,
        // maintainAspectRatio: false
      }
    })
  }
  if (visitorOSHorizontalBar.value) {
    const ctx = visitorOSHorizontalBar.value.getContext('2d') as CanvasRenderingContext2D
    const visitorOSHorizontalBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Windows',
          'iOS',
          'Macintosh',
          'Andriod',
          'Linux',
          'Chrome OS',
          '(not set)',
          'Open BSD',
          'UNIX',
          'Windows Phone'
        ],
        datasets: [
          {
            label: '最近一個月前十大瀏覽器',
            data: [102332, 15547, 11045, 10671, 658, 135, 0, 0, 0, 0],
            backgroundColor: ['rgba(0, 116, 173, 0.5)'],
            borderColor: ['rgba(0, 116, 173, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        indexAxis: 'y'
        // cutoutPercentage: 0,
        // maintainAspectRatio: false
      }
    })
  }
})
</script>
