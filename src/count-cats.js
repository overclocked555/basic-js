const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  sum = 0;
  backyard.forEach((element) => {

    sum += element.filter(function(char) {return char === '^^'}).length;
    //console.log(sum);
    
    });
  return (sum);
};
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
//};
