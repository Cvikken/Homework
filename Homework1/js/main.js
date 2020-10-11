const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = 'http://unsplash.it/150/150?random&gravity=center') => {
  return `<div class="product-item">
            <img class="img-item" src="${img}" alt="">
            <h3>${title}</h3>
            <p>${price} &pound;</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map(item => renderProduct(item.title, item.price));
  document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);
