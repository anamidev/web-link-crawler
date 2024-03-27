function report(pages) {
    const sortedPages = Object.keys(pages).sort((a, b) => pages[b] - pages[a]);
    console.log('\n=== Result report ===\n');
    for (let page of sortedPages) {
        console.log(`Found ${pages[page]} internal links to ${page}`);
    }
    console.log('\n=== End of report ===\n');
}

module.exports = { report };
