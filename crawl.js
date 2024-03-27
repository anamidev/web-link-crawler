const { normalizeUrl } = require('./normalizeUrl.js');
const { getUrlsFromHtml } = require('./getUrlsFromHtml.js');

async function crawlPage(baseUrl, currentUrl, pages) {
    const currentUrlObj = new URL(currentUrl);
    const baseUrlObj = new URL(baseUrl);
    if (currentUrlObj.hostname !== baseUrlObj.hostname) {
        return pages;
    }

    const normalizedURL = normalizeUrl(currentUrl);
    if (pages[normalizedURL] > 0) {
        pages[normalizedURL]++;
        return pages;
    }
    pages[normalizedURL] = 1;

    console.log(`Crawling page: ${currentUrl}`);
    let html = '';
    try {
        const response = await fetch(baseUrl);
        if (response.status > 399) {
            console.log(`Unable to fetch HTML. Status code: ${response.status}`);
        } else if (!response.headers.get('content-type').includes('text/html')) {
            console.log(
                `Invalid content-type returned. Content-Type: ${response.headers.get(
                    'content-type'
                )}`
            );
        } else {
            html = await response.text();
        }
    } catch (e) {
        console.log(e);
    }

    const nextUrls = getUrlsFromHtml(html, baseUrl);
    for (const nextUrl of nextUrls) {
        pages = await crawlPage(baseUrl, nextUrl, pages);
    }
    return pages;
}

module.exports = { crawlPage };
