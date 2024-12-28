const puppeteer = require('puppeteer');
const fs = require('fs');

// Configuration for multiple e-commerce websites without using product selector
const searchWebsites = [
  {
    name: 'Amazon',
    url: 'https://www.amazon.com/s?k=laptops'
  }
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  let allProductLinks = [];

  for (const website of searchWebsites) {
    console.log(`Crawling ${website.name}: ${website.url}`);

    try {
      // Navigate to the search URL
      await page.goto(website.url, { waitUntil: 'networkidle2' });

      // Extract all anchor URLs
      const productLinks = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a'));
        const result = [];
      
        links.forEach(link => {
          const href = link.href;
          if (href && href.includes('http') && (href.includes('amazon') || href.includes('ebay') || href.includes('walmart'))) {
            result.push(href);
          }
        });
      
        return result;
      });
      

      console.log(`Found ${productLinks.length} product URLs on ${website.name}`);

      // Add to the overall list
      allProductLinks = allProductLinks.concat(productLinks);
    } catch (error) {
      console.error(`Error occurred while crawling ${website.name}:`, error);
    }
  }

  // Save all product links to a file
  fs.writeFileSync('multi_ecommerce_product_urls.txt', allProductLinks.join('\n'), 'utf-8');

  console.log('All product URLs saved to multi_ecommerce_product_urls.txt');

  await browser.close();
})();
