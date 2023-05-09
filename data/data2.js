
const translateButton = document.querySelector('#boxch');
const boxButton = document.querySelector('#boxr');
const climbButton = document.querySelector('#boxcl');
const eatButton = document.querySelector('#foode');
const foodButton = document.querySelector('#food');

const myElement1 = document.querySelector('#sqch1');
const myElement2 = document.querySelector('#sqch2');
const myElement3 = document.querySelector('#sqr');
const myElement4 = document.querySelector('#sqcl');
const myElement5 = document.querySelector('#sqe');
const myElement6 = document.querySelector('#sqf1');
const myElement7 = document.querySelector('#sqf2');

let isTranslated = false;
let isBox = false;
let isClimb = false;
let isEat = false;
let isFood = false;

translateButton.addEventListener('click', () => {
  if (!isTranslated) {
    myElement1.classList.add('chase1');
    myElement2.classList.add('chase2');
  } else {
    myElement1.classList.remove('chase1');
    myElement2.classList.remove('chase2');
  }
  isTranslated = !isTranslated;
});


boxButton.addEventListener('click', () => {
    if (!isBox) {
      myElement3.classList.add('run');
    } else {
      myElement3.classList.remove('run');
    }
    isBox = !isBox;
  });
  

  climbButton.addEventListener('click', () => {
    if (!isClimb) {
      myElement4.classList.add('climb');
    } else {
      myElement4.classList.remove('climb');
    }
    isClimb = !isClimb;
  });
  
  eatButton.addEventListener('click', () => {
    if (!isEat) {
      myElement5.classList.add('eat');
    } else {
      myElement5.classList.remove('eat');
    }
    isEat = !isEat;
  });

  
  foodButton.addEventListener('click', () => {
    if (!isFood) {
      myElement6.classList.add('nudge');
      myElement7.classList.add('nudgee');
    } else {
      myElement6.classList.remove('nudge');
      myElement7.classList.remove('nudgee');
    }
    isFood = !isFood;
  });