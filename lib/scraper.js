const request = require('./request');
const parse = require('./parse');
const store = require('./store');

setInterval(() => {
    request()
        .then(document => parse(document))
        .then(books => store(books));
}, 1000 * 60 * 15)