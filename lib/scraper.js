const request = require('./request');
const parse = require('./parse');
const store = require('./store');
const pool = require('./utils/pool');

module.exports = job => {
    console.log(`Scraping page ${job.data.page}!`);
    return request(job.data.page)
        .then(parse)
        .then(store)
        .finally(() => pool.end());
};