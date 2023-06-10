/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

addPhraseToDisplay() {
    const phraseList = document.querySelector('#phrase ul');
    //const ul = phraseDiv.querySelector('ul');
    //ul.innerHTML = '';
    let phraseHTML = '';
   // phraseList.innerHTML = '';

    for (let i = 0; i < this.phrase.length; i++) {
        //const li = document.createElement('li');
        if(this.phrase[i] !== ' ') {
           // li.className = `hide letter ${this.phrase[i]}`;
           // li.textContent = this.phrase[i];
            phraseHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
        } else {
            //li.className = 'space';
            phraseHTML += '<li class="space"></li>';
        }
        //phraseList.appendChild(li);
       // const letter = this.phrase[i];
        //const li = document.createElement('li');
        //li.textContent = letter;
        
       // if( letter !== ' ') {
         //   li.textContent = letter;
           // li.classList.add('hide', 'letter', letter);
       // } else {
        //    li.classList.add('space');
       // }
    
       // ul.appendChild(li);
    }
    phraseList.innerHTML = phraseHTML;
}
checkLetter(letter) {
    return this.phrase.includes(letter);
    }
showMatchedLetter(letter) {
    //const matchedLetters = document.querySelectorAll(`.${letter}`);
    const letters = document.querySelectorAll('.letter');
    letters.forEach(phraseLetter => {
        if(phraseLetter.textContent === letter) {
            phraseLetter.classList.remove('hide');
            phraseLetter.classList.add('show');
    }
   // matchedLetters.forEach((matchedLetter) => {
       // matchedLetter.classList.remove('hide');
       // matchedLetter.classList.add('show');
    });

    //const phraseDiv = document.querySelector('#phrase');
    //const lis = phraseDiv.querySelectorAll('li');

   // lis.forEach((li) => {
       // if (li.textContent === letter) {
          //  li.classList.remove('hide');
           // li.classList.add('show');
       // }
   // });
}

}


/**found .includes in notes section 3, (String Manipulation with JavaScript/Search Methods) */