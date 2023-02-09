import isWinner from './findwinner.js';

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

const goToPlay = () => {
  const tableAll = createField();
  const divRoot = document.querySelector('.root');
  divRoot.append(tableAll);
  let cellText = 'X';
  const allXs = [];
  tableAll.addEventListener('click', (event) => {
    const { target } = event;
    if (target.textContent === '') {
      target.textContent = cellText;
    }
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = cellText === 'X' ? 'O' : 'X';
    }
    if (target.textContent === 'X') {
      const num = target.getAttribute('cellNum');
      allXs.push(num);
    }
    const hasWinner = isWinner(allXs);
    if (hasWinner) {
      const divWinner = document.createElement('div');
      const text = document.createTextNode('X Win!!!');
      divWinner.append(text);
      divRoot.classList.add('winner');
      document.body.append(divWinner);
    }
  });
};

goToPlay();
