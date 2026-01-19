import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }
  render() {

    let categoriesHtml = this.categories.map((category) => `
    <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}
    </a>
    `).join('');
    let ribbon = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      <nav class="ribbon__inner">
        ${categoriesHtml}
      </nav>
        <button class="ribbon__arrow ribbon__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
      `);

    let ribbonInner = ribbon.querySelector('.ribbon__inner');
    let arrowLeft = ribbon.querySelector('.ribbon__arrow_left');
    let arrowRight = ribbon.querySelector('.ribbon__arrow_right');
    arrowRight.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    });
    arrowLeft.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
    });

    ribbonInner.addEventListener('scroll', () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;

      let scrollRight = scrollWidth - scrollLeft - clientWidth;


      if (scrollLeft === 0) {
        arrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        arrowLeft.classList.add('ribbon__arrow_visible');
      }
      if (scrollRight < 1) {
        arrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        arrowRight.classList.add('ribbon__arrow_visible');
      }
    });
    ribbonInner.dispatchEvent(new Event('scroll'));
    let ribbonLinks = ribbon.querySelectorAll('.ribbon__item');
    ribbonLinks[0].classList.add('ribbon__item_active');
    ribbonLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        let currentActive = ribbon.querySelector('.ribbon__item_active');
        if (currentActive && currentActive !== link) {
          currentActive.classList.remove('ribbon__item_active');
        }
        link.classList.add('ribbon__item_active');
        let customEvent = new CustomEvent('ribbon-select', {
          detail: link.dataset.id,
          bubbles: true
        });
        ribbon.dispatchEvent(customEvent);
      })


    })




    return ribbon;


  }
}
