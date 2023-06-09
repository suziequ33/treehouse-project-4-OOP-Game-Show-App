/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Dobby is free'),
            new Phrase('I love Magic'),
            new Phrase('Until the very end'),
            new Phrase('Harry youre a wizard'),
            new Phrase('When in doubt go to the library'),
        ];
        this.activePhrase = null;
    }
    startGame() {
        
        const phraseList = document.querySelector('#phrase ul');
        phraseList.innerHTML = '';

        const keyButtons = document.querySelectorAll('.key');
        keyButtons.forEach((button) => {
           button.disabled = false;
            button.classList.remove('chosen', 'wrong');
           button.classList.add('key');
        });

        const hearts = document.querySelectorAll('.tries img');
       hearts.forEach((heart) => {
            heart.src = 'images/liveHeart.png';
        });

        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    handleInteraction(button) {
        button.disabled = true;
        const letter = button.textContent;

        button.classList.remove('chosen', 'wrong');

        if(this.activePhrase.checkLetter(letter)) {
           // button.classList.remove('wrong');

            button.classList.add('chosen');//add chosen class
            this.activePhrase.showMatchedLetter(letter);

            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
           // button.classList.remove('chosen');
            button.classList.add('wrong');//add wrong class
            this.removeLife();
        }
    }
    removeLife() {
        const lives = document.querySelectorAll('.tries');
        const heartImage = 'images/lostHeart.png';
        
        lives[this.missed].querySelector('img').src = heartImage;
        this.missed++;

        if(this.missed === 5) {
            this.gameOver(false);
        }
    }
    checkForWin() {
        const hiddLetters = document.querySelectorAll('.hide');
        return hiddLetters.length === 0;
    }
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');

        if(gameWon) {
            gameOverMessage.textContent = 'Congratulations!! You Win!';
            overlay.classList.remove('start', 'lose');
            overlay.classList.add('win');
        } else {
            gameOverMessage.textContent = 'So Sorry, better luck next time!';
            overlay.classList.remove('start', 'win');
            overlay.classList.add('lose');
        }
       const overlayButton = document.querySelector('#btn__reset');
       overlayButton.textContent = 'Play Again';
       overlayButton.addEventListener('click', () => {
            this.resetGame();
            this.startGame();
       });
    }
    resetGame() {
        const phraseDiv = document.querySelector('#phrase ul');
        phraseDiv.innerHTML = '';
        const keyButtons = document.querySelectorAll('.key');
        const lives = document.querySelectorAll('.tries');
        const heartImage = 'images/liveHeart.png';

       // phraseDiv.innerHTML = '';

        keyButtons.forEach((button) => {
            button.disabled = false;
            button.classList.remove('chosen', 'wrong');
        });

        lives.forEach(life => {
            life.querySelector('img').src = heartImage;
         });
         this.missed = 0;
    }
}

