const { describe, test, expect } = require('@jest/globals');
const { normalizeUrl } = require('./normalizeUrl.js');

describe('Normalize URL function test', () => {
    test('https with trailing slash', () => {
        expect(normalizeUrl('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
    });
    test('https with no trailing slash', () => {
        expect(normalizeUrl('https://blog.boot.dev/path')).toBe('blog.boot.dev/path');
    });
    test('http with trailing slash', () => {
        expect(normalizeUrl('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path');
    });
    test('http with no trailing slash', () => {
        expect(normalizeUrl('http://blog.boot.dev/path')).toBe('blog.boot.dev/path');
    });
    test('https with no path', () => {
        expect(normalizeUrl('https://blog.boot.dev/')).toBe('blog.boot.dev');
    });
    test('Empty string', () => {
        expect(() => normalizeUrl('')).toThrow();
    });
    test('Invalid URL string', () => {
        expect(() => normalizeUrl('this is not an url')).toThrow();
    });
});
