const createFinalDiv = (str) => {
  const divWinner = document.createElement('div');
  const paragraph = document.createElement('p');
  const text = document.createTextNode(str);
  paragraph.append(text);
  divWinner.append(paragraph);
  const button = document.createElement('button');
  const textButton = document.createTextNode('START AGAIN');
  button.append(textButton);
  divWinner.append(button);
  return divWinner;
};

export default createFinalDiv;
