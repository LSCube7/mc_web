import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "张江集团苏维埃张军杰公社",
  description: "张江集团的服务器",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '简介', link: '/introduction' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '服务器介绍', link: '/introduction' },
          { text: '加入我们', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=LclA1Vs4HpBWvJ2Rg-y-IxNOOoCoWasM&authKey=RppmJRomcrlan1BN1hcj2KGpfHOzCGkuSyl%2B4Lkp%2F31LVz%2FBC%2BIg2OroWtMttnK2&noverify=0&group_code=169482744'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LSCube7/mc_web' }
    ]
  },
})
