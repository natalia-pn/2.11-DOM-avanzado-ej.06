'use strict';

const board = document.querySelector('.board');




for (let i = 0; i<100; i++) {


    const p = document.createElement('p');

    p.classList.add('sentence');

    console.log(p);

    const sentenceText = document.createTextNode('He aprendido bien cómo funcionan los bucles' );

    ///////No hace falta meterlos en nuevas variables porque ya están creadas: Al añadirles el appenchild, quedan modificadas y se pueden volver a utilizar con el nombre que ya tenían.////
   p.appendChild(sentenceText);

   board.appendChild(p);

   const select = document.createElement('select');

   select.classList.add('select-element');

   select.innerHTML = ` <option value="blanco">blanco</option>
   <option value="azul">azul</option>
   <option value="rojo">rojo</option>
   <option value="verde">verde</option>
   <option value="amarillo">amarillo</option>
   <option value="rosa">rosa</option>`;

   p.appendChild(select);

}



