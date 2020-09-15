const fs = require('fs');
const pool = require('../lib/utils/pool');
const store = require('../lib/store');

describe('store function', () => {
    beforeEach(() => {
        return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
    });

    it('takes an array of books and stores them in the db', async() => {
        const books = [
        { title: "Book One", price: "$5", in_stock: true, rating: "5 stars", cover_img: "bee.jpg" },
        { title: "Book Two", price: "$5", in_stock: true, rating: "5 stars", cover_img: "bee.jpg" },
        { title: "Book Three", price: "$5", in_stock: true, rating: "5 stars", cover_img: "bee.jpg" }
        ];

        await store(books);

        const { rows } = await pool.query('SELECT * FROM books');

        expect(rows).toHaveLength(3)
        
    })
})