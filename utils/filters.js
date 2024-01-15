const { DateTime } = require('luxon')

module.exports = {
    dateToFormat: function (date, format) {
        return formattedDate = DateTime.fromJSDate(date, { zone: 'utc' }).setLocale(
            this.page.lang
        ).toFormat(
            String(format)
        )
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    obfuscate: function (str) {
        const chars = []
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
        }
        return chars.join('')
    },

    filterTagList: function (tags) {
        return (tags || []).filter(tag => ["all", "nav", "idea", "ideas"].indexOf(tag) === -1);
    },

    sortObjectByKey: function (collection) {
        const entries = Object.entries(collection);
        const toReturn = entries.sort((entry1, entry2) => {
            if (entry1[0] <= entry2[0]) return -1;
            else return 1;
        });
        return toReturn;
    }

}
