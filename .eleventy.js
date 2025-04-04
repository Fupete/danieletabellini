import EleventyPluginNavigation from '@11ty/eleventy-navigation';
import EleventyPluginRss from '@11ty/eleventy-plugin-rss';
import EleventyPluginSyntaxhighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';
import { EleventyI18nPlugin } from '@11ty/eleventy';
import EleventyPluginIcons from 'eleventy-plugin-icons';
import EleventyPluginOgImage from 'eleventy-plugin-og-image';
import EleventyPluginEmoji from 'eleventy-plugin-emoji';

import rollupPluginCritical from 'rollup-plugin-critical';

import filters from './utils/filters.js';
import transforms from './utils/transforms.js';
import shortcodes from './utils/shortcodes.js';
import pairedShortcodes from './utils/paired-shortcodes.js';

import path from 'path';
import fs from 'fs';

// markdown
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTocDoneRight from 'markdown-it-toc-done-right';
import markdownItFootnote from 'markdown-it-footnote';
// image gallery
import Image from '@11ty/eleventy-img';
import sharp from 'sharp';
const GALLERY_IMAGE_WIDTH = 320;
const LANDSCAPE_LIGHTBOX_IMAGE_WIDTH = 1440;
const PORTRAIT_LIGHTBOX_IMAGE_WIDTH = 720;
// others
import readingTime from 'eleventy-plugin-reading-time';

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('public');

  // plugins
  eleventyConfig.addPlugin(EleventyPluginNavigation);
  eleventyConfig.addPlugin(EleventyPluginRss);
  eleventyConfig.addPlugin(EleventyPluginSyntaxhighlight);
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en',
    errorMode: 'never'
  });
  eleventyConfig.addPlugin(EleventyPluginIcons, {
    sources: [{ name: 'privacy', path: './src/assets/icons/privacy' }],
    icon: {
      attributes: {
        fill: 'var(--textColor)'
      }
    }
  });
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(EleventyPluginOgImage, {
    // https://github.com/KiwiKilian/eleventy-plugin-og-image#readme
    outputDir: '_site/public/og-images/',
    outputFileExtension: 'png',
    satoriOptions: {
      fonts: [
        {
          name: 'Inter',
          data: fs.readFileSync('./public/assets/fonts/inter/Inter-Black.woff'),
          weight: 900,
          style: 'normal'
        },
        {
          name: 'Inter',
          data: fs.readFileSync('./public/assets/fonts/inter/Inter-Bold.woff'),
          weight: 600,
          style: 'normal'
        }
      ]
    }
  });
  eleventyConfig.addPlugin(EleventyPluginEmoji);
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: './.11ty-vite',
    viteOptions: {
      base: '/',
      publicDir: 'public',
      clearScreen: false,
      server: {
        mode: 'development',
        middlewareMode: true
      },
      appType: 'custom',
      assetsInclude: ['**/*.xml', '**/*.txt'],
      build: {
        mode: 'production',
        sourcemap: 'true',
        manifest: true,
        rollupOptions: {
          external: ['/pagefind/pagefind-ui.js'],
          output: {
            assetFileNames: (assetInfo) => {
              var info = assetInfo.name.split('.');
              var extType = info[info.length - 1];
              if (/png|avif|webp|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType))
                return `imgs/[name][extname]`;
              else return `css/[name]-[hash][extname]`;
            },
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            manualChunks: {
              PhotoSwipe: ['photoswipe'],
              PhotoSwipeLightbox: ['photoswipe/lightbox']
            }
          },
          plugins: [
            rollupPluginCritical({
              criticalUrl: './_site/',
              criticalBase: './_site/',
              criticalPages: [
                { uri: 'en/index.html', template: 'index' },
                { uri: 'it/index.html', template: 'index' }
              ],
              criticalConfig: {
                inline: true,
                strict: true,
                dimensions: [
                  {
                    height: 900,
                    width: 375
                  },
                  {
                    height: 720,
                    width: 1280
                  },
                  {
                    height: 1080,
                    width: 1920
                  }
                ],
                penthouse: {
                  forceInclude: ['.fonts-loaded-1 body', '.fonts-loaded-2 body']
                }
              }
            })
          ]
        }
      }
    }
  });

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName]);
  });

  // Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName]);
  });
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode('galleryImage', async function (src, alt) {
    let imageSrc = `./src/imgs/${this.page.fileSlug}/${src}`;
    let lightboxImageWidth = LANDSCAPE_LIGHTBOX_IMAGE_WIDTH;
    if (alt === undefined)
      throw new Error(`Missing \`alt\` on image from: ${src}`);
    let metadata = await sharp(imageSrc).metadata();
    if (metadata.height > metadata.width)
      lightboxImageWidth = PORTRAIT_LIGHTBOX_IMAGE_WIDTH;
    let genMetadata = await Image(imageSrc, {
      widths: [GALLERY_IMAGE_WIDTH, lightboxImageWidth],
      formats: ['avif', 'webp', 'jpeg'],
      urlPath: '/media/gallery/',
      outputDir: './public/media/gallery'
    });
    const imageUrl = eleventyConfig.getFilter('url')(genMetadata.jpeg[1].url);
    const imageWidth = genMetadata.jpeg[1].width;
    const imageHeight = genMetadata.jpeg[1].height;
    const thumbUrl = eleventyConfig.getFilter('url')(genMetadata.jpeg[0].url);
    return `
			<li>
				<a href="${imageUrl}" 
				data-pswp-width="${imageWidth}" 
				data-pswp-height="${imageHeight}" 
				data-cropped="true"
				target="_blank">
					<img src="${thumbUrl}" alt="${alt}"/>
				</a>
			</li>
    	`.replace(/(\r\n|\n|\r)/gm, '');
  });

  // Paired shortcodes
  Object.keys(pairedShortcodes).forEach((pairedShortcodeName) => {
    eleventyConfig.addPairedLiquidShortcode(
      pairedShortcodeName,
      pairedShortcodes[pairedShortcodeName]
    );
  });

  // Customize Markdown lib
  const markdownLibrary = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
    .use(markdownItAnchor, {
      level: [2],
      slugify: eleventyConfig.getFilter('slug')
    })
    .use(markdownItTocDoneRight, {
      containerClass: 'toc',
      containerId: 'toc',
      level: [2],
      slugify: eleventyConfig.getFilter('slug')
    })
    .use(markdownItFootnote);
  markdownLibrary.renderer.rules.footnote_block_open = () =>
    '<h2 class="visually-hidden">Note</h2>\n' +
    '<section class="footnotes">\n' +
    '<ol class="footnotes-list">\n';
  eleventyConfig.setLibrary('md', markdownLibrary);

  // Layouts
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('idea', 'idea.njk');
  eleventyConfig.addLayoutAlias('portfolio', 'portfolio.njk');

  // Copy/pass-through files
  eleventyConfig.addPassthroughCopy('./src/assets/css');
  eleventyConfig.addPassthroughCopy('./src/assets/js');

  // Localized notes
  eleventyConfig.addCollection('ideas_en', (collectionApi) => {
    return collectionApi.getFilteredByGlob('./src/en/ideas/**/*.md');
  });

  eleventyConfig.addCollection('ideas_it', (collectionApi) => {
    return collectionApi.getFilteredByGlob('./src/it/ideas/**/*.md');
  });
  // Localized design projects
  eleventyConfig.addCollection('design_en', (collectionApi) => {
    return collectionApi.getFilteredByGlob('./src/en/design/**/*.md');
  });
  eleventyConfig.addCollection('design_it', (collectionApi) => {
    return collectionApi.getFilteredByGlob('./src/it/design/**/*.md');
  });

  // Build pagefind index
  eleventyConfig.on('eleventy.after', async function ({ dir }) {
    const inputPath = dir.output;
    const outputPath = path.join(dir.output, 'pagefind');

    console.log('Creating Pagefind index of %s', inputPath);

    const pagefind = await import('pagefind');
    const { index } = await pagefind.createIndex();
    const { page_count } = await index.addDirectory({
      path: inputPath,
      glob: '**/*.{html}'
    });
    await index.writeFiles({ outputPath });

    console.log(
      'Created Pagefind index of %i pages in %s',
      page_count,
      outputPath
    );
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: 'layouts',
      data: '_data'
    }
  };
}
