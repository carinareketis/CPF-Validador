const cpfValidator = (cpf) => {
  let cpfNumber = cpf.replace(/\D+/g, '').split('').map(Number);
  if (cpfNumber.length !== 11 || cpfNumber.every(num => num === cpfNumber[0])) return false;
  return digitsValidator(9,10,cpfNumber) === cpfNumber[9] && digitsValidator(10,11,cpfNumber) === cpfNumber[10]
};

function digitsValidator(sliceNumber, multiply,cpf) {
  let digit = cpf.slice(0, sliceNumber);
  digit = 11 - (digit.map((num, index) =>
  num * (multiply - index)).reduce((num, result) => (result + num) % 11));
  return (digit === 10 || digit === 11) ? 0 : digit;
}

module.exports.cpfValidator = cpfValidator;