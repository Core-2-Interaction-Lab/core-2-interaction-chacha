// HOW TO FETCH DATA ACROSS THE WEB
const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json';


fetch(url)
  .then(response => response.json())
	// pass the data to the function!
	.then(data => playWithData(data))


// QUERY, MANIPULATE, VISUALIZE THE DATASET
const playWithData = data => {


	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	    type: 'pie',
	  data: {
		labels: ['gray', 'cinnamon', 'black', 'no value'],
		datasets: [
			{
				label: 'number of squirrels',
		
				data: [2473, 392, 103, 55],
				lebelColor:
					'#D2CCBD',
					borderColor:
					'#D2CCBD',
				backgroundColor: [
					'rgba(175, 173, 165, 1)',
					'rgba(187, 115, 54, 1)',
					'rgba(43, 47, 48, 1)',
					'rgba(36, 64, 47, 1)',
				],
				
				borderWidth: 0.5
			}
		]
	  },
	  options: {
		scales: {
		
		}
	  }
	});

}

