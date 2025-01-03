﻿# Generalised-Ecommerce-Crawler

This application uses Puppeteer to scrape product URLs from multiple e-commerce websites. It is designed to extract relevant product links dynamically while respecting site structure and avoiding detection as a bot.

🚀 Features
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🌐 Dynamic content handling with infinite scrolling.

🛒 Supports multiple e-commerce platforms.

🎯 Filters URLs to retrieve only product-related links.

📂 Saves extracted URLs in JSON format.

🕵️ Implements Puppeteer stealth mode to bypass bot detection mechanisms.

🧰 Modules and Libraries Used

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. Puppeteer

  Puppeteer is a Node.js library that provides a high-level API to control Chrome or Chromium browsers. It is used for web scraping and automation.

  Key Methods Used:

  puppeteer.launch():  Launches a browser instance.

  page.goto():   Navigates to a URL.

  page.evaluate():   Executes JavaScript in the browser context.

  page.close():   Closes the page instance.
  
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. puppeteer-extra and puppeteer-extra-plugin-stealth

  puppeteer-extra is a wrapper around Puppeteer that allows the use of plugins.

  puppeteer-extra-plugin-stealth helps bypass detection mechanisms implemented by websites to block bots.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3. Node.js Built-in Modules

  fs (File System): Used to write the extracted product URLs to a JSON file.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
⚙️ Installation and Setup

  Prerequisites:
  Install Node.js (v16 or higher recommended).
  Install npm (comes with Node.js).

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Steps to Run the Application :

  Clone the repository or download the script:
  git clone https://github.com/your-username/puppeteer-ecommerce-scraper.git
  cd puppeteer-ecommerce-scraper

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Install the required dependencies:
  npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth

Run the application:
  node script.js

Check the output:
  The extracted URLs will be saved in a file named multi_ecommerce_product_urls.json in the same directory.




Stealth Mode:

Employ the puppeteer-extra-plugin-stealth plugin to bypass anti-bot mechanisms.

Example URL Filters

For Amazon: Look for URLs containing /dp/ or /gp/.

Additional domain-specific patterns can be added to improve the filtering logic.
