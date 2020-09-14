const pool = require('../utils/pool');

class Book {
    id;
    title;
    price;
    rating;
    inStock; 
    coverImg;

    constructor(row) {
        this.id = row.id;
        this.title = row.title;
        this.price = row.price;
        this.rating = row.rating;
        this.inStock = row.in_stock;
        this.coverImg = row.cover_img;
    }

    static async insert(book) {
        const { rows } = await pool.query(
            'INSERT INTO books (title, price, rating, in_stock, cover_img) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [book.title, book.price, book.rating, book.in_stock, book.cover_img]
        );

        return new Book(rows[0]);
    }
}

module.exports = Book;