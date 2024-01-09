//import '/assets/css/main.scss'

// Focus Visible Polyfill
import 'focus-visible'

// Speedlify score
import 'speedlify-score'
// import '@11ty/eleventy-cache-assets'

// // Internal Modules
// import './modules/nav'
import './modules/speedlify.js'

// pagefind-ui
import '../../_pagefind/pagefind-ui.js'
// const initSearch = () => {
//     new PagefindUI({
//         element: '#search',
//         showImages: true,
//         bundlePath: "/_pagefind/" // "/danieletabellini/_pagefind/"
//     })
//     const inputSearch = document.querySelector("input")
//     inputSearch.setAttribute("id", "site-search")
// }
// const isHome = document.querySelector('.home')
// if (isHome) initSearch()

// photoswipe
import PhotoSwipe from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
const galleries = document.querySelectorAll('.gallery')
galleries.forEach(galleryX => {
    const lightbox = new PhotoSwipeLightbox({
        zoomSVG: "",
        zoom: false,
        closeSVG: "",
        arrowPrevSVG: "",
        arrowNextSVG: "",
        gallery: galleryX,
        children: 'a',
        showHideAnimationType: 'zoom',
        pswpModule: PhotoSwipe,
        bgOpacity: 0.9,
        preload: [1, 1],
        padding: { top: 48, bottom: 48, left: 16, right: 16 },
    });
    lightbox.init();
})


// // arrow icon left
// <svg version="1.1" id="ios7_x5F_arrows_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}</style><g id="_x33__1_"><path d="m68.4 33.5-3.8 3.8L89.2 62H24.1v5.3h64.3l-23.8 24 3.8 3.8 30.7-30.8-.1-.1.1-.1-30.7-30.6zM64.1 0C28.8 0 .2 28.7.2 64s28.6 64 63.9 64S128 99.3 128 64c-.1-35.3-28.7-64-63.9-64zm0 122.7C31.7 122.7 5.5 96.4 5.5 64c0-32.4 26.2-58.7 58.6-58.7 32.3 0 58.6 26.3 58.6 58.7-.1 32.4-26.3 58.7-58.6 58.7z" id="icon_36_"/></g></svg>

// // arrow icon right
// <svg version="1.1" id="ios7_x5F_arrows_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}</style><g id="_x32__1_"><path d="m64 37-3.8-3.8L29.5 64l30.7 30.8L64 91 39.8 66.7H104v-5.3H39.8L64 37zm.1-37C28.8 0 .2 28.7.2 64s28.6 64 63.9 64S128 99.3 128 64c-.1-35.3-28.7-64-63.9-64zm0 122.7C31.7 122.7 5.5 96.4 5.5 64c0-32.4 26.2-58.7 58.6-58.7s58.6 26.3 58.6 58.7c-.1 32.4-26.3 58.7-58.6 58.7z" id="icon_37_"/></g></svg>