import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.render();
  }

  render() {

    let sliderSteps = '';
    for (let i = 0; i < this.steps; i++) {
      if (i === this.value) {
        sliderSteps += '<span class="slider__step-active"></span>';
      } else {
        sliderSteps += '<span></span>';
      }

    }

    let sliderHTML = createElement(`
       <div class="slider">

   
    <div class="slider__thumb" >
      <span class="slider__value">${this.value}</span>
    </div>

   
    <div class="slider__progress" ></div>

    <div class="slider__steps">
      ${sliderSteps}
    </div>
  </div>


      `);


    let sliderThumb = sliderHTML.querySelector('.slider__thumb');
    let sliderProgress = sliderHTML.querySelector('.slider__progress');

    let leftPercents = this.value / (this.steps - 1) * 100;

    sliderThumb.style.left = `${leftPercents}%`;
    sliderProgress.style.width = `${leftPercents}%`;


    sliderHTML.addEventListener('click', (event) => {
      let leftClick = event.clientX - sliderHTML.getBoundingClientRect().left;
      let leftRelative = leftClick / sliderHTML.offsetWidth;
      let approximateValue = leftRelative * (this.steps - 1);
      let result = Math.round(approximateValue);

      let sliderValue = sliderHTML.querySelector('.slider__value');
      let allSliderSteps = sliderHTML.querySelectorAll('.slider__steps span');


      this.value = result;
      sliderValue.innerText = result;
      allSliderSteps.forEach((span, index) => {
        if (index === result) {
          span.classList.add('slider__step-active');
        } else {
          span.classList.remove('slider__step-active');
        }

      });
      let newPercents = result / (this.steps - 1) * 100;
      sliderThumb.style.left = `${newPercents}%`;
      sliderProgress.style.width = `${newPercents}%`;
      sliderHTML.dispatchEvent(new CustomEvent('slider-change', {
        detail: result,
        bubbles: true
      }))


    });
    return sliderHTML;
  }
}
