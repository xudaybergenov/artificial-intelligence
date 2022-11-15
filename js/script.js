let companyRow = document.querySelector('.company-row');
let companyBrands = document.querySelector('.company-brands');
let pressed;
let startX;
let x;


companyRow.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.offsetX - companyBrands.offsetLeft;
})
window.addEventListener('mouseup', () => {
  pressed = false;
})
companyRow.addEventListener('mousemove', (e) => {
  if(!pressed) return;
  x = e.offsetX;
  companyBrands.style.left = `${x - startX}px`;
})

// function checkboundary() {
//   let outer = companyRow.getBoundingClientRect();
//   let inner = companyBrands.getBoundingClientRect();

//   if(parseInt(companyBrands.style.left > 0)) {
//     companyBrands.style.left = '0px';
//   }
//   else if(inner.right < outer.right) {
//     companyBrands.style.left = `-${inner.width - outer.width}px`;
//   }
// }
// checkboundary()