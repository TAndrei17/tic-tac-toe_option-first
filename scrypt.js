import createField from './createfield.js';
import { isWinner, isWinnerDiagonal } from './findwinner.js';

const goToPlay = () => {
  const tableAll = createField();
  const divRoot = document.querySelector('.root');
  divRoot.append(tableAll);
  let cellText = 'X';
  const allXs = [];
  const allOs = [];
  tableAll.addEventListener('click', (event) => {
    const { target } = event;
    if (target.textContent === '') {
      target.textContent = cellText;
    }
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = cellText === 'X' ? 'O' : 'X';
    }
    if (target.textContent === 'X') {
      const newX = target.getAttribute('cellNum');
      allXs.push(newX);
    }
    if (target.textContent === 'O') {
      const newO = target.getAttribute('cellNum');
      allOs.push(newO);
    }
    const hasWinnerX = isWinner(allXs);
    const hasWinnerXDiagonal = isWinnerDiagonal(allXs);
    if ((hasWinnerX) || (hasWinnerXDiagonal)) {
      const divWinner = document.createElement('div');
      const text = document.createTextNode('Congrats! X is winner!');
      divWinner.append(text);
      divRoot.classList.add('winner');
      document.body.append(divWinner);
    }
    const hasWinnerO = isWinner(allOs);
    const hasWinnerODiagonal = isWinnerDiagonal(allOs);
    if ((hasWinnerO) || (hasWinnerODiagonal)) {
      const divWinner = document.createElement('div');
      const text = document.createTextNode('Congrats! O is winner!');
      divWinner.append(text);
      divRoot.classList.add('winner');
      document.body.append(divWinner);
    }
  });
};

goToPlay();
