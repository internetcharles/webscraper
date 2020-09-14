const parse = document => {
    const bookTitles = [...document.querySelectorAll('ol > li > article')];

    return bookTitles.flatMap(item => {
        const titles = item.querySelector('h3 > a')

        const coverImg = item.querySelector('a > img')

        const ratings = item.querySelector('article > p')

        const prices = item.querySelector('.price_color')

        const inStock = item.querySelector('.instock')
        
            return {title: titles.textContent,
                cover_image: coverImg.getAttribute('src'),
                rating: ratings.getAttribute('class').split(' ')[1],
                price: prices.textContent,
                in_stock: Object.values(inStock).includes('In stock') ? true : false
            }
    });
    };

module.exports = parse;