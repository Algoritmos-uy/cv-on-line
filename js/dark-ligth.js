
 

const toggleBtn = document.querySelector('#mode-selector');
const div = document.querySelector('.w3-white');
// const main = document.querySelector('.w3-content');
//const btnCon = document.querySelector('#mode-selector');


  toggleBtn.addEventListener('click', function() {
  div.classList.toggle('dark-mode');
  // main.classList.toggle('dark-mode');
  // toggleBtn.classList.toggle('dark-mode');

  
});
