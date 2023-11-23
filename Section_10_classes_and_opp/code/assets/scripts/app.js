/* Another little demo app */
class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("Adding product to cart...");
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `<div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content"></div>
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
          </div>`;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "Un oreiller",
      "https://www.carreblanc.com/media/catalog/product/cache/03290465da9ac3d6c5bad4ab4bf6e3e4/image/1297c7c/1690470834-oreiller-carre-moelleux-duvet-d-oie-nuage.jpg",
      "Un oreiller moelleux pour bien dormir",
      19.99
    ),
    new Product(
      "Un tapis oriental",
      "https://m.media-amazon.com/images/I/A1uyzK21hoL.jpg",
      "Un magnifique tapis oriental pour décorer votre salon",
      189.99
    ),
  ];

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
