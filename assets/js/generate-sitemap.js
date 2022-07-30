/* const SitemapGenerator = require('sitemap-generator'); */
import SitemapGenerator from 'sitemap-generator';

// create generator
const generator = SitemapGenerator('https://www.safetycontrolperu.com', {
  filepath: './out/sitemap.xml',
  stripQuerystring: false,
  lastMod: true,
  priorityMap: [1.0, 0.8, 0.6, 0.4, 0.2, 0]
});

// register event listeners
generator.on('done', () => {
  // sitemaps created
});

// start the crawler
generator.start();