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
        if(phraseList) {
            phraseList.innerHTML = '';
        }
        const keyButtons = document.querySelectorAll('#qwerty button');
        keyButtons.forEach(button => {
           button.disabled = false;
            button.classList.remove('chosen', 'wrong');
           button.classList.add('key');
        });

        const hearts = document.querySelectorAll('.tries img');
       hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png';
        });

      // this.resetGame();
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        this.missed = 0;
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();


        //const randomPhrase = this.getRandomPhrase().phrase;
        //this.activePhrase = new Phrase(randomPhrase);
        //this.activePhrase.addPhraseToDisplay();

    }
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
        //console.log(randomPhrase);
       // return randomPhrase;

    }
    handleInteraction(button) {
       // const button = event.target;
        //const selectButton = document.querySelector(`button.${button}`);
        button.disabled = true;
        //selectButton.disabled = true;
        const letter = button.textContent;

        //button.classList.remove('chosen', 'wrong');

        if(!this.activePhrase) {
            this.activePhrase = this.getRandomPhrase();
        }
        if(this.activePhrase.checkLetter(button.textContent)) {
            //button.classList.remove('wrong');
            //button.className +='chosen';
            button.classList.add('chosen');
            //this.removeLife();
            this.activePhrase.showMatchedLetter(button.textContent);
            //this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()) {
            //if(this.missed === 5) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            //button.className += 'wrong'; 
            //this.activePhrase.showMatchedLetter(button.textContent);
           // this.removeLife();
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
        console.log(scoreboard);
        if(this.missed < lives.length) {
            lives[this.missed].firstElementChild.src = 'images/lostHeart.png';
        //const lives = scoreboard.querySelectorAll('.tries');
       // const heartImage = 'images/lostHeart.png';
        //if(lives.length >this.missed) {
           // lives[this.missed].firstElementChild.src = 'images/lostHeart.png';
        }
    
    this.missed++;

        if(this.missed === lives.length) {
            this.gameOver(false);
        }
    }
    checkForWin() {
        const phraseLetters = document.querySelectorAll('.letter');
        //const hiddLetters = document.querySelectorAll('.hide');
        return Array.from(phraseLetters).every(letter => letter.classList.contains('show'));
    }
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        //const overlay = document.querySelector('.start');
        const gameOverMessage = document.getElementById('game-over-message');
        const overlayButton = document.querySelector('#btn--reset');

        overlay.style.display = 'flex';

        if(gameWon) {
            //overlay.classList.remove = 'win';
            gameOverMessage.textContent = 'Congratulations!! You Win!';
            //overlay.classList.remove('start', 'lose');
            overlay.className ='win';
            //gameOverMessage.textContent = 'Congratulations!! You Win!';
        } else {
            //overlay.className = 'lose';
            gameOverMessage.textContent = 'So Sorry, better luck next time!';
           // overlay.classList.remove('start', 'win');
            overlay.className ='lose';
            //gameOverMessage.textContent = 'So Sorry, better luck next time!';
        }
        if(overlayButton) {
        overlayButton.textContent = 'Play Again';
        overlayButton.addEventListener('click', () => {
      // const overlayButton = document.querySelector('#btn__reset');
      // overlayButton.textContent = 'Play Again';
      // overlayButton.addEventListener('click', () => {
            
            this.startGame();
            overlay.style.display = 'none';
       });
      }
    }
    //resetGame() {
        //const phraseList = document.getElementById('#phrase ul');
       // if(phraseList) {
       // phraseUL.innerHTML = '';
       // }
        //const keyButtons = document.querySelectorAll('#qwerty button');
       // const keyButtons = document.querySelectorAll('.key');
        //const scoreboard = document.getElementById('scoreboad');
       // const lives = scoreboard.querySelectorAll('.tries');
        //const heartImage = 'images/liveHeart.png';
       // const overlay = document.getElementById('overlay');
       // phraseDiv.innerHTML = '';

       // keyButtons.forEach((button) => {
          //  button.disabled = false;
       //     button.classList.remove('chosen', 'wrong')
          //  button.classList.add = ('key');
       // });

       // const scoreboard = document.getElementById('scoreboard');
      //  if(scoreboard) {
       // const heartImages = scoreboard.querySelectorAll('.tries img');
       // heartImages.forEach((image) => {
          //  image.src = 'images/liveHeart.png';
            //image.alt = 'Heart Icon';
       // });
    //}

        //lives.forEach(life => {
          //  life.querySelector('img').src = heartImage;
         //});
         //this.missed = 0;

         //phraseList.innerHTML = '';
         //keyButtons.forEach(button => {
           // button.disabled = false;
            //button.classList.remove('chosen', 'wrong');
        // });
         //lives.forEach(tryElement => {
            //tryElement.firstElementChild.src = 'images/liveHeart.png';
        // });
        // this.missed = 0;
        // this.activePhrase = null;
        // overlay.className = 'start';
    //}
}

