const request = require('./request');
const parse = require('./parse');

describe('parse function', () => {
    it('returns book objects from the document', async () => {
        document = await request();

        const books = parse(document);

        expect(books).toEqual(expect.arrayContaining([
            {title: expect.any(String),
            cover_image: expect.any(String),
            rating: expect.any(String),
            price: expect.any(String),
            in_stock: expect.any(Boolean)}
        ]))
    })
})