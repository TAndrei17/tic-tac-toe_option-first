const createField = () => {
  const tableBox = document.createElement('table');
  tableBox.classList.add('game');
  for (let i = 1; i < 4; i += 1) {
    const str = tableBox.insertRow();
    str.classList.add('line');
    for (let j = 1; j < 4; j += 1) {
      const cell = str.insertCell();
      cell.classList.add('cell');
      const cellNum = `${i}.${j}`;
      cell.setAttribute('cellNum', cellNum);
      // console.log(cell);
    }
  }
  return tableBox;
};

const goToPlay = () => {
  const tableAll = createField();
  const divRoot = document.querySelector('.root');
  divRoot.append(tableAll);
  let cellText = 'X';
  tableAll.addEventListener('click', (event) => {
    const { target } = event;
    if (target.textContent === '') {
      target.textContent = cellText;
    }
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = cellText === 'X' ? 'O' : 'X';
    }
  });
};

goToPlay();
