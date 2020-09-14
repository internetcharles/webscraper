const request = require('./request');

describe('request function', () => {
    it('makes request to books site and returns a promise that resolves with an h1', async () => {
        const document = await request();
        expect(document.querySelector('h1').textContent)
            .toContain('All products');
    })
})