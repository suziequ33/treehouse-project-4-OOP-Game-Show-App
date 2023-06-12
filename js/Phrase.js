/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

addPhraseToDisplay() {
    const phraseList = document.querySelector('#phrase ul');
    let phraseHTML = '';
 
    for (let i = 0; i < this.phrase.length; i++) {
      
        if(this.phrase[i] !== ' ') {
            phraseHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
        } else {
            phraseHTML += '<li class="space"></li>';
    }
    
    }
    phraseList.innerHTML = phraseHTML;
}
checkLetter(letter) {
    return this.phrase.includes(letter);
    }
showMatchedLetter(letter) {
    const phraseLetters = document.querySelectorAll('.letter');
    phraseLetters.forEach(phraseLetter => {
        if(phraseLetter.textContent === letter) {
            phraseLetter.classList.remove('hide');
            phraseLetter.classList.add('show');
    }
 
 });

}

}


/**Used template literals for the empty boxes.  
 * found .includes in notes section 3, (String Manipulation with JavaScript/Search Methods) */