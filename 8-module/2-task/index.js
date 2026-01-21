import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = this.render();
  }
  render() {
    this.productsGrid = createElement(`
    <div class="products-grid">
  <div class="products-grid__inner">
  </div>
</div>
    `)
    this.productsGridInner = this.productsGrid.querySelector('.products-grid__inner');
    this.products.forEach(product => {
      let card = new ProductCard(product);
      this.productsGridInner.appendChild(card.elem);
    });

    return this.productsGrid
  }
  updateFilter(filters) {
    Object.assign(this.filters, filters);


    let filteredProducts = this.products.filter(product => {
      if (this.filters.noNuts === true) {
        if (product.nuts === true) return false;
      }
      if (this.filters.vegeterianOnly === true) {
        if (product.vegeterian !== true) return false;
      }
      if (this.filters.maxSpiciness !== undefined) {
        if (product.spiciness > this.filters.maxSpiciness) {
          return false;
        }
      }
      if (this.filters.category && this.filters.category !== '' && product.category !== this.filters.category) {
        return false
      }
      return true;
    });

    this.productsGridInner.innerHTML = '';
    filteredProducts.forEach(product => {
      let card = new ProductCard(product);
      this.productsGridInner.appendChild(card.elem);
    });


  }


}
