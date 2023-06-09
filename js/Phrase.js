/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase');
    const ul = phraseDiv.querySelector('ul');
    ul.innerHTML = '';

    for (let i = 0; i < this.phrase.length; i++) {
        const letter = this.phrase[i];
        const li = document.createElement('li');
        //li.textContent = letter;
        
        if( letter !== ' ') {
            li.textContent = letter;
            li.classList.add('hide', 'letter', letter);
        } else {
            li.classList.add('space');
        }
    
        ul.appendChild(li);
    }
}
checkLetter(letter) {
    return this.phrase.includes(letter);
    }
showMatchedLetter(letter) {
    const matchedLetters = document.querySelectorAll(`.${letter}`);

    matchedLetters.forEach((matchedLetters) => {
        matchedLetters.classList.remove('hide');
        matchedLetters.classList.add('show');
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