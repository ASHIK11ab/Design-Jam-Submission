const donuts = document.querySelectorAll('.donut');
const donut_icon = document.getElementById('donuts');

/* Create a background wrapper which will contain
    the detailed card of a selected donut */
function create_background_wrapper() {
  const wrapper_div = document.createElement('div');
  wrapper_div.classList.add('full-bg-dark-wrapper');
  wrapper_div.setAttribute('id', 'wrapper');
  return wrapper_div;
}

function show_detailed_donut_card() {
  /* Create a background wrapper.
     Clone the selected donut and display a detailed
      card of the donut.
  */
  const wrapper = create_background_wrapper();
  const donut_copy = this.cloneNode(true);
  wrapper.appendChild(donut_copy);
  document.body.appendChild(wrapper);

  /* When close button in donut card is clicked remove
      the cloned donut from DOM */
  const donut_card_close_btn = donut_copy.querySelector('#close-btn');
  donut_card_close_btn.onclick = function() {
    document.getElementById('wrapper').remove();
  }
}

window.addEventListener('click', function(event) {
  // When user clicks outside of wrapper remove wrapper from DOM.
  const wrapper = document.getElementById('wrapper');
  if(wrapper != undefined && event.target == wrapper)
    wrapper.remove();
});

// Add event listeners for all donuts.
for(const donut of donuts) {
  donut.addEventListener('click', show_detailed_donut_card);
}

donut_icon.onclick = function() {
  window.scrollTo(0, 0);
}
