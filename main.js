const { argv } = require('node:process');
const { crawlPage } = require('./crawl.js');
const { report } = require('./report.js');

async function main() {
    if (argv.length < 3) {
        console.log('Invalid amount of arguments: expected 1, received 0');
    } else if (argv.length > 3) {
        console.log('Invalid amount of agruments: expected 1, received 2 or more');
    } else {
        const baseUrl = argv[2];
        console.log(`Starting web crawler on URL: ${baseUrl}`);
        const pages = await crawlPage(baseUrl, baseUrl, {});
        report(pages);
    }
}

main();
