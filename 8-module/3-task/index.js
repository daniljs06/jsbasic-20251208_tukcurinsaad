export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (product === null || product == undefined) {
      return;
    }
    let cartItem = this.cartItems.find((item) => {
      return item.product.id === product.id;

    });
    if (cartItem) {
      cartItem.count += 1;
    } else {
      cartItem = {
        product: product,
        count: 1
      }
      this.cartItems.push(cartItem);
    }


    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find((item) => {
      return item.product.id === productId;
    })
    if (cartItem) {
      cartItem.count += amount;
    }
    if (cartItem.count <= 0) {
      this.cartItems = this.cartItems.filter((item) => {
        return item.product.id !== productId;
      })
    }


    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.count;
    }
    return total;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let item of this.cartItems) {
      totalPrice += item.product.price * item.count;
    }
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

