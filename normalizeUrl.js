function normalizeUrl(string) {
    const { host, pathname } = new URL(string);
    let fullPath = `${host}${pathname}`;
    if (fullPath.length > 0 && fullPath.slice(-1) === '/') {
        return fullPath.slice(0, -1);
    } else {
        return fullPath;
    }
}

module.exports = {
    normalizeUrl,
};
