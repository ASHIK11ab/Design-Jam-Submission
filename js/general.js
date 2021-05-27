let previous_pos = 0;
let page_y_offset = 0;
const navbar = document.querySelector('.navbar');
const bottom_navbar = document.querySelector('.navbar-nav');
const window_width = window.innerWidth;
let bottom_nav_present = false;

window.addEventListener('scroll', function() {
  if(window_width <= 700) 
    bottom_nav_present = true;
  page_y_offset = window.pageYOffset;
  if(page_y_offset > previous_pos) {
    navbar.style.top = '-100px';
    if(bottom_nav_present)
      bottom_navbar.style.bottom = '-100px';
  }
  else {
    if(bottom_navbar)
      bottom_navbar.style.bottom = '0';
    navbar.style.top = '0';
  }
  previous_pos = page_y_offset;
});