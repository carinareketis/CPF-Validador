const cpfValidator = (cpf) => {
  cpf = cpf.split('').map(Number);
  if (cpf.length !== 11 || cpf.every(num => num === cpf[0])) return false;
  let firstDigit = cpf.slice(0, 9);
  firstDigit = 11 - (firstDigit.map((num, index) =>
    num * (10 - index)).reduce((num, result) => (result + num) % 11));
  const resultFirst = (firstDigit === 10 || firstDigit === 11) ? 0 : firstDigit;
  let secondDigit = cpf.slice(0, 10);
  secondDigit = 11 - (secondDigit.map((num, index) =>
    num * (11 - index)).reduce((num, result) => (result + num) % 11));
  const resultSecond = (secondDigit === 10 || secondDigit === 11) ? 0 : secondDigit;
  if (resultFirst === cpf[9] && resultSecond === cpf[10]) {
    return true;  
  } else {
    return false;
  }
};
module.exports.cpfValidator = cpfValidator;