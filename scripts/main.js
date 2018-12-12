'use strict';

const board = document.querySelector('.board');




for (let i = 0; i<100; i++) {


    const p = document.createElement('p');

    p.classList.add('sentence');

    console.log(p);

    const sentenceText = document.createTextNode('He aprendido bien cómo funcionan los bucles');

    const newSentence =  p.appendChild(sentenceText);

   const htmlElement = board.appendChild(newSentence);

   

}




