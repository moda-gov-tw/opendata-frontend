<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/expos',
          title: '應用展示專區'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page page--narrow">
      <h2>{{ pageTitle }}</h2>
      <section data-v-7dbab29e="">
        <p>
          文化部為我國掌管文化事務的最高主管機關，負責國家各項文化振興、藝術發展、出版、廣播影視等相關產業推廣輔導工作。自101年升格以來，文化部致力於「厚植文化力，帶動文化參與」的使命，目標再造文化治理、建構藝術自由支持體系；連結與再現土地與人民的歷史記憶；深化社區營造，發揚生活「所在」的在地文化；提升文化內涵以提振文化經濟；重視青年創意、強化數位革新，創造國際連結等施政方向。
        </p>
        <p>&nbsp;</p>
        <p>
          作為我國文化事務的主責單位，文化部擁有豐富文化資料，如何應用這些資料，利用創意活化，汲取這些文化資料的價值，一直是文化部對準施政目標所希望達成的嘗試。恰逢本年度資料應用工作坊的啟動，文化部文化資源司透過一開始的說明會，與國家發展委員會和資料應用工作坊執行團隊進行溝通，希望透過資料應用工作坊的跨域合作，探索文化資料應用的可行性。
        </p>
        <p>&nbsp;</p>
        <p>
          文化部與國發會執行團隊自本(107)年度3月28日開始合作意向討論，經歷5次會議，包含合作意向、實作目標規劃、專案啟動會議、實作情形討論研商等。最終，以「臺灣故事島」網站(https://storytaiwan.tw/)的故事資料為標的，共同實作產出可供未來文化部應用資料參考的可能範例。實作過程以臺灣故事島故事摘要與文字稿，進行文字探勘，做斷詞分析，根據摘要和逐字稿出現的地名，產出故事地圖概念性驗證。最終成果包含內部使用的斷詞詞庫建立與故事地圖概念性驗證，做為後續文化部未來進行相關資料庫建置之方向依據。
        </p>
        <p>&nbsp;</p>
        <p>
          總體而言，本次合作成果，有下列幾項經驗與未來建議。首先，文字探勘有助於其他文化相關的文字資料分析，利用斷詞分析，結合專業領域知識，有助於建立文化知識庫與關鍵字資料庫。其次，文字探勘於文化資料上的應用，能夠有效找出文化脈絡，建立更有意義的文化連結。最後，本次實作所面臨的挑戰，最主要的是地點連結，例如原住民相關的精確地點，需要額外實體與文獻研究，才能做更精準呈現。這些寶貴收穫，對於文化部未來掌握自有文化資料內涵價值，以及推動文化資料的多元應用，深具標幟性意義。
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('【應用工作坊】文化部應用成果說明')
const pageDescription = ref('【應用工作坊】文化部應用成果說明')
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
