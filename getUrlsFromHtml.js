const { JSDOM } = require('jsdom');

function getUrlsFromHtml(html, baseUrl) {
    const urls = [];
    const dom = new JSDOM(html);
    const aElements = dom.window.document.querySelectorAll('a');
    for (let el of aElements) {
        if (el.href.slice(0, 1) === '/') {
            try {
                urls.push(new URL(el.href, baseUrl).href);
            } catch (err) {
                console.log(`${err.message}: ${el.href}`);
            }
        } else {
            try {
                urls.push(new URL(el.href).href);
            } catch (err) {
                console.log(`${err.message}: ${el.href}`);
            }
        }
    }
    return urls;
}

module.exports = { getUrlsFromHtml };
