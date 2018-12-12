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


//If I put the const = select at the start of the document, the event listener doesn't recognise it.

const select = document.querySelector('.select-element');

//I'm defining it again outside the for loop.

const p = document.querySelector('.sentence');

function changeColor(event) {

   //I can't see the difference when using .selectedIndex.

   const selectEvent = event.currentTarget.selectedIndex;
 
   const selectValue = select.value;

   console.log(selectValue);


   //need to add a remove function.

   if(selectValue === 'rojo') {
         p.classList.toggle('red');
         console.log(select);

   } if(selectValue === 'amarillo') {
      p.classList.toggle('yellow');
      console.log(select);

   } if(selectValue === 'blanco') {
      p.classList.toggle('white');
      console.log(select);

   } if(selectValue === 'azul') {
      p.classList.toggle('blue');
      console.log(select);
      
   } if(selectValue === 'rosa') {
      p.classList.toggle('pink');
      console.log(select);
   } if(selectValue === 'verde') {
      p.classList.toggle('green');
      console.log(select);
   } 
}

select.addEventListener('change', changeColor);









// Algunas pistas para esta tercera parte:

// primero haced funcionar un combo para una única línea

// investigad cómo funciona el evento change de los elementos tipo select (documetación de MDN)

// desde el objeto event de la función de callback, podemos acceder al select que ha provocado el evento mediante event.currentTarget; incluso al índice (como en un array) de la opción seleccionada con event.currentTarget.selectedIndex





