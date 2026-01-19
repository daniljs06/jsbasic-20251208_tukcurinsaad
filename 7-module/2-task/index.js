import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
   this.elem = createElement(`
     <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>
  
      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
  
          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>
  
        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    </div>
    `);
    this.keydown = (event) => {
    if (event.code === 'Escape') {
      this.close();
    }
  }
  }
  
  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
    this.closeButton = this.elem.querySelector('.modal__close');
    this.closeClick = (event) => this.close();
    this.closeButton.addEventListener('click', this.closeClick);
    document.addEventListener('keydown', this.keydown );
    }
    
  close () {
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.keydown);
    this.closeButton.removeEventListener('click', this.closeClick);
    this.elem.remove();
  }
  setTitle (titleText) {
    this.title = this.elem.querySelector('.modal__title');
    this.title.textContent = titleText;

  }

  setBody (node) {
   this.modalBody = this.elem.querySelector('.modal__body');
   this.modalBody.innerHTML = "";
   this.modalBody.append(node);

  }
}
