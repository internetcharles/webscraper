const request = require('../lib/request');
const parse = require('../lib/parse');

describe('parse function', () => {
    it('returns book objects from the document', async () => {
        document = await request(1);

        const books = parse(document);

        expect(books).toEqual(expect.arrayContaining([
            {title: expect.any(String),
            cover_img: expect.any(String),
            rating: expect.any(String),
            price: expect.any(String),
            in_stock: true}
        ]))
    })
}) 