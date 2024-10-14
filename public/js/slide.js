// Slider Module
const Slider = (() => {
  const elements = {
    container: document.querySelector('.slider-container'),
    slideRight: document.querySelector('.right-slide'),
    slideLeft: document.querySelector('.left-slide'),
    upButton: document.querySelector('.up-button'),
    downButton: document.querySelector('.down-button')
  };

  const slidesLength = elements.slideRight.querySelectorAll('div').length;
  let activeSlideIndex = 0;

  function initSlider() {
    elements.slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
    elements.upButton.addEventListener('click', () => changeSlide('up'));
    elements.downButton.addEventListener('click', () => changeSlide('down'));
    window.addEventListener('scroll', handleScroll);
  }

  function changeSlide(direction) {
    const sliderHeight = elements.container.clientHeight;
    if (direction === 'up') {
      activeSlideIndex++;
      if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;
        scrollToElement('svg-container-1');
      }
    } else if (direction === 'down') {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
        scrollToElement('svg-container-1');
      }
    }

    elements.slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    elements.slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
  }

  function handleScroll() {
    const sliderRect = elements.container.getBoundingClientRect();
    const svgContainer1Rect = document.getElementById('svg-container-1').getBoundingClientRect();

    if (isElementInView(sliderRect) || isElementInView(svgContainer1Rect)) {
      resetSlider();
    }
  }

  function isElementInView(rect) {
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function resetSlider() {
    activeSlideIndex = 0;
    elements.slideRight.style.transform = `translateY(0)`;
    elements.slideLeft.style.transform = `translateY(0)`;
  }

  function scrollToElement(elementId) {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
  }

  return { init: initSlider };
})();

document.addEventListener('DOMContentLoaded', Slider.init);
