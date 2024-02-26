# 政府資料開放平臺後臺前端

## 簡介

本專案為[政府資料開放平臺](https://data.gov.tw)的後臺的開源程式碼，本專案開源的目的在於提供政府機關或民間團體，作為開發政府資料開放平臺後臺的參考，並歡迎各界參與開發，一起為開放資料盡一份心力。

本平臺採用[Vue.js](https://vuejs.org/)框架開發，開發語言則使用了[TypeScript](https://www.typescriptlang.org/)，並以[element-plus](https://element-plus.org/)作為 UI 框架。

## 開發環境&安裝

本專案開發環境和本專案主要有用到的套件如下：

- [Node.js](https://nodejs.org/en/) v20.0.0 以上
- [TypeScript](https://www.typescriptlang.org/) v5.0.0 以上
- [Element-plus](https://element-plus.org/) v1.0.0 以上

建議使用 vscode 作為開發工具，並能安裝 vue 相關套件來做輔助。

### 安裝

git clone 下來後，新增 `.env` 檔案(內容可參考 `.env.example`)，`.env` 中可設定目前的環境變數，

VITE_ENVIRONMENT 為使用者目前的環境階段，預設為 development，

VITE_WEB_URL 和 VITE_API_URL 則能設定後台的網址和API的呼叫網址，

WEBSITE_NAME 和 WEBSITE_DESCRIPTION 則是設定網站的名稱和網站的描述。

然後於專案目錄下執行以下指令：

```bash
npm install
npm run dev
```

## 專案說明

本專案的主要目錄結構如下：

assets - 放置圖片、CSS樣式表等

components - 放置 Vue 元件

views - 放置頁面

public - 放置公開的靜態資源，如favicon.ico

## License

This project is licensed under the [MIT](https://gitlab.blueplanet.com.tw/RD/moda-opensource/-/blob/main/backstage/LICENSE) License - see the LICENSE.md file for details

本專案有使用到的套件:
| Name | License | Description |
| ---- | ------- | ----------- |
| Vue.js | MIT | 本專案使用的前端框架
| Pinia | MIT | 於 Vue 專案中的狀態管理工具
| TypeScript | Apache-2.0 | 本專案使用的程式語言
| Vue router | MIT | 讓Vue建立SPA和路徑的跳轉
| element-plus | MIT | 本專案使用的Vue UI framework
| eslint | MIT | 檢查並改善專案中的程式碼撰寫方式
| prettier | MIT | 檢查並改善專案中的程式碼排版和顯示
