const createField = () => {
  const tableBox = document.createElement('table');
  // <table> has class '.game'
  tableBox.classList.add('game');
  for (let i = 1; i < 4; i += 1) {
    const str = tableBox.insertRow();
    // all rows have class '.line'
    str.classList.add('line');
    for (let j = 1; j < 4; j += 1) {
      const cell = str.insertCell();
      // all cells have class '.cell'
      cell.classList.add('cell');
      const cellNum = `${i}${j}`;
      // every cell has attribute 'cellNum'; '22' - row's number, column's number
      cell.setAttribute('cellNum', cellNum);
    }
  }
  return tableBox;
};

export default createField;
