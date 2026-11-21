import { DateTime } from 'luxon';

export default {
  dateToFormat: function (date, format) {
    return DateTime.fromJSDate(date, { zone: 'utc' })
      .setLocale(this.page.lang)
      .toFormat(String(format));
  },

  dateToISO: function (date) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
      includeOffset: false,
      suppressMilliseconds: true
    });
  },

  obfuscate: function (str) {
    const chars = [];
    for (var i = str.length - 1; i >= 0; i--) {
      chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }
    return chars.join('');
  },

  filterTagList: function (tags) {
    return (tags || []).filter(
      (tag) => ['all', 'nav', 'idea', 'ideas', 'projects'].indexOf(tag) === -1
    );
  },

  sortObjectByKey: function (collection) {
    const entries = Object.entries(collection);
    const toReturn = entries.sort((entry1, entry2) => {
      if (entry1[0] <= entry2[0]) return -1;
      else return 1;
    });
    return toReturn;
  },

  // locale_links riconosce le traduzioni dal file sorgente: per un template
  // paginato (le pagine dei tag) restituisce tutte le sue pagine, in tutte e
  // due le lingue. Qui si tengono solo le altre lingue e, se una lingua ha più
  // di un link, solo quello con lo stesso percorso dopo il prefisso di lingua.
  alternateLinks: function (links, url, lang) {
    if (typeof url !== 'string') return []; // bozze: permalink false
    const resto = (u, l) => u.replace(new RegExp(`^/${l}/`), '/');
    const qui = resto(url, lang);
    const perLingua = {};
    for (const link of links || []) {
      if (link.lang === lang) continue;
      (perLingua[link.lang] ||= []).push(link);
    }
    return Object.values(perLingua).flatMap((gruppo) =>
      gruppo.length === 1
        ? gruppo
        : gruppo.filter((link) => resto(link.url, link.lang) === qui)
    );
  }
};
