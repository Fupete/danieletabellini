const Image = require("@11ty/eleventy-img")
const path = require('path')

module.exports = {

	image: async function (src, alt, sizes = '100vw', widths = [320, 640, 1280, 1920], loadingMode = "lazy", animated = false) {
		let imageSrc
		const fileSlug = this.page.fileSlug
		if (fileSlug !== 'en' && fileSlug !== 'it' && fileSlug !== 'ideas' && fileSlug !== 'tags')
			imageSrc = `./src/imgs/${fileSlug}/${src}`
		else
			imageSrc = `./src/imgs/${src}` // home + ideas
		if (alt === undefined) throw new Error(`Missing \`alt\` on image from: ${src}`)

		let imageAttributes = {
			alt,
			sizes,
			loading: loadingMode,
			decoding: "auto",
		};

		const metadata = await Image(imageSrc, {
			widths: widths,
			formats: animated ? ["gif"] : ["avif", "webp", "jpeg"],
			urlPath: "/imgs/",
			outputDir: "./_site/imgs/",
			sharpOptions: animated ? { animated: true, limitInputPixels: false } : {},
		})

		let realHeight = 0 // animated gif hack https://github.com/11ty/eleventy-img/issues/203
		if (animated) {
			let static_gif_metadata = await Image(imageSrc, {
				widths: widths,
				formats: ["auto"],
				urlPath: "/imgs/",
				outputDir: "./_site/imgs/",
			});
			realHeight = Image.generateObject(static_gif_metadata, imageAttributes).img.height;
		}

		let output = Image.generateHTML(metadata, imageAttributes)

		if (animated) {
			const height_regex = /height="\d*/;
			output = output.replace(height_regex, 'height="' + realHeight);
		}

		return output
	}

}
