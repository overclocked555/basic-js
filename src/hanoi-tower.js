const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turnsCount = 2 ** disksNumber - 1;
  let solve = {     
    turns : turnsCount,  
    seconds: Math.floor(3600 * turnsCount / turnsSpeed)      
  };
  return solve;
};
