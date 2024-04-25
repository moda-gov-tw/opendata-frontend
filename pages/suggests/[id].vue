<template>
  <main>
    <theBreadcrumbs
      :previous-page="[
        {
          link: '/suggests',
          title: '我想要更多'
        }
      ]"
      :current-page="pageTitle"
    />
    <div class="page page--narrow">
      <h2>{{ pageTitle }}</h2>
      <article>
        <section>
          <div class="table table--fixed od-table od-table--bordered">
            <div class="table-row">
              <div class="table-cell th">
                <strong>建議資料集名稱</strong>
              </div>
              <div class="table-cell">台灣電力公司_開放台電_open_taipower_資料</div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>建議開放的欄位</strong>
              </div>
              <div class="table-cell">資料及名稱、永久網址、備註</div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>建議原因</strong>
              </div>
              <div class="table-cell">
                台灣電力股份有限公司曾於105年8月起在其網站公布「台電與『開放台電資料研究小組』會議資料」，然而根據網際網路數據檔案館〈Wayback
                Machine〉查詢顯示，相關公告（
                http://www.taipower.com.tw:80/content/announcement/ann01-8.aspx ）與文件（
                http://data.taipower.com.tw/opendata02
                ）最遲於107年5月19日已全數消失，又其半數資料經比對並未納入現行（112年10月）開放資料專區清單中（
                https://www.taipower.com.tw/tc/page.aspx?mid=96
                ），包括但不限於：每次停電造成的損失、配電系統圖、配電系統線損紀錄及原因、配電失效分析、輸電系統圖、輸電系統線損紀錄及原因、輸電系統失效分析、六、七輸計畫效益分析、各電力機組停機損失、電力系統緊急調度原則等（詳細列表請見「開放台電資料研究小組」所列之資料清單：
                https://docs.google.com/spreadsheets/d/1bfvLw3GMm7si43Az_pOqEycZCyPM233zFZ8NdBoAE1E/edit?usp=sharing），因此建請台灣電力股份有限公司重新於政府資料開放平臺上架這些資料，以避免開放資料因網站變動、人為疏失等緣故散佚；亦請經濟部持續協助監督下轄公營事業開放資料進度，杜絕資料開放進度倒車、做表面工夫。
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>建議派發機關</strong>
              </div>
              <div class="table-cell">經濟部、台灣電力股份有限公司</div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>實際派發機關</strong>
              </div>
              <div class="table-cell">
                <nuxt-link to="/suggests/1" title="前往搜尋有關 經濟部 的我想要更多"
                  >經濟部</nuxt-link
                >
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>回復狀態</strong>
              </div>
              <div class="table-cell">再回復</div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>分派狀態</strong>
              </div>
              <div class="table-cell">已分派</div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>身份別</strong>
              </div>
              <div class="table-cell">公司</div>
            </div>
            <div class="table-row">
              <div class="table-cell th">
                <strong>產業領域</strong>
              </div>
              <div class="table-cell">其他專業、科學及技術服務業</div>
            </div>
          </div>
        </section>
        <section>
          <div class="response">
            <h3>回應</h3>
            <el-button type="success" @click="dialogAddResponse = true">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
              發表新回應
            </el-button>
            <el-dialog v-model="dialogAddResponse" title="發表新回應" :append-to-body="true">
              <el-form
                ref="responseFormRef"
                :model="responseForm"
                :rules="rules"
                :validate-on-rule-change="true"
                label-position="left"
                label-width="140px"
                class="od-form"
              >
                <el-form-item label="您的名字"> 王小明 </el-form-item>
                <el-form-item label="聯絡電子郵件信箱" prop="mail">
                  <el-input id="mail" v-model="responseForm.mail" type="email" />
                </el-form-item>
                <el-form-item>
                  <el-button type="success">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      />
                    </svg>
                    新增另一個項目
                  </el-button>
                </el-form-item>
                <el-form-item label="意見類型" prop="comment_type">
                  <el-select
                    id="comment_type"
                    v-model="responseForm.comment_type"
                    filterable
                    placeholder="請選擇"
                    style="width: 100%"
                    aria-label="選擇意見類型"
                  >
                    <el-option
                      v-for="item in opinionOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :aria-label="item.label"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="身份別" prop="comment_identity">
                  <el-select
                    id="comment_identity"
                    v-model="responseForm.comment_identity"
                    placeholder="請選擇"
                    style="width: 100%"
                    aria-label="選擇身份別"
                  >
                    <el-option
                      v-for="item in identityOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="產業領域" prop="comment_industry">
                  <el-select
                    id="comment_industry"
                    v-model="responseForm.comment_industry"
                    filterable
                    placeholder="請選擇"
                    style="width: 100%"
                    aria-label="選擇產業領域"
                  >
                    <el-option
                      v-for="item in industryOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="標題" prop="title">
                  <el-input id="title" v-model="responseForm.title" placeholder="請輸入"></el-input>
                </el-form-item>
                <el-form-item label="建議原因" prop="body">
                  <el-input
                    id="body"
                    v-model="responseForm.body"
                    type="textarea"
                    :autosize="{ minRows: 4 }"
                    placeholder="請輸入"
                  />
                </el-form-item>
                <el-form-item label=" ">
                  <el-button type="primary" size="large"> 儲存 </el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
            <ul class="response-list">
              <li class="response-item od">
                <div class="avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                    />
                  </svg>
                </div>
                <div class="response-item-main">
                  <div class="response-item-main-header">
                    <span>y****8</span>於<span>2024-10-16 10:05</span>回應
                    <div class="floor">1 樓</div>
                  </div>
                  <div class="response-item-main-container">
                    <div class="title">
                      經濟部:建請台灣電力股份有限公司公開原「開放台電 open taipower」公開資料
                    </div>
                    <div class="content">
                      回復類型: 已開放或依申請提供<br />
                      聯絡人: 詹先生<br />
                      聯絡人電話: 02-23667025<br />
                      聯絡人信箱: u479093@taipower.com.tw<br />
                      回復: 謝謝您的寶貴意見。<br />
                      一.原「開放台電open
                      taipower」公開資料依內容可分區為「資訊揭露」及「開放資料」兩大類，本公司因官網改版並請各單位評估後，將原內容屬於「資訊揭露」者依內容分類置於本公司網站「資訊揭露」頁面，並設有「詳細目錄」供其快速查詢，內容涵蓋「資訊圖表」、「電力供需資訊」、「經營資訊」、「發電資訊」、「用戶資訊」、「環境資訊」及「工程資訊」；另將原內容屬於「開放資料」者依政府資料開放相關程序上架於政府資料開放平臺，統計截至112年10月12日，本公司已公開資料集數量，已由104年底（開放台電
                      open taipower會議前）的45項資料集增加至177項資料集。<br />
                      二.倘台端有其他資料需求且符合政府資料開放作業原則，歡迎來電或來信詢問，本公司將竭力為您服務，謝謝。<br />
                      承辦人:詹先生(tel:02-23667025、email:<br />
                      u479093@taipower.com.tw) 台灣電力公司　敬復 <br />
                      <br />
                      結案狀態: 未結案<br />
                    </div>
                    <ul class="response-re-list">
                      <li class="response-item user">
                        <div class="avatar">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                          >
                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                            <path
                              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                            />
                          </svg>
                        </div>
                        <div class="response-item-main">
                          <div class="response-item-main-header">
                            <span>T****e</span>於<span>2024-10-22 08:55</span>回應
                            <div class="floor">民眾回復</div>
                          </div>
                          <div class="response-item-main-container">
                            <div class="title">
                              Re:經濟部: 建請台灣電力股份有限公司公開原「開放台電 open
                              taipower」公開資料
                            </div>
                            <div class="content">
                              承辦您好，您提及的兩處連結仍有缺少部分原「開放台電open
                              taipower」公開資料喔，我直接列在這裡，讓您省事些：(1)停電原因分析、(2)郝明義提問配電變壓器採
                              V-V
                              接線疑義台電公司答覆說明、(3)配電系統線損紀錄及原因、(4)配電失效分析、(5)輸電系統線損紀錄及原因、(6)輸電系統失效分析、(7)六、七輸計畫效益分析、(8)六、七輸可行性報告書、(9)基、中、尖載機組的決定方式與依據和成本分析、(10)發電機組發電排程與系統備轉容量之調度規劃、(11)電力系統緊急調度原則、(12)因應未來需求變動之系統發展決策模式、(13)其他台電為維持穩定供電之重大決策及其決策模式、(14)「電源不足時期限制用電辦法」執行及通報機制。
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('建請台灣電力股份有限公司公開原「開放台電 open taipower」公開資料')
const pageDescription = ref('建請台灣電力股份有限公司公開原「開放台電 open taipower」公開資料')
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

interface ResponseForm {
  mail: string
  comment_industry: string
  comment_type: string
  comment_identity: string
  title: string
  body: string
}

const dialogAddResponse = ref(false)
const responseFormRef = ref<FormInstance>()
const responseForm = reactive<ResponseForm>({
  mail: '',
  comment_industry: '',
  comment_type: '',
  comment_identity: '',
  title: '',
  body: ''
})
const rules = reactive<FormRules<ResponseForm>>({
  mail: [
    { required: true, message: '請輸入', trigger: 'blur' },
    { type: 'email', message: '請輸入正確電子信箱格式', trigger: ['blur', 'change'] }
  ],
  comment_type: [{ required: true, message: '請選擇', trigger: 'change' }],
  comment_industry: [{ required: true, message: '請選擇', trigger: 'change' }],
  comment_identity: [{ required: true, message: '請選擇', trigger: 'change' }],
  title: [
    { required: true, message: '請輸入', trigger: 'blur' },
    { max: 255, message: '超過 255 字元，請刪減名稱', trigger: 'blur' }
  ],
  body: [{ required: true, message: '請輸入', trigger: 'blur' }]
})

const opinionOptions = ref([
  {
    label: '資源資料編碼錯誤',
    value: '1'
  },
  {
    label: '資料集提供機關聯絡資訊異常回報',
    value: '2'
  }
])
const industryOptions = ref([
  {
    label: '農、牧業',
    value: '1'
  },
  {
    label: '林業',
    value: '2'
  }
])
const identityOptions = ref([
  {
    label: '公司',
    value: '1'
  },
  {
    label: '協會',
    value: '2'
  },
  {
    label: '社群',
    value: '3'
  }
])
</script>
