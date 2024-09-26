// generated pagefind UI
import '/pagefind/pagefind-ui.js'; // xxx doesn't work on 1st build

const initSearch = () => {
  /* global PagefindUI */
  /* eslint no-undef: "error"*/
  new PagefindUI({
    element: '#searchBox',
    showImages: true,
    showEmptyFilters: true,
    bundlePath: '/pagefind/'
  });
  const inputSearch = document.querySelector('input');
  inputSearch.setAttribute('id', 'site-search');
};
const isHome = document.querySelector('.home');
if (isHome) initSearch();
