function cpfChecksInput(cpfNumbEmpty, cpfNumbMax){
  if(cpfNumbEmpty.length !== 0) {
    return true;
  }
  if(cpfNumbMax.length > 11) {
    return false;
  }
}




module.exports.cpfChecksInput = cpfChecksInput;