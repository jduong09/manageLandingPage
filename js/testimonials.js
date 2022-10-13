document.addEventListener('DOMContentLoaded', () => {
  const itemTestimonials = document.getElementsByClassName('item-testimonial');
  const btnTestimonials = document.getElementsByClassName('btn-testimonial');
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
});