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
      ak-container-bg
    />
    <div class="spotlight-box">
      <h2 style="text-wrap: balance; text-align: center">{{ pageTitle }}</h2>
      <div style="text-wrap: balance; text-align: center">本資料集屬112至116年規劃更新成果。</div>
      <div class="rating">
        <div class="color-hint">評分此資料集：</div>
        <div><el-rate v-model="rateValue" :label="`${pageTitle}評分`" /></div>
        <div class="rating-text">平均 0.00 (0 人次投票)</div>
      </div>
      <div>
        <el-button type="primary" plain class="btn-book">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
            <path
              d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"
            />
          </svg>
          <div>訂閱</div>
        </el-button>
      </div>
    </div>
    <br />
    <div class="page">
      <div class="page-tool-bar between">
        <div>
          <ul class="dataset-detail-info">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                class="award type-1"
              >
                <title>金標章</title>
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                class="award type-2"
              >
                <title>白金標章</title>
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
                />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                />
              </svg>
              <span>瀏覽次數： 32</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                />
              </svg>
              <span>下載次數： 11</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                <path
                  d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
                />
              </svg>
              <span>意見數： 0</span>
            </li>
          </ul>
        </div>
        <div>
          <el-button type="primary" size="large">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
              <path
                d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
              />
            </svg>
            &nbsp;列印
          </el-button>
        </div>
      </div>
      <div class="table table--fixed od-table od-table--bordered">
        <div class="table-row">
          <div class="table-cell th">
            <strong>主要欄位說明</strong>
            <div>*粗體欄位為資料標準欄位</div>
          </div>
          <div class="table-cell">圖資名稱、資料格式、坐標系統、下載網址</div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>資料資源下載網址</strong>
          </div>
          <div class="table-cell">
            <ul>
              <li>
                <el-button type="primary" plain>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                    />
                  </svg>
                  &nbsp;CSV
                </el-button>
                <el-button type="primary" plain @click="dialogVisible = true">檢視資料</el-button>
                <el-dialog v-model="dialogVisible" title="檢視資料">
                  <div class="table table--fixed od-table od-table--bordered">
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>資料資源欄位</strong>
                      </div>
                      <div class="table-cell">圖資名稱、資料格式、坐標系統、下載網址</div>
                    </div>
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>檔案格式</strong>
                      </div>
                      <div class="table-cell">CSV</div>
                    </div>
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>編碼格式</strong>
                      </div>
                      <div class="table-cell">UTF-8</div>
                    </div>
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>資料量</strong>
                      </div>
                      <div class="table-cell">1</div>
                    </div>
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>資料下載網址</strong>
                      </div>
                      <div class="table-cell">
                        <nuxt-link
                          to="https://data.moi.gov.tw/MoiOD/System/DownloadFile.aspx?DATA=CAFED157-A604-4F0C-969A-F0C3B8039237"
                          title="`下載 CSV 檔案`"
                        >
                          https://data.moi.gov.tw/MoiOD/System/DownloadFile.aspx?DATA=CAFED157-A604-4F0C-969A-F0C3B8039237
                        </nuxt-link>
                      </div>
                    </div>
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>資料資源描述</strong>
                      </div>
                      <div class="table-cell">
                        112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)
                      </div>
                    </div>
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>資料資源品質檢測時間</strong>
                      </div>
                      <div class="table-cell">2024-11-08 17:15:00</div>
                    </div>
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>資料資源備註欄位</strong>
                      </div>
                      <div class="table-cell"></div>
                    </div>
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>下載用途說明</strong>
                      </div>
                      <div class="table-cell">
                        <p>
                          如願協助本平臺精進，可協助填寫下載用途說明，感謝您的幫忙，本項統計僅供內部參考使用(可複選)
                        </p>
                        <el-checkbox-group v-model="checkList" label="複選下載用途說明">
                          <label for="check-list-opa" class="visually-hidden">是商業用途</label>
                          <el-checkbox id="check-list-opa" label="商業用途" />
                          <label for="check-list-opb" class="visually-hidden">學術研究</label>
                          <el-checkbox id="check-list-opb" label="學術研究" />
                          <label for="check-list-opc" class="visually-hidden">統計分析</label>
                          <el-checkbox id="check-list-opc" label="統計分析" />
                          <label for="check-list-opd" class="visually-hidden">程式開發</label>
                          <el-checkbox id="check-list-opd" label="程式開發" />
                          <label for="check-list-ope" class="visually-hidden">其他</label>
                          <el-checkbox id="check-list-ope" label="其他" />
                        </el-checkbox-group>
                        <div style="display: flex">
                          <el-input v-model="input" placeholder="請輸入下載用途說明" />
                          <el-button type="primary">送出</el-button>
                        </div>
                      </div>
                    </div>
                    <div class="table-row">
                      <div class="table-cell th">
                        <strong>多元格式參考資料</strong>
                      </div>
                      <div class="table-cell">
                        <p>
                          以下連結為本平臺協助提供多元格式參考資料 (轉檔時間：2024-11-08 17:15:00)，
                          非即時資料， 完整資料請以機關<nuxt-link
                            to="https://data.moi.gov.tw/MoiOD/System/DownloadFile.aspx?DATA=CAFED157-A604-4F0C-969A-F0C3B8039237"
                            title="前往下載檔案"
                            >原始連結</nuxt-link
                          >為主。
                        </p>
                        <span>點此下載:</span>
                        <el-button>CSV</el-button>
                        <el-button>XML</el-button>
                        <el-button>JSON</el-button>
                      </div>
                    </div>
                  </div>
                </el-dialog>
                112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)
              </li>
            </ul>
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>提供機關</strong>
          </div>
          <div class="table-cell">
            <nuxt-link to="/datasets/search" title="前往搜尋 內政部國土測繪中心 資料集">
              內政部國土測繪中心
            </nuxt-link>
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>提供機關聯絡人姓名</strong>
          </div>
          <div class="table-cell">吳嘉隆先生 (04-22522966#340)</div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>更新頻率</strong>
          </div>
          <div class="table-cell">每1年</div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>授權方式</strong>
          </div>
          <div class="table-cell">政府資料開放授權條款-第1版</div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>計費方式</strong>
          </div>
          <div class="table-cell">免費</div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>上架日期</strong>
          </div>
          <div class="table-cell">2024-11-08</div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>資料集上架方式</strong>
          </div>
          <div class="table-cell">系統介接程式</div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>詮釋資料更新時間</strong>
          </div>
          <div class="table-cell">2024-11-08 17:13</div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>服務分類</strong>
          </div>
          <div class="table-cell">
            <nuxt-link to="/datasets/search" title="前往搜尋 公共資訊 資料集">公共資訊</nuxt-link>
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>資料集屬性</strong>
          </div>
          <div class="table-cell">開放資料</div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>關鍵字</strong>
          </div>
          <div class="table-cell">
            <el-button
              type="primary"
              title="前往搜尋 地形圖 資料集"
              plain
              @click="navigateTo('/datasets/search')"
            >
              地形圖
            </el-button>
            <el-button
              type="primary"
              title="前往搜尋 經建版地形圖 資料集"
              plain
              @click="navigateTo('/datasets/search')"
            >
              經建版地形圖
            </el-button>
            <el-button
              type="primary"
              title="前往搜尋 100000 資料集"
              plain
              @click="navigateTo('/datasets/search')"
            >
              100000
            </el-button>
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>相關網址</strong>
          </div>
          <div class="table-cell">
            https://www.tgos.tw/MDE/MetaData/CRUD/ViewMetaData?GUID=000adc97-1ffe-4b19-b4fe-bfdaa129a774&VIEW_TYPE=only&SOURCE=1
          </div>
        </div>
        <div class="table-row">
          <div class="table-cell th">
            <strong>備註</strong>
          </div>
          <div class="table-cell">
            本中心「經建版地形圖數值資料檔(比例尺為二萬五千分之一、五萬分之一及十萬分之一)」前經「105年行政院資料開放諮詢小組第2次會議」列為甲類資料，並經內政部105年7月26日台內地字第1051306149號令修正發布「國土測繪成果資料收費標準」第2條附表附件2，開放資料供免費下載使用。本資料屬112至116年規劃更新成果。
          </div>
        </div>
      </div>
      <br />
      <el-row :gutter="16">
        <el-col :span="9" :xs="24">
          <el-card header="相關資料集" shadow="never">
            <ul class="normal-list">
              <li v-for="(item, index) in 10" :key="index" class="normal-item">
                <nuxt-link
                  to="/dataset/1"
                  title="前往資料集 111年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)"
                >
                  111年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)
                </nuxt-link>
              </li>
            </ul>
          </el-card>
          <br />
        </el-col>
        <el-col :span="15" :xs="24">
          <el-card shadow="never">
            <template #header>
              <div class="card-header">
                <div>活化應用</div>
                <nuxt-link title="前往 活化應用" to="/applications"> 查看全部 </nuxt-link>
              </div>
            </template>
            <div class="custom-carousel">
              <el-carousel
                ref="card"
                trigger="click"
                arrow="never"
                :indicator-position="'none'"
                :interval="10000"
              >
                <el-carousel-item
                  v-for="(item, index) in carouselList"
                  :key="index"
                  class="normal-item"
                >
                  <ul class="normal-list is-image">
                    <li class="normal-item">
                      <div class="normal-item-image">
                        <img :src="item.imgPath" :alt="`${item.title}的活化應用圖片`" />
                      </div>
                      <nuxt-link
                        :to="item.path"
                        :title="`前往活化應用 ${item.title}`"
                        class="normal-item-title"
                      >
                        {{ item.title }}
                      </nuxt-link>
                      <div class="normal-item-content">{{ item.content }}</div>
                    </li>
                  </ul>
                </el-carousel-item>
                <el-button class="custom-carousel-btn-left" @click="cardPrev()">
                  <span class="visually-hidden">上一個</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                    />
                  </svg>
                </el-button>
                <el-button class="custom-carousel-btn-right" @click="cardNext()">
                  <span class="visually-hidden">下一個</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    />
                  </svg>
                </el-button>
              </el-carousel>
            </div>
          </el-card>
          <br />
        </el-col>
      </el-row>
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
          <li class="response-item user">
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
                <span>M****o</span>於<span>2024-03-19 12:37</span>回應
              </div>
              <div class="response-item-main-container">
                <div class="title">關於「資料集詮釋資料欄位」的建議</div>
                <div class="content">
                  業務承辦人員，您好：每筆資料「遺失地點」欄位裡的資訊格式不一致，而許多筆資料的資訊內容不夠完整，例如：「彰化縣」只寫「彰化」，或是只提供了街道名稱。建議直接新增「縣市」欄位，或是提供完整資訊，以方便機器可讀之存取及程式篩選排序之應用。謝謝您的協助。
                </div>
              </div>
              <ul class="response-re-list">
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
                      <span>F****2</span>於<span>2024-03-24 10:00</span>回應
                      <div class="floor">機關回復</div>
                    </div>
                    <div class="response-item-main-container">
                      <div class="title">Re: 關於「資料集詮釋資料欄位」的建議</div>
                      <div class="content">
                        Hello 您好
                        有關您反應寵物遺失啟事「遺失地點」欄位裡的資訊格式不一致，經詢問業務單位其回復如下:「寵物遺失啟事」資料集其資料來源出自於寵物登記管理資訊網，並由民眾上網登載，遺失地點欄位基於民眾遭遇之多樣性及訴求協尋為目的，只要民眾認為所填載遺失地點資訊夠清楚，並未要求民眾登打格式，實務上，民眾亦多以指標性景點做為登打內容，考量公開資料民眾之應用需求，本會將於後續系統功能擴充中嘗試導入縣市欄位供通報民眾擇定。感謝您對政府資料開放支持!!
                      </div>
                    </div>
                  </div>
                </li>
                <li class="response-item user">
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
                      <span>M****o</span>於<span>2024-03-24 15:58</span>回應
                      <div class="floor">民眾回復</div>
                    </div>
                    <div class="response-item-main-container">
                      <div class="title">Re: Re: 關於「資料集詮釋資料欄位」的建議</div>
                      <div class="content">針對開發者的需求，主管機關提供了解決方案。</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)')
const pageDescription = ref('112年經建版地形圖數值資料檔(比例尺十萬分之一)(SHP檔)')
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

const rateValue = ref(0)
const dialogVisible = ref(false)
const checkList = ref(['selected and disabled', 'Option A'])
const input = ref('')

const carouselList = ref([
  {
    title: '寵物找爸媽',
    content: '幫助尋找你的寵物夥伴',
    path: '/applications/1',
    imgPath: '/images/logo-icon.png'
  },
  {
    title: '寵物找爸媽2',
    content: '幫助尋找你的寵物夥伴',
    path: '/applications/1',
    imgPath: '/images/logo-icon.png'
  }
])

const card = ref<any | null>(null)
const cardPrev = () => {
  if (card.value) {
    card.value.prev()
  }
}
const cardNext = () => {
  if (card.value) {
    card.value.next()
  }
}

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

<style scoped>
.el-card {
  height: 350px;
  & :deep(.el-card__body) {
    overflow-y: auto;
    max-height: 290px;
  }
}
</style>
