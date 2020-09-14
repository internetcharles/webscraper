const request = require('./request');

describe('request function', () => {
    it('makes request to books site and returns a promise that resolves with a document', async () => {
        const document = await request();
    })
})