/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});
const keyboard = document.querySelector('#qwerty');

keyboard.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && e.target.classList) {
        game.handleInteraction(e.target);
    }
});
document.addEventListener('keydown', (e) => {
    if(/[a-z]/i.test(e.key)) {
        const keyButton = document.querySelector(`button.key:enabled[data-key='${e.key}']`);
    if(keyButton) {
        game.handleInteraction(keyButton);
    }
 }
});