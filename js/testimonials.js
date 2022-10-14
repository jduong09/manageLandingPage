document.addEventListener('DOMContentLoaded', () => {
  const itemTestimonials = document.getElementsByClassName('item-testimonial');
  const btnTestimonials = document.getElementsByClassName('btn-testimonial');
  const divBtnTestimonials = document.getElementById('div-btn-testimonials');
  let currentTestimonialIdx = 0;

  for (let i = 0; i < btnTestimonials.length; i++) {
    btnTestimonials[i].addEventListener('click', (e) => {
      e.preventDefault();

      if (i === currentTestimonialIdx) {
        return false;
      }

      itemTestimonials[currentTestimonialIdx].classList.add('hide');
      btnTestimonials[currentTestimonialIdx].classList.remove('active');

      itemTestimonials[i].classList.remove('hide');
      btnTestimonials[i].classList.add('active');

      currentTestimonialIdx = i;
    });
  }

  for (let k = 0; k < itemTestimonials.length; k++) {
    if (innerWidth >= 1200) {
      itemTestimonials[k].classList.remove('hide');
      divBtnTestimonials.classList.add('hide');
    } else {
      if (k === 0) {
        itemTestimonials[k].classList.remove('hide');
      } else {
        itemTestimonials[k].classList.add('hide');
      }
    }

    currentTestimonialIdx = 0;
  }
});