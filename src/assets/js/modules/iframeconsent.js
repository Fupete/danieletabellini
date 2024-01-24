const im = iframemanager()

im.run({
	currLang: document.documentElement.lang,
	services: {
		youtube: {
			embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}',
			thumbnailUrl: 'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg',
			iframe: {
				allow:
					'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
			},
			languages: {
				en: {
					notice:
						'Accept YouTube cookies to play the video.<br />Learn more about the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms">terms and conditions of youtube.com</a>',
					loadBtn: 'Accept and load'
					// loadAllBtn: "Remember for all videos"
				},
				it: {
					notice:
						'Accetta i cookie di Youtube per riprodurre il video.<br />Scopri di più sui <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms">termini e le condizioni di youtube.com</a>',
					loadBtn: 'Accetta e carica'
					// loadAllBtn: "Ricorda per tutti i video"
				}
			}
		}
	}
})

im.rejectService('all')
