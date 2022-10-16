document.addEventListener('DOMContentLoaded', () => {
  const listTestimonials = document.querySelector('.list-testimonials');
  listTestimonials.offsetLeft = 30;
  let isDown = false;
  let startX;
  let scrollLeft;

  listTestimonials.addEventListener('mousedown', (e) => {
    if (innerWidth >= 1200) {
      isDown = true;

      startX = e.pageX - listTestimonials.offsetLeft;
      scrollLeft = listTestimonials.scrollLeft;
    }
  });

  listTestimonials.addEventListener('mouseleave', () => {
    if (innerWidth >= 1200) {
      isDown = false;
      listTestimonials.classList.remove('active');
    }
  });

  listTestimonials.addEventListener('mouseup', () => {
    if (innerWidth >= 1200) {
      isDown = false;
      listTestimonials.classList.remove('active');
    }
  });

  listTestimonials.addEventListener('mousemove', (e) => {
    if (!isDown) {
      return false;
    }
    
    if (innerWidth >= 1200) {
      e.preventDefault();
      const x = e.pageX - listTestimonials.offsetLeft;
      const walk = (x - startX) * 5;
      listTestimonials.scrollLeft = scrollLeft - walk;
    }
  });
});