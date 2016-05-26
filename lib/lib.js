
function process(input) {
  var return_value = input
  if(input % 15 == 0){
    return_value = "FIZZBUZZ";
  }else if (input % 3 == 0) {
    return_value = "FIZZ";
  }else if(input % 5 == 0){
    return_value = "BUZZ";
  }
  return return_value;
}

module.exports = {
  process: process
}
