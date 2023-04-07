const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection');
	
	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		// You can make each element inside of that…
		//const itemTitle = document.createElement('h2') // Make an `h2`
	//	itemTitle.innerHTML = item.title // Put the JSON title inside
		//listItem.appendChild(itemTitle) // And add it to the `li`!

		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.imgs // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too

		// add an ID to the list item for unique styling
		listItem.id = item.id;
 
		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
			
			<div class="text">
			<div class="name">${item.title}</div>
			<div class="t">Designed by <span>${item.designer}</span></div>
			<div class="t">Category: ${item.type}</div>
			<div class="t">Color: ${item.color}</div>
			<div class="t">Dimension: ${item.dimensions}</div>
			</div>
				
			`

		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		// if (!item.otherAttr) { // If this is `false`
		// 	listItem.classList.add() // Add this class to the whole `li`
		// }

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}

// Fetch gets your JSON file…
fetch('studio.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
})