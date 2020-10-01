const CustomError = require("../extensions/custom-error");

function repeatWithSeparate(mainStr, repeatNum, separate) {
  if (repeatNum === 0) return '';
  return ((mainStr + separate).repeat(repeatNum - 1) + mainStr);
}

module.exports = function repeater(str, options) {
  str = String(str);
  if (options.separator === undefined) options.separator = '+';
  if (options.addition === undefined) options.addition = '';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  options.addition = String(options.addition);

  newStr = repeatWithSeparate((str + (repeatWithSeparate(options.addition, options.additionRepeatTimes, options.additionSeparator))), options.repeatTimes , options.separator);
  return newStr;
};
  