const createField = () => {
  const tableBox = document.createElement('table');
  tableBox.classList.add('game');
  for (let i = 1; i < 4; i += 1) {
    const str = tableBox.insertRow();
    str.classList.add('line');
    for (let j = 1; j < 4; j += 1) {
      const cell = str.insertCell();
      cell.classList.add('cell');
      const cellNum = `${i}${j}`;
      cell.setAttribute('cellNum', cellNum);
    }
  }
  return tableBox;
};

export default createField;
