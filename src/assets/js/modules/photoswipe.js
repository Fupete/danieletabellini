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