let previous_pos = 0;
let page_y_offset = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  page_y_offset = window.pageYOffset;
  if(page_y_offset > previous_pos)
    navbar.style.top = '-100px';
  else
    navbar.style.top = '0';
  previous_pos = page_y_offset;
});