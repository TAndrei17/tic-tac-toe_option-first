const isWinner = (array) => {
  const checkRow = array.reduce((acc, item) => {
    const [i,] = item;
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});
  const checkColumn = array.reduce((acc, item) => {
    const [, j] = item;
    acc[j] = acc[j] ? acc[j] + 1 : 1;
    return acc;
  }, {});
  const isWinnerRow = Object.keys(checkRow).filter((item) => checkRow[item] === 3);
  const isWinnerColumn = Object.keys(checkColumn).filter((item) => checkColumn[item] === 3);
  if (isWinnerRow.length > 0 || isWinnerColumn.length > 0) {
    return true;
  }
};

export default isWinner;
