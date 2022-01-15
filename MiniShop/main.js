'use strict';

function getFindProduct(className) {
  var ul = document.getElementById('product-List');
  console.log(ul);
  var tag = ul.getElementsByTagName('li');
  console.log(tag);
  for (const elem of tag) {
    if (elem.className.indexOf(className) != -1) {
      console.log(elem.className);
      elem.style.display = 'flex';
      continue;
    }
    elem.style.display = 'none';
  }
}
