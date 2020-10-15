class ProductList {
  #goods;
  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this.#render();
  }

  _fetchGoods() {
    //как будто запрашивает информацию, но на самом деле пока нет.
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }
}
class ProductItem {
  constructor(product, img='http://unsplash.it/150/150?random&gravity=center') { 

    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;  //картинка= заглушка
  }

  getGoodHTML() {
    //создаем готовый блок
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} &pound;</p>
                  <button class="by-btn">Добавить в корзину</button>
              </div>
            </div>`;
  }
}

const list = new ProductList();


//const products = [
//  {id: 1, title: 'Notebook', price: 20000},
//  {id: 2, title: 'Mouse', price: 1500},
//  {id: 3, title: 'Keyboard', price: 5000},
//  {id: 4, title: 'Gamepad', price: 4500},
//];
//
//const renderProduct = (title, price, img = 'http://unsplash.it/150/150?random&gravity=center') => {
//  return `<div class="product-item">
//            <img class="img-item" src="${img}" alt="">
//            <h3>${title}</h3>
//            <p>${price} &pound;</p>
//            <button class="by-btn">Добавить в корзину</button>
//          </div>`;
//};
//
//const renderProducts = (list) => {
//  const productList = list.map(item => renderProduct(item.title, item.price));
//  document.querySelector('.products').innerHTML = productList.join('');
//};
//
//renderProducts(products);
