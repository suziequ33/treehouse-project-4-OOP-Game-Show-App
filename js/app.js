/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.getElementById('btn__reset').addEventListener('click', () => {
   // game = new Game();
    game.startGame();
});
//const keyboard = document.querySelector('#qwerty');

document.querySelector('#qwerty').addEventListener('click', (event) => {
    //if(event.target.tagName === 'BUTTON' && event.target.classList.contains('key')) {
        if(event.target.className ==='key') {
        game.handleInteraction(event.target);
    }
});
//document.addEventListener('keydown', (e) => {
   // if(/[a-z]/i.test(e.key)) {
      //  const keyButton = document.querySelector(`button.key:enabled[data-key='${e.key}']`);
   // if(keyButton) {
       // game.handleInteraction(keyButton);
   // }
// }
//});