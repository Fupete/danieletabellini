const Image = require('@11ty/eleventy-img');

module.exports = {
  image: async function (
    src,
    alt,
    sizes = '100vw',
    widths = [320, 640, 1280, 1920],
    loadingMode = 'lazy'
  ) {
    let imageSrc;
    const fileSlug = this.page.fileSlug;
    if (
      fileSlug !== 'en' &&
      fileSlug !== 'it' &&
      fileSlug !== 'ideas' &&
      fileSlug !== 'tags'
    )
      imageSrc = `./src/imgs/${fileSlug}/${src}`;
    else imageSrc = `./src/imgs/${src}`; // home + ideas
    if (alt === undefined)
      throw new Error(`Missing \`alt\` on image from: ${src}`);

    const metadata = await Image(imageSrc, {
      widths: widths,
      formats: ['avif', 'webp', 'jpeg'],
      urlPath: '/imgs/',
      outputDir: './_site/imgs/'
    });

    const attributes = {
      alt,
      sizes,
      loading: loadingMode,
      decoding: 'auto'
    };

    return Image.generateHTML(metadata, attributes);
  }
};
