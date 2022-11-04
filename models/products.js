class Products {
  constructor(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.img = img;
    this.desc = desc;
    this.type = type;
  }

  render() {
    return `
    <div class="card">
    <div class="top-bar">
        <i class="fab fa-apple"></i>
        <em class="stocks">Instock</em>
    </div>
    <div class="img-container">
        <img class="product-img"
            src=${this.img}
            alt="">
        <div class="out-of-stock-cover"><span>Out Of Stock</span></div>
    </div>
    <div class="details">
        <div class="name-fav">
            <strong class="product-name">${this.name}</strong>
            <button class="heart"><i class="fas fa-heart"></i></button>
        </div>
        <div class="wrapper">
            <p>Screen: ${this.screen}</p>
            <p>Back Camera: ${this.backCamera}</p>
            <p>Front Camera: ${this.frontCamera}</p>
            <p>${this.desc}</p>
        </div>
        <div class="purchase">
            <p class="product-price">$ ${this.price}</p>
            <span class="btn-add">
                <div id="button-add">
                    <button class="add-btn" id="button-add-${this.id}" onclick="addToCart('${this.id}')">Add to cart<i class="fas fa-chevron-right"></i></button>
                </div>
            </span>
        </div>
    </div>
</div>
    `;
  }
}
