const isWinner = (array) => {
  // check all rows and columns;
  const checkRow = array.reduce((acc, item) => {
    const [i] = item;
    // how many times every element appears in a row;
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});
  const checkColumn = array.reduce((acc, item) => {
    const [, j] = item;
    // how many times every element appears in a column;
    acc[j] = acc[j] ? acc[j] + 1 : 1;
    return acc;
  }, {});
  // is some element has value '3' - is a winner; it will be in array 'isWinner...'
  const isWinnerRow = Object.keys(checkRow).filter(
    (item) => checkRow[item] === 3,
  );
  const isWinnerColumn = Object.keys(checkColumn).filter(
    (item) => checkColumn[item] === 3,
  );
  return isWinnerRow.length > 0 || isWinnerColumn.length > 0;
};

const isWinnerDiagonal = (array) => {
  // it is winnings options (cell's numbers - attributes);
  const controlArrays = [
    ['11', '22', '33'],
    ['31', '22', '13'],
  ];
  // check if elements appear in these cells;
  const checkDiagonal = controlArrays.filter((item) => {
    const [a, b, c] = item;
    const aTrue = array.includes(a);
    const bTrue = array.includes(b);
    const cTrue = array.includes(c);
    // if 'true' - is a winner;
    return aTrue && bTrue && cTrue;
  });
  return checkDiagonal.length > 0;
};

export { isWinner, isWinnerDiagonal };
