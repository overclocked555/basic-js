const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  sum = 0;
  backyard.forEach((element) => {
    sum += element.filter(function(char) {return char === '^^'}).length;
    });
  return (sum);
};
