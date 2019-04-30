function cpfChecksInput(cpfNumber){
  const arrayCpf = cpfNumber.split('').map(Number);
  if(cpfNumber.length === 0 || cpfNumber.length < 11 || cpfNumber.length > 11 || arrayCpf.every(digit => digit === arrayCpf[0])) {
    return false;
  }else {
    return true;
  }
}


module.exports.cpfChecksInput = cpfChecksInput;