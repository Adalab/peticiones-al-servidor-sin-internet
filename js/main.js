'use strict';

//const url = 'https://api.github.com/users/gootyfer';
const url = 'gootyfer.json';
const p = document.querySelector('.name');
const b = document.querySelector('.btn');

function go() {
  fetch(url)
    .then(r=>r.json())
    .then(data => {
      p.innerHTML = data.name + ' ' + data.name;
    });
}

b.addEventListener('click', go);