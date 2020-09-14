const parse = document => {
    const bookTitles = [...document.querySelectorAll('ol > li > article')];

    return bookTitles.flatMap(item => {
        const titles = [...item.querySelectorAll('h3 > a')]
            .map(title => title.textContent);

        const coverImg = [...item.querySelectorAll('a > img')]
            .map(img => img.getAttribute('src'));

        const ratings = [...item.querySelectorAll('article > p')]
            .map(rating => rating.getAttribute('class').split(' ')[1]);

        const price = [...item.querySelectorAll('')]


            
        
            return {title: titles,
                cover_image: coverImg,
                rating: ratings,
            }
    });
    };

module.exports = parse;