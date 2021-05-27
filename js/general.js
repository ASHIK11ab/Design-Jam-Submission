let previous_pos = 0;
let page_y_offset = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  page_y_offset = window.pageYOffset;
  console.log(`Page offset: ${page_y_offset}\nPrevious pos: ${previous_pos}`);
  console.log(page_y_offset > previous_pos);
  if(page_y_offset > previous_pos)
    navbar.style.top = '-100px';
  else
    navbar.style.top = '0';
  previous_pos = page_y_offset;
});