// Focus Visible Polyfill
import 'focus-visible'

// Speedlify score
import 'speedlify-score'

// // Internal Modules
// import './modules/nav'

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
