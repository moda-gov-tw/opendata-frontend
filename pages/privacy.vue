<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <article>
        <section>
          <p>
            本單位（以下簡稱本部）配合行政院推動政府資料活化應用，提供政府資料開放平臺（以下簡稱本平臺）作為民眾查詢開放之政府資料之單一窗口，本部基於尊重及保護用戶的個人隱私權，為協助您清楚地瞭解本平臺如何蒐集、應用及保護您所提供的個人資料，請您詳細閱讀本平臺隱私權保護及資訊安全政策。
          </p>
        </section>
        <h3>適用範圍</h3>
        <section>
          <p>
            以下政策內容，適用於您在本平臺活動時，所涉及之個人資料蒐集、處理及利用，但不適用於與本平臺資料集連結與介接至各政府機關網站或其他網站。凡經由本平臺連結與介接至其他網站，均適用各該網站專屬之隱私權保護與資訊安全政策，本平臺不負任何連帶責任
          </p>
        </section>
        <h3>個人資料的蒐集、處理及利用</h3>
        <section>
          <ul>
            <li>
              單純在本平臺的瀏覽及檔案下載行為，本平臺會保留您在瀏覽或查詢時，伺服器產生的相關紀錄，包括您使用連線設備的IP位址、時間、瀏覽及訂閱資料紀錄等，這些資料係供本平臺管理單位內部作流量和網路行為調查的總量分析，以利於提升本平臺的服務品質。若基於公共利益為統計或學術研究之必要，資料亦將經過處理，使其揭露方式無從識別特定之當事人。
            </li>
            <li>
              如您透過電子郵件或服務信箱反映您的意見或詢問相關業務問題時，我們會保存您的通訊紀錄，僅作為與您聯絡之用。
            </li>
            <li>
              <p>
                本平臺絕不會任意出售、交換、或出租任何您的個人資料給其他團體、個人或私人企業，於利用您的個人資料時，均與蒐集之特定目的相符，但有下列情形之一者，得為特定目的外之利用：
              </p>
              <ol>
                <li>法律明文規定。</li>
                <li>為維護國家安全或增進公共利益。</li>
                <li>為免除當事人之生命、身體、自由或財產上之危險。</li>
                <li>為防止他人權益之重大危害。</li>
                <li>
                  公務機關或學術研究機構基於公共利益為統計或學術研究而有必要，且資料經過提供者處理後或蒐集者依其揭露方式無從識別特定之當事人。
                </li>
                <li>有利於當事人權益。</li>
                <li>經當事人書面同意。</li>
              </ol>
            </li>
            <li>
              依個人資料保護法第 3
              條規定，您就您所提供之個人資料享有查詢或請求閱覽、請求製給複製本、請求補充或更正、請求停止蒐集處理或利用
              (包含撤回同意、反對本平臺繼續處理您的資料)、請求刪除的權利，若您有以上需求請與政府資料開放平臺聯絡。>
            </li>
          </ul>
        </section>
        <h3>Cookie運用</h3>
        <section>
          <p>Cookie是伺服端為區別使用者喜好，經由瀏覽器寫入使用者硬碟的一些簡短資訊。</p>
          <p>
            本平臺會在您瀏覽器中寫入並讀取Cookie，您可以在瀏覽器設定項目中，拒絕Cookie的執行，並不會影響您使用本平臺之服務。上述之Cookie僅會對個別連線者的瀏覽器予以標示，記錄瀏覽器在本服務內部所瀏覽的網頁，進行瀏覽人數統計及瀏覽模式分析，做為本平臺改善服務的參考，但不會識別特定當事人，若有基於公共利益為統計或學術研究而有必要，資料亦將經過處理，使其揭露方式無從識別特定之當事人。
          </p>
        </section>
        <h3>平臺使用聲明</h3>
        <section>
          <p>
            使用者應遵守本平臺公告事項之下載及連線方式等取用方式，以確保本平臺資訊系統穩定及其他使用者得以公平使用。
            本平臺管理機關及各機關如因網路線路或設備故障、檢修、保養、停電或其他天災事變等不可抗力情事，致無法提供使用者資料時，將於事先或事後於本平臺公告相關訊息。使用者因此所產生損害或損失，本平臺管理機關及各機關不負任何賠償或補償之責。
          </p>
        </section>
        <h3>資訊安全管理</h3>
        <section>
          <p>為維護本平臺資訊安全，以確保本平臺能夠持續為您服務，我們提供以下的安全保護措施：</p>
          <ul>
            <li>
              使用網路入侵偵測機制，監控網路流量，以確認未經授權而企圖上載或更改、網頁資訊或蓄意破壞者。
            </li>
            <li>
              裝設防火牆防止非法入侵、破壞或竊取或破壞資料，以避免平臺遭到非法使用，以保障您的權益。
            </li>
            <li>裝設掃毒軟體，定期掃毒，以提供您更安全的網頁瀏覽環境。</li>
            <li>
              不定期模擬駭客攻擊，演練發生安全事件時的系統回復程序，並提供適當的安全防禦等級。
            </li>
            <li>定期進行備份作業，將所有資料備份到備援主機。</li>
          </ul>
        </section>
        <h3>自我資料安全保護措施</h3>
        <section>
          <p>
            請妥善保管您個人任何資料，切勿將個人資料提供給任何第三人，以保障您的權益。若您是與他人共享電腦或使用公共電腦，使用完畢請務必記得登出帳號，並關閉瀏覽器視窗。提醒您：您自願於網際網路上（如在討論區、留言板、聊天區..等）透露個人資料，均可能會被他人蒐集和使用，您可能會收到他人主動提供的電子郵件。
          </p>
        </section>
        <h3>隱私權保護及資訊安全政策修訂</h3>
        <section>
          <p>
            本隱私權保護及資訊安全政策條款如有修訂，將公告於本平臺，請您隨時注意修訂之公告訊息。
          </p>
          <p>
            若您對於修訂內容有表示反對等任何意見，請利用本平臺諮詢服務信箱聯繫我們，如未經表示反對仍繼續使用本平臺服務，則視為您已閱讀、瞭解並同意接受修訂內容。
          </p>
        </section>
        <h3>隱私權保護政策修正建言</h3>
        <section>
          <p>若您對本平臺的隱私權保護宣告有任何疑問，歡迎與我們聯絡。</p>
        </section>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('政府資料開放平臺隱私權保護、使用及資訊安全政策')
const pageDescription = ref('政府資料開放平臺隱私權保護、使用及資訊安全政策')
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
