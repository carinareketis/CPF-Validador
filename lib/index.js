function cpfValidator(cpfNumber) {
  cpfNumber = cpfNumber.replace(/\D/g, '').split('').map(Number);
  if (cpfNumber.length !== 11 || cpfNumber.every(digit => digit === cpfNumber[0])) {
    return false;
  }
  // else {
  //     return cpfNumber;
  // }      
  // }
  // console.log(cpfNumber);
  // function  checksFirstDigitCpf() {
  let validationFirstDigit = cpfNumber.slice(0, 9);
  // console.log(validationFirstDigit);
  validationFirstDigit = 11 - (validationFirstDigit.map((elem, index, array) =>
    elem * (10 - index)).reduce((elem, result) => (result + elem) % 11));
  // console.log(validationFirstDigit);
  const resultModuleFirstDigit = (validationFirstDigit === 10 || validationFirstDigit === 11) ?
    validationFirstDigit = 0 : validationFirstDigit;
  // console.log(validationFirstDigit);
  // return validationFirstDigit;
  // }
  // function checksSecondDigitCpf() {
  let validationSecondtDigit = cpfNumber.slice(0, 10);
  // console.log(validationSecondtDigit);
  validationSecondtDigit = 11 - (validationSecondtDigit.map((elem, index, array) =>
    elem * (11 - index)).reduce((elem, result) => (result + elem) % 11));
  // console.log(validationSecondtDigit);
  const resultModuleSecondDigit = (validationSecondtDigit === 10 || validationSecondtDigit === 11) ? validationSecondtDigit = 0 : validationSecondtDigit;
  // console.log(validationSecondtDigit);
  // return validationSecondtDigit;
  // }
  // function checksResultCpf() {
  const validateCpf = (resultModuleFirstDigit === cpfNumber[9] && resultModuleSecondDigit === cpfNumber[10]) ? true : false;
  return validateCpf;
  // console.log(validateCpf);
  // }
// function cpfValidator(cpf) {
//   const array = checksInputCpf(cpf);
//   const cpfFistDigit = checksFirstDigitCpf(array, true)
//   const cpfSecondDigit = checksSecondDigitCpf(array, true)
//   if (resultModuleFirstDigit === cpfNumber[9] &&
//     resultModuleSecondDigit === cpfNumber[10]) {
//     return true;
//   } else {
//     return false;
//   }
// }
}
module.exports.cpfValidator = cpfValidator;
