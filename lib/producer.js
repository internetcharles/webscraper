const { taskQueue } = require('./queue');

Promise.all([...Array(10)]
    .map((_, i) => taskQueue.add({ page: i + 1 })))
    .then(() => console.log('Pages added to queue'));