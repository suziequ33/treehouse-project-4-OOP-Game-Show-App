/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

document.querySelector('#qwerty').addEventListener('click', (event) => {
        if(event.target.className ==='key') {
        game.handleInteraction(event.target);
    }
});
