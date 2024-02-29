<template>
  <Html lang="zh-Hant-TW" dir="ltr">
    <Meta charse="utf-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta hid="keywords" name="keywords" content="open data" />
    <Meta name="author" content="Ministry of Digital Affairs" />
    <Meta name="copyright" content="copyright" />
    <Meta name="format-detection" content="telephone=no" />
    <Meta hid="description" name="description" :content="runtimeConfig.public.websiteDescription" />
    <Meta hid="og:url" property="og:url" :content="runtimeConfig.public.baseUrl" />
    <Meta hid="og:title" property="og:title" content="runtimeConfig.public.websiteName" />
    <Meta
      hid="og:description"
      property="og:description"
      :content="runtimeConfig.public.websiteDescription"
    />
    <Meta
      hid="og:image"
      property="og:image"
      :content="runtimeConfig.public.baseUrl + '/images/social-media.png'"
    />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta hid="twitter:url" name="twitter:url" :content="runtimeConfig.public.baseUrl" />
    <Meta hid="twitter:title" name="twitter:title" :content="runtimeConfig.public.websiteName" />
    <Meta
      hid="twitter:description"
      name="twitter:description"
      :content="runtimeConfig.public.websiteDescription"
    />
    <Meta
      hid="twitter:image"
      name="twitter:image"
      :content="runtimeConfig.public.baseUrl + '/images/social-media.png'"
    />
    <Meta name="mobile-web-app-capable" content="yes" />
    <Meta name="apple-touch-fullscreen" content="yes" />
    <Meta name="apple-mobile-web-app-title" :content="runtimeConfig.public.websiteName" />
    <Meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <Link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <!-- <Link rel="apple-touch-icon-precomposed" data-res="32x32" href="/favicon-32.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" data-res="128x128" href="/favicon-128.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" data-res="152x152" href="/favicon-152.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" data-res="167x167" href="/favicon-167.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" data-res="180x180" href="/favicon-180.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" data-res="192x192" href="/favicon-192.ico" /> -->
    <!-- <Link rel="apple-touch-icon-precomposed" data-res="196x196" href="/favicon-196.ico" /> -->

    <!-- https://github.com/elegantapp/pwa-asset-generator/issues/71 -->
    <!-- Deprecated media feature device-width -->
    <!-- <Link
    rel="apple-touch-startup-image"
    href="/images/splash/splash-640x1136.png"
    media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  /> -->
    <!-- <Link
    rel="apple-touch-startup-image"
    href="/images/splash/splash-750x1334.png"
    media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
  /> -->
    <!-- <Link
    rel="apple-touch-startup-image"
    href="/images/splash/splash-1125x2436.png"
    media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
  /> -->
    <!-- <Link
    rel="apple-touch-startup-image"
    href="/images/splash/splash-1242x2208.png"
    media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
  /> -->

    <!-- https://github.com/nuxt/nuxt/issues/19752 -->
    <!-- Nuxt3  I don't think there's anything Nuxt can action related to this issue -->

    <Body class="wrapper">
      <div class="layout">
        <noscript class="noscript">
          您的瀏覽器不支援 JavaScript 功能，若網頁功能無法正常使用時，請開啟瀏覽器 JavaScript 狀態。
          Your browser does not support JavaScript!
        </noscript>
        <TheHeader />
        <slot />
        <TheFooter />
      </div>
      <el-backtop :right="32" :bottom="120">
        <span class="visually-hidden">回頂端</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc. -->
          <path
            d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
          />
        </svg>
      </el-backtop>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} ｜ ${runtimeConfig.public.websiteName}`
      : `${runtimeConfig.public.websiteName}`
  }
})

const { scrollToTop, scrollDistance } = useScrollToTop()
</script>

<style>
@import url('@/assets/css/style.css');
</style>
