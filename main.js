const { crawlPage } = require("./crawl.js");
const { printReport } = require("./report.js");

async function main() {
  if (process.argv.length < 3) {
    console.log("no website provided");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("too many command line args");
    process.exit(1);
  }

  let baseURL = process.argv[2];

  // Remove forward slash from end of URL if it exists
  if (baseURL.slice(-1) === "/") {
    baseURL = baseURL.slice(0, -1);
  }

  console.log(`start crawling of ${baseURL}`);
  const pages = await crawlPage(baseURL, baseURL, {});

  printReport(pages);
}

main();
