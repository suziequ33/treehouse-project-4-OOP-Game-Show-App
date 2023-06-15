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

const overlay = document.getElementById('overlay');
overlay.style.backgroundColor = 'black';

const headerElements = document.querySelectorAll('#banner .header');
headerElements.forEach(headerElement => {
    headerElement.style.fontFamily = 'FELIX TITLING ';
    headerElement.style.color = 'black';
});

/**Used template literals for the empty boxes.  
 * found .includes in notes section 3, (String Manipulation with JavaScript/Search Methods) 
 * I did have truble with showing or hiding the letters when clicked. So i went back and forth with classList and className.
 * I added my change of background and font here. 
 * I changed the overlay to black for my Harry Potter theme.
 * I fist wanted the four house colors on the  body but it looked too much like a rainbow. to i just changed the background color to maroon.
 * then i changed the banner font to FELIX TETLING,  and the color to black. 
 * */