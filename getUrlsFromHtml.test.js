const { describe, test, expect } = require('@jest/globals');
const { getUrlsFromHtml } = require('./getUrlsFromHtml.js');

describe('Get URLs from HTML function test', () => {
    test('Absolute path', () => {
        const inputURL = 'https://blog.boot.dev';
        const inputBody =
            '<html><body><a href="https://blog.boot.dev"><span>Boot.dev></span></a></body></html>';
        const actual = getUrlsFromHtml(inputBody, inputURL);
        const expected = ['https://blog.boot.dev/'];
        expect(actual).toEqual(expected);
    });

    test('Relative path', () => {
        const inputURL = 'https://blog.boot.dev';
        const inputBody =
            '<html><body><a href="/path/one"><span>Boot.dev></span></a></body></html>';
        const actual = getUrlsFromHtml(inputBody, inputURL);
        const expected = ['https://blog.boot.dev/path/one'];
        expect(actual).toEqual(expected);
    });

    test('Absolute and relative', () => {
        const inputURL = 'https://blog.boot.dev';
        const inputBody =
            '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>';
        const actual = getUrlsFromHtml(inputBody, inputURL);
        const expected = ['https://blog.boot.dev/path/one', 'https://other.com/path/one'];
        expect(actual).toEqual(expected);
    });

    test('Invalid paths', () => {
        const inputURL = 'https://blog.boot.dev';
        const inputBody = '<html><body><a href="path/one"><span>Boot.dev></span></a></body></html>';
        const actual = getUrlsFromHtml(inputBody, inputURL);
        const expected = [];
        expect(actual).toEqual(expected);
    });
});
