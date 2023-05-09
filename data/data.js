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
	  type: 'doughnut',
	  data: {
		labels: ['running', 'eating', 'foraging', 'chasing', 'climbing'],
		datasets: [
			{
				label: '# of Squirrels',
				data: [running, eating, foraging, chasing, climbing],
				borderColor: '#4dc9f6',
				backgroundColor: ['rgba(175, 173, 165, 1)','rgb(150, 150, 250)','rgba(187, 115, 54, 1)','rgba(43, 47, 48, 1)','rgba(150, 116, 81, 1)','rgba(36, 65, 140, 1)','rgba(36, 65, 140, 1)','rgba(36, 65, 140, 1)'],
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