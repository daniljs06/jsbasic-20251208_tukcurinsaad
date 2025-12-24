function highlight(table) {
  // ваш код...
  let tableRows = table.tBodies[0].rows
  for (let row of tableRows) {
  	let tableCells = row.cells;
  	let statusCell = tableCells[3];
  	if (statusCell.hasAttribute('data-available')) {
  		if (statusCell.dataset.available === 'true') {
  			row.classList.add('available');
  		} else if (statusCell.dataset.available === 'false') {
  			row.classList.add('unavailable');
  		} 
  	} else {
  			row.setAttribute('hidden', true);
  		}
     let genderCells = tableCells[2];
     if (genderCells.textContent === 'm') {
     	row.classList.add('male');
     } else if (genderCells.textContent === 'f') {
     	row.classList.add('female');
     }
     let ageCells = tableCells[1];
     if (Number(ageCells.textContent) < 18) {
     	row.style.textDecoration = 'line-through'
     }
  }
}
