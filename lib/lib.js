
function process(input) {
  var isDivisibleBy3 = (input) => input % 3 == 0;
  var isDivisibleBy5 = (input) => input % 5 == 0;
  var isDivisibleBy15 = (input) => input % 15 == 0;

  if(isDivisibleBy15(input)){
    return "FIZZBUZZ";
  }else if (isDivisibleBy3(input)) {
    return "FIZZ";
  }else if(isDivisibleBy5(input)){
    return "BUZZ";
  }
  return input;
}

var processElem = (elem) => {
  if(elem === '.'){
    return '0';
  }else if ((elem === '*')) {
    return '*'
  }
  return return_value;
}

module.exports = {
  process: process
}
