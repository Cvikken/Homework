class ProductList {
  #goods;
  //тоже не везде пока работает, но закрывает инфу от внешнего прочтения?..
  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this.#render(); 
    //не везде работает, но "закрывает" метод от использования в других местах
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
 //тут я после той функции поняла что жизнь себе все-таки усложнила и добавила всё сюда. 
//надеюсь, теперь всё правильно. вывела результат в консоль, чтобы было видно что всё работает.
  AllPrice(){
    for (let i=0; i < this._allProducts.length; i++) {
    this.Summ.push(this._allProducts[i].price);}
    console.log(this.Summ.reduce((accumulator, currentValue) => accumulator + currentValue));
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

 // Есть чувство, что я тут себе конечно усложнила жизнь. 
//Я мыслила как - брать общую сумму надо всё-таки со страницы HTML, а не из запрашиваемого массива, потому что в корзину (а счётчик в общем-то для неё) люди будут добавлять разные товары. 
//Поэтому мысль такая - присвоила строке с ценой класс, по этому классу пробежалась и вытащила из коллекции инфу с ценой. 
//Оттуда сделала новый массив, заодно убрав последний символ с ценой. 
//Почему новый массив - потому что нашла метод reduce, он мне очень понравился, но он работает только с массивом.
//Ну и потом вывела в консоль значение. Потому что не придумала куда еще его выводить пока что :D 
//Проверила (добавив еще товаров на страницу), сумма меняется. Если я тут сама себя перемудрила - пожалуйста, расскажите как можно было сделать проще. Спасибо!
//Потом в конце я всё это дело сократила и вставила querySelectorAll уже вниз, где вывожу инфу. 

//function SumPrices(arr){
 // const AllPrices = [];
 // for (let i=0; i < arr.length; i++) {
  //AllPrices.push(+(arr[i].innerHTML.slice(0, -1)));
  //}
  //return(AllPrices.reduce((accumulator, currentValue) => accumulator + currentValue))
//};

//console.log(SumPrices(document.querySelectorAll(".cost")));

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
