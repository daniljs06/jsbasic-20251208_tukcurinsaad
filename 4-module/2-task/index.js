function makeDiagonalRed(table) {
  // ваш код...
  let i = 0;
  for (let row of table.rows) {
    
    row.cells[i].style.backgroundColor = 'red';
   i++;
   }
}
