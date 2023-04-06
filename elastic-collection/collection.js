const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection');
	
	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		// You can make each element inside of that…
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.title // Put the JSON title inside
		listItem.appendChild(itemTitle) // And add it to the `li`!

		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.imgs // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too

		// add an ID to the list item for unique styling
		listItem.id = item.id;
 
		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
			<div class="text">
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
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
})


// FILTER

const filterButtons = document.querySelectorAll('.filter-button');

const toggleRapper = (elements, showHide) => {
    // do something
    elements.forEach(el => {
        if (showHide == 'show') {
            el.classList.remove('is-hidden');
        } else {
            el.classList.add('is-hidden');
        }
    });
};

filterButtons.forEach(button => {
    // click on filter button
    button.addEventListener('click', () => {
        // get the data-attribute
        const filterValue = button.getAttribute('data-filter');
        // find all of the matching rappers (any grid item that has the same data-attribute)
        const matchingRappers = document.querySelectorAll(`.grid-item[data-filter="${filterValue}"]`);
        // first, loop through EVERYTHING and assume it doesn't match (i.e. hide it)
        toggleRapper(rappers, 'hide');
        // second, loop through MATCHING elements and show them (remove the 'is-hidden' class we just applied)
        toggleRapper(matchingRappers, 'show');

        if (button.getAttribute('data-filter') == 'All') {
            toggleRapper(rappers, 'show');
        };
    });
});