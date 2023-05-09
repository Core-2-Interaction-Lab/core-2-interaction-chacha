
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


  // HOW TO FETCH DATA ACROSS THE WEB
const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json';


fetch(url)
  .then(response => response.json())
	// pass the data to the function!
	.then(data => playWithData(data))


// QUERY, MANIPULATE, VISUALIZE THE DATASET
const playWithData = data => {

	console.log(data);
	// how many instances were QUAA-ING?
	const running = data.filter(item => item.running == true).length;
	const eating = data.filter(item => item.eating == true).length;
	const foraging = data.filter(item => item.foraging == true).length;
	const chasing = data.filter(item => item.chasing == true).length;
	const climbing = data.filter(item => item.climbing == true).length;
	

	const dataLabels = ['running', 'eating', 'foraging', 'chasing', 'climbing'];
	const dataValues = [running, eating, foraging, chasing, climbing];


	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: ['running', 'eating', 'foraging', 'chasing', 'climbing'],
		datasets: [
			{
				label: 'number of squirrels',
				data: [running, eating, foraging, chasing, climbing],
				borderColor: '#4dc9f6',
				backgroundColor: [
                'rgba(222, 225, 229, 1)',
                'rgba(175, 173, 165, 1)',
                'rgba(187, 115, 54, 1)',
                'rgba(150, 116, 81, 1)',
                'rgba(43, 47, 48, 1)'
            ],
				borderWidth: 0
			}
		]
	  },
	  options: {
		scales: {
		  y: {
			beginAtZero: true
		  }
		}
	  }
	});

}