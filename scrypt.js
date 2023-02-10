import createField from './createfield.js';
import { isWinner, isWinnerDiagonal } from './findwinner.js';

const goToPlay = () => {
  const tableAll = createField();
  const divRoot = document.querySelector('.root');
  divRoot.append(tableAll);
  let cellText = 'X';
  // here attributes of every cell is collected (steps collection)
  const allXs = [];
  const allOs = [];
  tableAll.addEventListener('click', (event) => {
    const { target } = event;
    // 'X' starts
    if (target.textContent === '') {
      target.textContent = cellText;
    }
    // if cell is occupied nothing happen but turn goes to another player
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = cellText === 'X' ? 'O' : 'X';
    }
    if (target.textContent === 'X') {
      const newX = target.getAttribute('cellNum');
      // collect every step of 'X'
      allXs.push(newX);
    }
    if (target.textContent === 'O') {
      const newO = target.getAttribute('cellNum');
      // collect every step of 'O'
      allOs.push(newO);
    }
    // check X's collection on every step
    const hasWinnerX = isWinner(allXs);
    const hasWinnerXDiagonal = isWinnerDiagonal(allXs);
    if ((hasWinnerX) || (hasWinnerXDiagonal)) {
      // if winner appears is created <div> with class '.winner'
      const divWinner = document.createElement('div');
      const text = document.createTextNode('Congrats! X is winner!');
      divWinner.append(text);
      divRoot.classList.add('winner');
      document.body.append(divWinner);
      tableAll.replaceWith(divWinner);
    }
    // check O's collection on every step
    const hasWinnerO = isWinner(allOs);
    const hasWinnerODiagonal = isWinnerDiagonal(allOs);
    if ((hasWinnerO) || (hasWinnerODiagonal)) {
      // if winner appears is created <div> with class '.winner'
      const divWinner = document.createElement('div');
      const text = document.createTextNode('Congrats! O is winner!');
      divWinner.append(text);
      divRoot.classList.add('winner');
      document.body.append(divWinner);
      tableAll.replaceWith(divWinner);
    }
    const getWinner = document.querySelector('.winner');
    if (([...allXs, ...allOs].length === 9) && (!getWinner)) {
      const divWinner = document.createElement('div');
      const text = document.createTextNode('Draw!');
      divWinner.append(text);
      divRoot.classList.add('winner');
      document.body.append(divWinner);
      tableAll.replaceWith(divWinner);
    }
  });
};

goToPlay();
