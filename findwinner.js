const isWinner = (array) => {
  const checkRow = array.reduce((acc, item) => {
    const [i] = item;
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});
  const checkColumn = array.reduce((acc, item) => {
    const [, j] = item;
    acc[j] = acc[j] ? acc[j] + 1 : 1;
    return acc;
  }, {});
  const isWinnerRow = Object.keys(checkRow).filter(
    (item) => checkRow[item] === 3,
  );
  const isWinnerColumn = Object.keys(checkColumn).filter(
    (item) => checkColumn[item] === 3,
  );
  return (isWinnerRow.length > 0 || isWinnerColumn.length > 0);
};

const isWinnerDiagonal = (array) => {
  const controlArrays = [['11', '22', '33'], ['31', '22', '13']];
  const checkDiagonal = controlArrays.filter((item) => {
    const [a, b, c] = item;
    const aTrue = array.includes(a);
    const bTrue = array.includes(b);
    const cTrue = array.includes(c);
    return (aTrue && bTrue && cTrue);
  });
  return checkDiagonal.length > 0;
};

export { isWinner, isWinnerDiagonal };
