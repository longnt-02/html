export function renderProduct(props) {
    const { productlist, products } = props;
    const htmls = products.map((product) => {
        return `
        <div class="card-item">
                <a href="#">
                    <img src=${product.img} alt="" class="card-item__img">
                </a>
            <div class="card-item__content">
                <h3 class="card-item-content__name">
                    <a href="#">${product.name}</a>
                </h3>
            <div class="card-item-content__price">
                <span>${product.price}₫</span>${product.newPrice}₫
            </div>
        </div>
        <div class="card-item__btn">
            <button>Mua ngay</button>
        </div>
        <div class="card-item__sale">-${product.sale}%</div>
    </div>
        `;
    });
    productlist.innerHTML = htmls.join('');
}

export function renderNews(props) {
    const { newsList, news } = props;
    const htmls = news.map((news) => {
        return `
        <div class="news-item">
            <a href="#">
                <img class="news-item__img" src="${news.img}" alt="">
            </a>
                <div class="news-item-content">
                    <h3 class="news-item-content__title">
                          ${news.title}
                     </h3>
                        <span class="news-item-content__times">${news.date}</span>
                    <div class="news-item-content__hr"></div>
                        <p class="news-item-content__desc">${news.desc}</p>
                </div>
        </div>
        `
    })

    newsList.innerHTML = htmls.join('');
}