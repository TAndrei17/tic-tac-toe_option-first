import createField from './createfield.js';
import createFinalDiv from './createfinaldiv.js';
import { isWinner, isWinnerDiagonal } from './findwinner.js';

const goToPlay = () => {
  const tableAll = createField();
  const divRoot = document.querySelector('.root');
  divRoot.append(tableAll);
  const turn = document.querySelector('.step');
  let cellText = 'X';
  document.body.prepend(turn);
  // here attributes of every cell is collected (steps collection)
  const allXs = [];
  const allOs = [];
  turn.textContent = `'${cellText}' starts`;
  tableAll.addEventListener('click', (event) => {
    const { target } = event;
    const getCellNum = event.target.getAttribute('cellNum');
    // 'X' starts
    if (target.textContent === '') {
      target.textContent = cellText;
    }
    // if cell is occupied nothing happen but turn goes to another player
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = cellText === 'X' ? 'O' : 'X';
    }
    turn.textContent = `'${cellText}' now`;
    if (target.textContent === 'X' && !allXs.includes(getCellNum)) {
      const newX = target.getAttribute('cellNum');
      // collect every step of 'X'
      allXs.push(newX);
    }
    if (target.textContent === 'O' && !allOs.includes(getCellNum)) {
      const newO = target.getAttribute('cellNum');
      // collect every step of 'O'
      allOs.push(newO);
    }
    // check X's collection on every step
    const hasWinnerX = isWinner(allXs);
    const hasWinnerXDiagonal = isWinnerDiagonal(allXs);
    if (hasWinnerX || hasWinnerXDiagonal) {
      turn.remove();
      // if winner appears is created <div> and the container receive class '.winner'
      const finalDiv = createFinalDiv("CONGRATS! 'X' IS WINNER!");
      divRoot.classList.add('winner');
      document.body.append(finalDiv);
      tableAll.replaceWith(finalDiv);
      const butt = document.querySelector('div > button');
      butt.addEventListener('click', () => document.location.reload());
    }
    // check O's collection on every step
    const hasWinnerO = isWinner(allOs);
    const hasWinnerODiagonal = isWinnerDiagonal(allOs);
    if (hasWinnerO || hasWinnerODiagonal) {
      turn.remove();
      // if winner appears is created <div> and the container receive class '.winner'
      const finalDiv = createFinalDiv("CONGRATS! 'O' IS WINNER!");
      divRoot.classList.add('winner');
      document.body.append(finalDiv);
      tableAll.replaceWith(finalDiv);
      const butt = document.querySelector('div > button');
      butt.addEventListener('click', () => document.location.reload());
    }
    const getWinner = document.querySelector('.winner');
    if ([...allXs, ...allOs].length === 9 && !getWinner) {
      turn.remove();
      const finalDiv = createFinalDiv('DRAW!');
      divRoot.classList.add('winner');
      document.body.append(finalDiv);
      tableAll.replaceWith(finalDiv);
      const butt = document.querySelector('div > button');
      butt.addEventListener('click', () => document.location.reload());
    }
  });
};

goToPlay();
