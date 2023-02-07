  const getTable = document.querySelector('.game');
  let cellText = 'X';
  getTable.addEventListener('click', (event) => {
    const { target } = event;
    if (target.textContent === '') {
      target.textContent = cellText;
    }
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = (cellText === 'X') ? 'O' : 'X';
    }
  });