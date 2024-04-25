<template>
  <main>
    <theBreadcrumbs :current-page="pageTitle" />
    <div class="page">
      <h2>{{ pageTitle }}</h2>
      <article data-v-15aecef5="">
        <section data-v-15aecef5="">
          <div data-v-15aecef5="" class="ins-title custom-font">
            詮釋資料提供機關申請 IP 和 API Key
          </div>
          <div data-v-15aecef5="">
            詮釋資料提供機關可於「政府資料開放平臺」M2M專區下載 「<a
              data-v-15aecef5=""
              target="_blank"
              title="下載 資料開放跨平臺介接機關服務申請表.odt"
              download="下載 資料開放跨平臺介接機關服務申請表.odt"
              rel="noopener noreferrer"
              href="https://file.data.gov.tw/event/M2M_API.odt"
              >資料開放跨平臺介接機關服務申請表</a
            >」， 營運團隊會於系統後臺的跨平臺介接設定登錄相關資訊。
          </div>
        </section>
        <section data-v-15aecef5="">
          <div data-v-15aecef5="" class="ins-title custom-font">
            詮釋資料提供機關於本身「機關資料開放平臺」上使用即時或定期發布功能
          </div>
          <div data-v-15aecef5="">
            <p data-v-15aecef5="">
              「詮釋資料提供機關」呼叫「政府資料開放平臺」的異動資料集詮釋資料API進行發布異動詮釋資料。
            </p>
            <p data-v-15aecef5="">
              使用異動資料集詮釋資料API時，必須配合所設定之資料來源IP 和 API Key
              使用。呼叫新增、刪除、修改詮釋資料的API時， 需使用HTTP 基本認證（HTTP Basic
              Authentication）以確認授權身分，即在HTTP header 裡 設定屬性Authorization的值為API
              Key。
            </p>
          </div>
          <div data-v-15aecef5="">
            <a data-v-15aecef5="" href="#APIv1" title="前往 【API v1 版】">【API v1 版】</a>
            <a data-v-15aecef5="" href="#APIv2" title="前往 【API v2 版】">【API v2 版】</a>
          </div>
        </section>
        <hr data-v-15aecef5="" />
        <section data-v-15aecef5="">
          <h3 id="APIv1" data-v-15aecef5="" class="ins-title scroll">異動資料集詮釋資料API v1</h3>
          <ul data-v-15aecef5="">
            <li data-v-15aecef5="">
              <a data-v-15aecef5="" href="#postdata" title="前往 新增詮釋資料">新增詮釋資料</a>
            </li>
            <li data-v-15aecef5="">
              <a data-v-15aecef5="" href="#putdata" title="前往 修改詮釋資料">修改詮釋資料</a>
            </li>
            <li data-v-15aecef5="">
              <a data-v-15aecef5="" href="#deletedata" title="前往 刪除詮釋資料">刪除詮釋資料</a>
            </li>
          </ul>
          <div id="postdata" data-v-15aecef5="" class="ins-title scroll custom-font">
            新增詮釋資料(v1)
          </div>
          <ol data-v-15aecef5="">
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">使用說明：</p>
              <p data-v-15aecef5="">新增詮釋資料</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">介接網址：</p>
              <p data-v-15aecef5="">/api/v1/rest/dataset</p>
              <p data-v-15aecef5="">Method=POST</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入範例：</p>
              <p data-v-15aecef5="">範例1：/api/v1/rest/dataset</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入說明：</p>
              <div data-v-15aecef5="">
                <p data-v-15aecef5="">資料集詮釋資料的欄位與內容</p>
                <div data-v-15aecef5="">
                  <p data-v-15aecef5="">{</p>
                  <div data-v-15aecef5="" class="content-left">
                    <p data-v-15aecef5="">"categoryCode":"I00",</p>
                    <p data-v-15aecef5="">"identifier":"A41000000G-000001",</p>
                    <p data-v-15aecef5="">"title":"政府資料開放平臺資料集清單",</p>
                    <p data-v-15aecef5="">
                      "description":"集中列示於政府資料開放平台資料集之詮釋資料，包含資料集名稱、檔案格式、下載連結、資料集上架方式、資料集描述、主要欄位說明、資料集提供機關、更新頻率、授權方式、授權說明網址、計費方式、編碼格式、資料集提供機關聯絡人、資料集提供機關聯絡人電話、備註等",
                    </p>
                    <p data-v-15aecef5="">
                      "fieldDescription":"資料集名稱、檔案格式、下載連結、資料集上架方式、資料集描述、主要欄位說明、資料集提供機關、更新頻率、授權方式、授權說明網址、計費方式、編碼格式、資料集提供機關聯絡人、資料集提供機關聯絡人電話、備註",
                    </p>
                    <p data-v-15aecef5="">"type":"rawData",</p>
                    <p data-v-15aecef5="">"license":"政府資料開放授權條款－第1版",</p>
                    <p data-v-15aecef5="">"licenseURL":"/license",</p>
                    <p data-v-15aecef5="">"cost":"免費",</p>
                    <p data-v-15aecef5="">"costURL":"",</p>
                    <p data-v-15aecef5="">"costLaw":"",</p>
                    <p data-v-15aecef5="">"organization":"數位部",</p>
                    <p data-v-15aecef5="">"organizationContactName":"袁小美",</p>
                    <p data-v-15aecef5="">"organizationContactPhone":"02-21234567",</p>
                    <p data-v-15aecef5="">
                      "organizationContactEmail":"opendatagov@organization.com",
                    </p>
                    <p data-v-15aecef5="">"publisher":"數位部",</p>
                    <p data-v-15aecef5="">"publisherContactName":"林小美 女士",</p>
                    <p data-v-15aecef5="">"publisherContactPhone":"02-21234567",</p>
                    <p data-v-15aecef5="">"publisherContactEmail":"opendatagov@publisher.com",</p>
                    <p data-v-15aecef5="">"publisherOID":"2.16.886.101.20003.20082",</p>
                    <p data-v-15aecef5="">"publisherOrgCode":"A41000000G",</p>
                    <p data-v-15aecef5="">"accrualPeriodicity":"每日",</p>
                    <p data-v-15aecef5="">"temporalCoverageFrom":"2014-04-04 00:00:00",</p>
                    <p data-v-15aecef5="">"temporalCoverageTo":"2014-04-04 00:00:00",</p>
                    <p data-v-15aecef5="">"issued":"2013-11-01 00:00:00",</p>
                    <p data-v-15aecef5="">"modified":"2015-05-29 11:46:53",</p>
                    <p data-v-15aecef5="">"spatial":"臺灣",</p>
                    <p data-v-15aecef5="">"language":"",</p>
                    <p data-v-15aecef5="">
                      "landingPage":"http://www.ndc.gov.tw/m1.aspx?sNo=0027915#.VWfgxFyqqko",
                    </p>
                    <p data-v-15aecef5="">"keyword":[</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"政府資料開放",</p>
                      <p data-v-15aecef5="">"政府資料開放平臺",</p>
                      <p data-v-15aecef5="">"資料集",</p>
                      <p data-v-15aecef5="">"資料集詮釋資料",</p>
                      <p data-v-15aecef5="">"Open Data",</p>
                      <p data-v-15aecef5="">"Open Government Data",</p>
                      <p data-v-15aecef5="">"Open",</p>
                      <p data-v-15aecef5="">"Data",</p>
                      <p data-v-15aecef5="">"Government",</p>
                      <p data-v-15aecef5="">"部會"</p>
                    </div>
                    <p data-v-15aecef5="">],</p>
                    <p data-v-15aecef5="">"numberOfData":"",</p>
                    <p data-v-15aecef5="">"notes":"",</p>
                    <p data-v-15aecef5="">"distribution":[</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"resourceID":"A41000000G-000001-001",</p>
                        <p data-v-15aecef5="">"resourceDescription":"",</p>
                        <p data-v-15aecef5="">"format":"CSV",</p>
                        <p data-v-15aecef5="">"resourceModified":"2015-02-25 17:51:29",</p>
                        <p data-v-15aecef5="">
                          "downloadURL":"https://file.data.gov.tw/opendatafile/政府資料開放平臺資料集清單.csv",
                        </p>
                        <p data-v-15aecef5="">"metadataSourceOfData":"",</p>
                        <p data-v-15aecef5="">"characterSetCode":"UTF-8"</p>
                      </div>
                      <p data-v-15aecef5="">} ,</p>
                    </div>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"resourceID":"A41000000G-000001-002",</p>
                        <p data-v-15aecef5="">"resourceDescription":"",</p>
                        <p data-v-15aecef5="">"format":"JSON",</p>
                        <p data-v-15aecef5="">"resourceModified":"2015-02-25 17:51:29",</p>
                        <p data-v-15aecef5="">
                          "downloadURL":"https://file.data.gov.tw/opendatafile/政府資料開放平臺資料集清單.json",
                        </p>
                        <p data-v-15aecef5="">"metadataSourceOfData":"",</p>
                        <p data-v-15aecef5="">"characterSetCode":"UTF-8"</p>
                      </div>
                      <p data-v-15aecef5="">} ,</p>
                    </div>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"resourceID":"A41000000G-000001-003",</p>
                        <p data-v-15aecef5="">"resourceDescription":"",</p>
                        <p data-v-15aecef5="">"format":"XML",</p>
                        <p data-v-15aecef5="">"resourceModified":"2015-02-25 17:51:29",</p>
                        <p data-v-15aecef5="">
                          "downloadURL":"https://file.data.gov.tw/opendatafile/政府資料開放平臺資料集清單.xml",
                        </p>
                        <p data-v-15aecef5="">"metadataSourceOfData":"",</p>
                        <p data-v-15aecef5="">"characterSetCode":"UTF-8"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">]</p>
                  </div>
                  }
                </div>
              </div>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出範例：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行成功如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":true,</p>
                      <p data-v-15aecef5="">"result":{</p>
                      <p data-v-15aecef5="" class="content-left">
                        "identifier":"A41000000G-000001"
                      </p>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行失敗如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":false,</p>
                      <p data-v-15aecef5="">"error":{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"identifier":"A41000000G-000001"</p>
                        <p data-v-15aecef5="">"error_type":"ER0031:資料集屬性錯誤",</p>
                        <p data-v-15aecef5="">"message":"無此分類categoryCode=k00"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
              </ol>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">備註：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  資料集編號(identifier)指的是資料集的資訊辨識編碼。相等於資料集詮釋資料的資料集編號。可以使用詮釋資料提供機關之開放平臺上的編號。
                </li>
                <li data-v-15aecef5="">
                  publisherOID 與 publisherOrgCode 請參考gOID網站的機關OID與機關代號:
                  <a
                    data-v-15aecef5=""
                    href="http://oid.nat.gov.tw/"
                    title="另開視窗 前往 gOID網站"
                    target="_blank"
                    rel="noopener noreferrer"
                    >http://oid.nat.gov.tw/</a
                  >
                </li>
              </ol>
            </li>
          </ol>
          <div id="putdata" data-v-15aecef5="" class="ins-title scroll custom-font">
            修改詮釋資料(v1)
          </div>
          <ol data-v-15aecef5="">
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">使用說明：</p>
              <p data-v-15aecef5="">修改詮釋資料</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">介接網址：</p>
              <p data-v-15aecef5="">/api/v1/rest/dataset/{identifier}</p>
              <p data-v-15aecef5="">Method=PUT</p>
              <p data-v-15aecef5="">{identifier} ：資料集編號</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入範例：</p>
              <p data-v-15aecef5="">範例1：/api/v1/rest/dataset/A41000000G-000001</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入說明：</p>
              <div data-v-15aecef5="">
                <p data-v-15aecef5="">資料集詮釋資料的欄位與內容</p>
                <div data-v-15aecef5="">
                  <p data-v-15aecef5="">{</p>
                  <div data-v-15aecef5="" class="content-left">
                    <p data-v-15aecef5="">"categoryCode":"I00",</p>
                    <p data-v-15aecef5="">"identifier":"A41000000G-000001",</p>
                    <p data-v-15aecef5="">"title":"政府資料開放平臺資料集清單",</p>
                    <p data-v-15aecef5="">
                      "description":"集中列示於政府資料開放平台資料集之詮釋資料，包含資料集名稱、檔案格式、下載連結、資料集上架方式、資料集描述、主要欄位說明、資料集提供機關、更新頻率、授權方式、授權說明網址、計費方式、編碼格式、資料集提供機關聯絡人、資料集提供機關聯絡人電話、備註等",
                    </p>
                    <p data-v-15aecef5="">
                      "fieldDescription":"資料集名稱、檔案格式、下載連結、資料集上架方式、資料集描述、主要欄位說明、資料集提供機關、更新頻率、授權方式、授權說明網址、計費方式、編碼格式、資料集提供機關聯絡人、資料集提供機關聯絡人電話、備註",
                    </p>
                    <p data-v-15aecef5="">"type":"rawData",</p>
                    <p data-v-15aecef5="">"license":"政府資料開放授權條款－第1版",</p>
                    <p data-v-15aecef5="">"licenseURL":"/license",</p>
                    <p data-v-15aecef5="">"cost":"免費",</p>
                    <p data-v-15aecef5="">"costURL":"",</p>
                    <p data-v-15aecef5="">"costLaw":"",</p>
                    <p data-v-15aecef5="">"organization":"數位部",</p>
                    <p data-v-15aecef5="">"organizationContactName":"袁小美",</p>
                    <p data-v-15aecef5="">"organizationContactPhone":"02-21234567",</p>
                    <p data-v-15aecef5="">
                      "organizationContactEmail":"opendatagov@organization.com",
                    </p>
                    <p data-v-15aecef5="">"publisher":"數位部",</p>
                    <p data-v-15aecef5="">"publisherContactName":"林小美 女士",</p>
                    <p data-v-15aecef5="">"publisherContactPhone":"02-21234567",</p>
                    <p data-v-15aecef5="">"publisherContactEmail":"opendatagov@publisher.com",</p>
                    <p data-v-15aecef5="">"publisherOID":"2.16.886.101.20003.20082",</p>
                    <p data-v-15aecef5="">"publisherOrgCode":"A41000000G",</p>
                    <p data-v-15aecef5="">"accrualPeriodicity":"每日",</p>
                    <p data-v-15aecef5="">"temporalCoverageFrom":"2014-04-04 00:00:00",</p>
                    <p data-v-15aecef5="">"temporalCoverageTo":"2014-04-04 00:00:00",</p>
                    <p data-v-15aecef5="">"issued":"2013-11-01 00:00:00",</p>
                    <p data-v-15aecef5="">"modified":"2015-05-29 11:46:53",</p>
                    <p data-v-15aecef5="">"spatial":"臺灣",</p>
                    <p data-v-15aecef5="">"language":"",</p>
                    <p data-v-15aecef5="">
                      "landingPage":"http://www.ndc.gov.tw/m1.aspx?sNo=0027915#.VWfgxFyqqko",
                    </p>
                    <p data-v-15aecef5="">"keyword":[</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"政府資料開放",</p>
                      <p data-v-15aecef5="">"政府資料開放平臺",</p>
                      <p data-v-15aecef5="">"資料集",</p>
                      <p data-v-15aecef5="">"資料集詮釋資料",</p>
                      <p data-v-15aecef5="">"Open Data",</p>
                      <p data-v-15aecef5="">"Open Government Data",</p>
                      <p data-v-15aecef5="">"Open",</p>
                      <p data-v-15aecef5="">"Data",</p>
                      <p data-v-15aecef5="">"Government",</p>
                      <p data-v-15aecef5="">"部會"</p>
                    </div>
                    <p data-v-15aecef5="">],</p>
                    <p data-v-15aecef5="">"numberOfData":"",</p>
                    <p data-v-15aecef5="">"notes":"",</p>
                    <p data-v-15aecef5="">"distribution":[</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"resourceID":"A41000000G-000001-001",</p>
                        <p data-v-15aecef5="">"resourceDescription":"",</p>
                        <p data-v-15aecef5="">"format":"CSV",</p>
                        <p data-v-15aecef5="">"resourceModified":"2015-02-25 17:51:29",</p>
                        <p data-v-15aecef5="">
                          "downloadURL":"https://file.data.gov.tw/opendatafile/政府資料開放平臺資料集清單.csv",
                        </p>
                        <p data-v-15aecef5="">"metadataSourceOfData":"",</p>
                        <p data-v-15aecef5="">"characterSetCode":"UTF-8"</p>
                      </div>
                      <p data-v-15aecef5="">} ,</p>
                    </div>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"resourceID":"A41000000G-000001-002",</p>
                        <p data-v-15aecef5="">"resourceDescription":"",</p>
                        <p data-v-15aecef5="">"format":"JSON",</p>
                        <p data-v-15aecef5="">"resourceModified":"2015-02-25 17:51:29",</p>
                        <p data-v-15aecef5="">
                          "downloadURL":"https://file.data.gov.tw/opendatafile/政府資料開放平臺資料集清單.json",
                        </p>
                        <p data-v-15aecef5="">"metadataSourceOfData":"",</p>
                        <p data-v-15aecef5="">"characterSetCode":"UTF-8"</p>
                      </div>
                      <p data-v-15aecef5="">} ,</p>
                    </div>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"resourceID":"A41000000G-000001-003",</p>
                        <p data-v-15aecef5="">"resourceDescription":"",</p>
                        <p data-v-15aecef5="">"format":"XML",</p>
                        <p data-v-15aecef5="">"resourceModified":"2015-02-25 17:51:29",</p>
                        <p data-v-15aecef5="">
                          "downloadURL":"https://file.data.gov.tw/opendatafile/政府資料開放平臺資料集清單.xml",
                        </p>
                        <p data-v-15aecef5="">"metadataSourceOfData":"",</p>
                        <p data-v-15aecef5="">"characterSetCode":"UTF-8"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">]</p>
                  </div>
                  }
                </div>
              </div>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出範例：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行成功如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":true,</p>
                      <p data-v-15aecef5="">"result":{</p>
                      <p data-v-15aecef5="" class="content-left">
                        "identifier":"A41000000G-000001"
                      </p>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行失敗如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":false,</p>
                      <p data-v-15aecef5="">"error":{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"identifier":"A41000000G-000001"</p>
                        <p data-v-15aecef5="">"error_type":"ER0050:欲修改的資料集不存在",</p>
                        <p data-v-15aecef5="">"message":"欲修改的資料集不存在"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
              </ol>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">備註：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  資料集編號(identifier)指的是資料集的資訊辨識編碼。相等於資料集詮釋資料的資料集編號。可以使用詮釋資料提供機關之開放平臺上的編號。
                </li>
                <li data-v-15aecef5="">
                  publisherOID 與 publisherOrgCode 請參考gOID網站的機關OID與機關代號:
                  <a
                    data-v-15aecef5=""
                    href="http://oid.nat.gov.tw/"
                    title="另開視窗 前往 gOID網站"
                    target="_blank"
                    rel="noopener noreferrer"
                    >http://oid.nat.gov.tw/</a
                  >
                </li>
              </ol>
            </li>
          </ol>
          <div id="deletedata" data-v-15aecef5="" class="ins-title scroll custom-font">
            刪除詮釋資料(v1)
          </div>
          <ol data-v-15aecef5="">
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">使用說明：</p>
              <p data-v-15aecef5="">刪除詮釋資料</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">介接網址：</p>
              <p data-v-15aecef5="">/api/v1/rest/dataset/{identifier}</p>
              <p data-v-15aecef5="">Method=DELETE</p>
              <p data-v-15aecef5="">{identifier} ：資料集編號</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入範例：</p>
              <p data-v-15aecef5="">範例1：/api/v1/rest/dataset/A41000000G-000001</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出範例：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行成功如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":true,</p>
                      <p data-v-15aecef5="">"result":{</p>
                      <p data-v-15aecef5="" class="content-left">
                        "identifier":"A41000000G-000001"
                      </p>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行失敗如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":false,</p>
                      <p data-v-15aecef5="">"error":{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"identifier":"A41000000G-000001"</p>
                        <p data-v-15aecef5="">"error_type":"ER0060:欲刪除的資料集不存在",</p>
                        <p data-v-15aecef5="">"message":"欲刪除的資料集不存在"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
              </ol>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">備註：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  資料集編號(identifier)指的是資料集的資訊辨識編碼。相等於資料集詮釋資料的資料集編號。
                  可以使用詮釋資料提供機關之開放平臺上的編號。
                </li>
              </ol>
            </li>
          </ol>
        </section>
        <section data-v-15aecef5="">
          <h3 id="APIv2" data-v-15aecef5="" class="ins-title scroll">異動資料集詮釋資料API v2</h3>
          <ul data-v-15aecef5="">
            <li data-v-15aecef5="">
              <a data-v-15aecef5="" href="#postdata2" title="前往 新增詮釋資料">新增詮釋資料</a>
            </li>
            <li data-v-15aecef5="">
              <a data-v-15aecef5="" href="#putdata2" title="前往 修改詮釋資料">修改詮釋資料</a>
            </li>
            <li data-v-15aecef5="">
              <a data-v-15aecef5="" href="#deletedata2" title="前往 下架詮釋資料">下架詮釋資料</a>
            </li>
          </ul>
          <div id="postdata2" data-v-15aecef5="" class="ins-title scroll custom-font">
            新增詮釋資料(v2)
          </div>
          <ol data-v-15aecef5="">
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">使用說明：</p>
              <p data-v-15aecef5="">新增詮釋資料</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">介接網址：</p>
              <p data-v-15aecef5="">/api/v2/rest/dataset</p>
              <p data-v-15aecef5="">Method=POST</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入範例：</p>
              <p data-v-15aecef5="">範例1：/api/v2/rest/dataset</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入說明：</p>
              <div data-v-15aecef5="">
                <p data-v-15aecef5="">資料集詮釋資料的欄位與內容</p>
                <div data-v-15aecef5="">
                  <p data-v-15aecef5="">{</p>
                  <div data-v-15aecef5="" class="content-left">
                    <p data-v-15aecef5="">"categoryTheme":"001",</p>
                    <p data-v-15aecef5="">"categoryService":"I00",</p>
                    <p data-v-15aecef5="">"categoryDataset":"A",</p>
                    <p data-v-15aecef5="">"identifier":"A41000000G-000001",</p>
                    <p data-v-15aecef5="">"title":"政府資料開放平臺資料集清單",</p>
                    <p data-v-15aecef5="">
                      "description":"集中列示於政府資料開放平臺資料集之詮釋資料式、資料集提供機關聯絡人、資料集提供機關聯絡人電話、備註等",
                    </p>
                    <p data-v-15aecef5="">"license":"1",</p>
                    <p data-v-15aecef5="">"cost":"free",</p>
                    <p data-v-15aecef5="">"dataProvider":"loginaccount",</p>
                    <p data-v-15aecef5="">"publisherOID":"2.16.886.101.20003.20082 | 數位部",</p>
                    <p data-v-15aecef5="">"publisherContactName":"秘書室林小姐",</p>
                    <p data-v-15aecef5="">"publisherContactPhone":"02-23165300#XXX",</p>
                    <p data-v-15aecef5="">"publisherContactEmail":"example@ndc.gov.tw",</p>
                    <p data-v-15aecef5="">"updateFrequency":"每日",</p>
                    <p data-v-15aecef5="">"detectFrequency":"everyday",</p>
                    <p data-v-15aecef5="">"coverageStartedDate":"2014-01-01",</p>
                    <p data-v-15aecef5="">"coverageEndedDate":"2015-01-01",</p>
                    <p data-v-15aecef5="">"spatialCoverage":"A6305-0001-00",</p>
                    <p data-v-15aecef5="">"language":"zh",</p>
                    <p data-v-15aecef5="">"relatedUrl":" https://example1.gov.tw",</p>
                    <p data-v-15aecef5="">"keyword":[</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"OpenData",</p>
                      <p data-v-15aecef5="">"全部資料集"</p>
                    </div>
                    <p data-v-15aecef5="">],</p>
                    <p data-v-15aecef5="">"notes":"集中於政府資料開放平臺資料集之詮釋資料",</p>
                    <p data-v-15aecef5="">"distribution":[</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"resourceDescription":" 103 年01 月01 日開始收錄",</p>
                        <p data-v-15aecef5="">"resourceField":" 村名(name)、人口(population)",</p>
                        <p data-v-15aecef5="">"qcLevel":"/Document/definition/dataset",</p>
                        <p data-v-15aecef5="">"resourceFormat":"CSV",</p>
                        <p data-v-15aecef5="">"resourceCharacterEncoding":"UTF-8",</p>
                        <p data-v-15aecef5="">
                          "resourceDownloadUrl":"",
                        </p>
                        <p data-v-15aecef5="">"resourceFormat":"CSV",</p>
                        <p data-v-15aecef5="">"resourceAmount ":"4600",</p>
                        <p data-v-15aecef5="">"resourceNotes":"統計截止到2014 年12 月底"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">]</p>
                  </div>
                  }
                </div>
              </div>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出範例：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行成功如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":true,</p>
                      <p data-v-15aecef5="">"result":{</p>
                      <p data-v-15aecef5="" class="content-left">
                        "identifier":"A41000000G-000001"
                      </p>
                      <p data-v-15aecef5="" class="content-left">
                        "datasetId":"6564"
                        <span data-v-15aecef5="" style="color: silver">（系統產生）</span>
                      </p>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行失敗如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":false,</p>
                      <p data-v-15aecef5="">"error":{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"identifier":"A41000000G-000001"</p>
                        <p data-v-15aecef5="">"error_type":"ER0032:資料集主題分類錯誤",</p>
                        <p data-v-15aecef5="">"message":"無此分類categoryCode=k00"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
              </ol>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">備註：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  輸入內容之資料集編號（identifier）為「詮釋資料提供平臺」發布資料集的資訊編號，由「詮釋資料提供平臺」自行輸入。
                </li>
                <li data-v-15aecef5="">
                  提供機關物件識別碼（publisherOID），請參考物件識別碼中心網站
                  <a
                    data-v-15aecef5=""
                    href="http://oid.nat.gov.tw/"
                    target="_blank"
                    title="另開視窗 前往 gOID網站"
                    rel="noopener noreferrer"
                    >http://oid.nat.gov.tw/</a
                  >
                  ，為提供機關物件識別碼（OID），也可為下屬機關之OID，建立後則不得再修改。
                </li>
                <li data-v-15aecef5="">
                  資料集識別碼（datasetId）為「政府資料開放平臺」系統自動產出流水號，作為識別資料集之唯一值，不得重複與修改。新增詮釋資料完成後，系統會回傳此識別碼。
                </li>
              </ol>
            </li>
          </ol>
          <div id="putdata2" data-v-15aecef5="" class="ins-title scroll custom-font">
            修改詮釋資料(v2)
          </div>
          <ol data-v-15aecef5="">
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">使用說明：</p>
              <p data-v-15aecef5="">修改詮釋資料</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">介接網址：</p>
              <p data-v-15aecef5="">/api/v2/rest/dataset/{datasetId}</p>
              <p data-v-15aecef5="">Method=PUT</p>
              <p data-v-15aecef5="">{datasetId} ：資料集識別碼</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入範例：</p>
              <p data-v-15aecef5="">範例1：/api/v2/rest/dataset/6564</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入說明：</p>
              <div data-v-15aecef5="">
                <p data-v-15aecef5="">資料集詮釋資料的欄位與內容</p>
                <div data-v-15aecef5="">
                  <p data-v-15aecef5="">{</p>
                  <div data-v-15aecef5="" class="content-left">
                    <p data-v-15aecef5="">"categoryTheme":"001",</p>
                    <p data-v-15aecef5="">"categoryService":"I00",</p>
                    <p data-v-15aecef5="">"categoryDataset":"A",</p>
                    <p data-v-15aecef5="">"identifier":"A41000000G-000001",</p>
                    <p data-v-15aecef5="">"title":"政府資料開放平臺資料集清單",</p>
                    <p data-v-15aecef5="">
                      "description":"集中列示於政府資料開放平臺資料集之詮釋資料式、資料集提供機關聯絡人、資料集提供機關聯絡人電話、備註等",
                    </p>
                    <p data-v-15aecef5="">"license":"1",</p>
                    <p data-v-15aecef5="">"cost":"free",</p>
                    <p data-v-15aecef5="">"dataProvider":"loginaccount",</p>
                    <p data-v-15aecef5="">"publisherOID":"2.16.886.101.20003.20082 | 數位部",</p>
                    <p data-v-15aecef5="">"publisherContactName":"秘書室林先生",</p>
                    <p data-v-15aecef5="">"publisherContactPhone":"02-23165300#XXX",</p>
                    <p data-v-15aecef5="">"publisherContactEmail":"example@ndc.gov.tw",</p>
                    <p data-v-15aecef5="">"updateFrequency":"每日",</p>
                    <p data-v-15aecef5="">"detectFrequency":"everyday",</p>
                    <p data-v-15aecef5="">"coverageStartedDate":"2014-01-01",</p>
                    <p data-v-15aecef5="">"coverageEndedDate":"2015-01-01",</p>
                    <p data-v-15aecef5="">"spatialCoverage":"A6305-0001-00",</p>
                    <p data-v-15aecef5="">"language":"zh",</p>
                    <p data-v-15aecef5="">"relatedUrl":" https://example1.gov.tw",</p>
                    <p data-v-15aecef5="">"keyword":[</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"OpenData",</p>
                      <p data-v-15aecef5="">"全部資料集"</p>
                    </div>
                    <p data-v-15aecef5="">],</p>
                    <p data-v-15aecef5="">"notes":"集中於政府資料開放平臺資料集之詮釋資料",</p>
                    <p data-v-15aecef5="">"distribution":[</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"resourceDescription":" 103 年01 月01 日開始收錄",</p>
                        <p data-v-15aecef5="">"resourceField":" 村名(name)、人口(population)",</p>
                        <p data-v-15aecef5="">"qcLevel":"/Document/definition/dataset",</p>
                        <p data-v-15aecef5="">"resourceFormat":"CSV",</p>
                        <p data-v-15aecef5="">"resourceCharacterEncoding":"UTF-8",</p>
                        <p data-v-15aecef5="">
                          "resourceDownloadUrl":"",
                        </p>
                        <p data-v-15aecef5="">"resourceFormat":"CSV",</p>
                        <p data-v-15aecef5="">"resourceAmount ":"4600",</p>
                        <p data-v-15aecef5="">"resourceNotes":"統計截止到2014 年12 月底"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">]</p>
                  </div>
                  }
                </div>
              </div>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出範例：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行成功如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":true,</p>
                      <p data-v-15aecef5="">"result":{</p>
                      <p data-v-15aecef5="" class="content-left">"datasetId":"6564"</p>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行失敗如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":false,</p>
                      <p data-v-15aecef5="">"error":{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"datasetId": "6564",</p>
                        <p data-v-15aecef5="">"error_type":"ER0051:欲修改的資料集不存在。",</p>
                        <p data-v-15aecef5="">"message":"欲修改的資料集不存在。"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
              </ol>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">備註：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  以取得資料集詮釋資料JSON
                  格式示範，有關系統自動產出之欄位不得進行修改，例如：資料集上架方式（ type ）、
                  資料品質（ dataQuality ）
                  、上架日期（publishedDate）、詮釋資料更新時間（modifiedDate）、
                  資料資源更新時間（resourceModifiedDate），無法修改。
                </li>
                <li data-v-15aecef5="">
                  輸入內容之資料集編號（identifier）為「詮釋資料提供平臺」發布資料集的資訊編號，由「詮釋資料提供平臺」自行輸入。
                </li>
                <li data-v-15aecef5="">
                  提供機關物件識別碼（publisherOID），請參考物件識別碼中心網站
                  <a
                    data-v-15aecef5=""
                    href="http://oid.nat.gov.tw/"
                    target="_blank"
                    title="另開視窗 前往 gOID網站"
                    rel="noopener noreferrer"
                    >http://oid.nat.gov.tw/</a
                  >
                  ，為提供機關物件識別碼（OID），也可為下屬機關之OID，建立後則不得再修改。
                </li>
                <li data-v-15aecef5="">
                  資料集識別碼（datasetId）為「政府資料開放平臺」系統自動產出流水號，作為識別資料集之唯一值，不得重複與修改。
                </li>
              </ol>
            </li>
          </ol>
          <div id="deletedata2" data-v-15aecef5="" class="ins-title scroll custom-font">
            下架詮釋資料(v2)
          </div>
          <ol data-v-15aecef5="">
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">使用說明：</p>
              <p data-v-15aecef5="">下架詮釋資料</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">介接網址：</p>
              <p data-v-15aecef5="">/api/v2/rest/dataset/{datasetId}</p>
              <p data-v-15aecef5="">Method=DELETE</p>
              <p data-v-15aecef5="">{datasetId}：資料集識別碼</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸入範例：</p>
              <p data-v-15aecef5="">範例1：/api/v2/rest/dataset/6564</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出範例：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行成功如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":true,</p>
                      <p data-v-15aecef5="">"result":{</p>
                      <p data-v-15aecef5="" class="content-left">"datasetId": "6564"</p>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
                <li data-v-15aecef5="">
                  <p data-v-15aecef5="">執行失敗如下所示：</p>
                  <div data-v-15aecef5="">
                    <p data-v-15aecef5="">{</p>
                    <div data-v-15aecef5="" class="content-left">
                      <p data-v-15aecef5="">"success":false,</p>
                      <p data-v-15aecef5="">"error":{</p>
                      <div data-v-15aecef5="" class="content-left">
                        <p data-v-15aecef5="">"datasetId": "6564"</p>
                        <p data-v-15aecef5="">"error_type":"ER0052:欲下架的資料集不存在。",</p>
                        <p data-v-15aecef5="">"message":"欲下架的資料集不存在。"</p>
                      </div>
                      <p data-v-15aecef5="">}</p>
                    </div>
                    <p data-v-15aecef5="">}</p>
                  </div>
                </li>
              </ol>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">輸出格式：</p>
              <p data-v-15aecef5="">JSON</p>
            </li>
            <li data-v-15aecef5="">
              <p data-v-15aecef5="">備註：</p>
              <ol data-v-15aecef5="">
                <li data-v-15aecef5="">資料集下架即為永久下架，不得再重新上架。</li>
                <li data-v-15aecef5="">
                  詮釋資料同步下架完成，即同步移除其資料集編號（identifier）。
                </li>
              </ol>
            </li>
          </ol>
        </section>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('機關發布開發指引')
const pageDescription = ref('機關發布開發指引')
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
