const donuts = document.querySelectorAll('.donut');
const donut_icon = document.getElementById('donuts');

function create_background_wrapper() {
  const wrapper_div = document.createElement('div');
  wrapper_div.setAttribute('class', 'full-bg-dark-wrapper');
  wrapper_div.setAttribute('id', 'wrapper');
  return wrapper_div;
}

function show_detailed_donut_card() {
  const wrapper = create_background_wrapper();
  const donut_copy = this.cloneNode(true);
  const donut_card_close_btn = donut_copy.querySelector('#close-btn');
  donut_card_close_btn.style.display = 'block';
  const donut_content = donut_copy.querySelector('.donut-content');
  donut_content.style.display = 'block';
  wrapper.appendChild(donut_copy);
  document.body.appendChild(wrapper);
  donut_card_close_btn.addEventListener('click', function() {
    document.getElementById('wrapper').remove();
  });
}

window.addEventListener('click', function(event) {
  const wrapper = document.getElementById('wrapper');
  if(wrapper != undefined && event.target == wrapper)
    wrapper.remove();
});

for(const donut of donuts) {
  donut.addEventListener('click', show_detailed_donut_card);
}

donut_icon.onclick = function() {
  window.scrollTo(0, 0);
}
