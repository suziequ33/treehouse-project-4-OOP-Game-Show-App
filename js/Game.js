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
        this.missed = 0;
        const buttons = document.querySelectorAll('.key');
            buttons.forEach((button) => {
           button.disabled = false;
            button.classList.remove('chosen', 'wrong');
        });

        const hearts = document.querySelectorAll('.tries img');
       hearts.forEach((heart) => {
            heart.src = 'images/liveHeart.png';
        });

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        document.body.style.backgroundColor = 'maroon';
        
    }
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    handleInteraction(button) {
        button.disabled = true;
        const letter = button.textContent;

        if(!this.activePhrase) {
            this.activePhrase = this.getRandomPhrase();
        }
        if(this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');

            if(this.missed <4) {
                this.removeLife();
            } else {
                this.removeLife();
                this.gameOver(false);
            }
        }
    }
    removeLife() {
        const scoreboard = document.getElementById('scoreboard');
        const lives = scoreboard.querySelectorAll('.tries');
       
        if(this.missed < lives.length) {
            lives[this.missed].firstElementChild.src = 'images/lostHeart.png';
        }
    
        this.missed++;

        if(this.missed === lives.length) {
            this.gameOver(false);
        }
    }
    checkForWin() {
        const phraseLetters = document.querySelectorAll('.letter');
        for(let i = 0; i < phraseLetters.length; i++) {
            if(phraseLetters[i].classList.contains('hide')) {
                return false;
            }
        }
        return true;
    }
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        const overlayButton = document.querySelector('#btn--reset');

        overlay.style.display = 'flex';

        if(gameWon) {
            gameOverMessage.textContent = 'Congratulations!! You Win!';
            overlay.className ='win';
            overlay.style.backgroundColor = '#78CF82';
        } else {
            gameOverMessage.textContent = 'Sorry, better luck next time! Lets pay again!!' ;
            overlay.className ='lose';
            overlay.style.backgroundColor = '#f5785f';
        }

        if(overlayButton) {
        overlayButton.addEventListener('click', () => {
           this.startGame();
           overlay.style.display = 'none';
           overlay.body.style.backgroundColor = '';
        });
      }
    }
}

/**truble with the random phrase, restarting the game buttonons showing and not showing
 * 
 * why wont className work?? /checForWin
 * i was having truble with className/ classList. incluced() 
 * used .contains() instead of .includes().  includes() returns true if a STRING contains a specfic string.
 * contains() method returns true if a node is a descendant of given node. Or if the element contains the className then the method returns ture.
 * For contains()  at javascripttutorial.net/developer.mozilla.org for examples./w3schools/includes()
 * developer.mozilla.org/for element: classList property.
 * geekflare.com/tic-tac-toe game example.
 * stackoverflow.com/stopping game and checking/displaying winnner. 
 * when i set backgound overlay need to go back in and change oberlay.style back to green/red when lose or win. 
 */
  //document.body.style.backgroundImage = 'linear-gradient(to right, maroon, green, blue, yellow)';