# ecommerce-crawler

Puppeteer E-commerce Scraper

This application uses Puppeteer to scrape product URLs from multiple e-commerce websites. It is designed to extract relevant product links dynamically while respecting site structure and avoiding detection as a bot.

🚀 Features :
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
🌐 Dynamic content handling with infinite scrolling.

🛒 Supports multiple e-commerce platforms.

🎯 Filters URLs to retrieve only product-related links.

📂 Saves extracted URLs in JSON format.

🕵️ Implements Puppeteer stealth mode to bypass bot detection mechanisms.

🧰 Modules and Libraries Used

1. Puppeteer

    Puppeteer is a Node.js library that provides a high-level API to control Chrome or Chromium browsers. It is used for web scraping and automation.

Key Methods Used:
-------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. puppeteer.launch(): Launches a browser instance.

2. page.goto(): Navigates to a URL.

3. page.evaluate(): Executes JavaScript in the browser context.

4. page.close(): Closes the page instance.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
2. puppeteer-extra and puppeteer-extra-plugin-stealth

   puppeteer-extra is a wrapper around Puppeteer that allows the use of plugins.

   puppeteer-extra-plugin-stealth helps bypass detection mechanisms implemented by websites to block bots.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
3. Node.js Built-in Modules

   fs (File System): Used to write the extracted product URLs to a JSON file.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
⚙️ Installation and Setup

Prerequisites

1.Install Node.js (v16 or higher recommended).

2.Install npm (comes with Node.js).

Steps to Run the Application
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
Clone the repository or download the script:

  git clone https://github.com/your-username/puppeteer-ecommerce-scraper.git
  cd puppeteer-ecommerce-scraper

Install the required dependencies:
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
  npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth

Run the application:
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
  node script.js

Check the output:
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
The extracted URLs will be saved in a file named multi_ecommerce_product_urls.json in the same directory.

🔍 Implementation Details
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
Code Workflow
Initialization:
  Launch a headless browser instance.

Open a new page in the browser.

Iterating Over Websites:
  For each website in the searchWebsites array, navigate to its URL.

Dynamic Scrolling:
  Simulate scrolling to load all dynamically generated content (if any).

Extracting Links:
  Use document.querySelectorAll('a') to select all anchor tags on the page.
  Filter links to retain only product-related URLs based on domain-specific patterns.

Saving Data:
  Combine all extracted URLs and save them to a JSON file.
