const parse = document => {
    const bookTitles = [...document.querySelectorAll('ol > li > article')];

    return bookTitles.flatMap(item => {
        const titles = [...item.querySelectorAll('h3 > a')]
            .map(title => title.textContent);

        const coverImg = [...item.querySelectorAll('a > img')]
            .map(img => img.getAttribute('src'));

        const ratings = [...item.querySelectorAll('article > p')]
            .map(rating => rating.getAttribute('class').split(' ')[1]);

        const prices = [...item.querySelectorAll('.price_color')]
            .map(price => price.textContent);

        const inStock = [...item.querySelectorAll('.instock')]
            .map(stock => stock.textContent.includes('In stock') ? true : false )
        
            return {title: titles,
                cover_image: coverImg,
                rating: ratings,
                price: prices,
                in_stock: inStock
            }
    });
    };

module.exports = parse;