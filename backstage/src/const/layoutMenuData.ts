interface childrenType {
  title: string,
  path: string
}
export interface menuDataType {
  title: string,
  path?: string,
  children: childrenType[] 
}

export const layoutMenuData = [
  {
    title: '單欄頁面',
    children: [
      {
        title: '文章頁面',
        path: '/layout/single-article'
      },
      {
        title: '表單頁面',
        path: '/layout/single-form'
      }
    ]
  },
  {
    title: '雙欄頁面',
    children: [
      {
        title: '主要畫面在右',
        path: '/layout/two-cols-right-main'
      },
      {
        title: '主要畫面在左',
        path: '/layout/two-cols-left-main'
      },
    ]
  }
]