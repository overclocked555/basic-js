const CustomError = require("../extensions/custom-error");

function verify(item) {
    if (
    item === '--discard-next' || 
    item === '--discard-prev' ||
    item === '--double-next' ||
    item === '--double-prev' ||
    item === undefined) 
    return false; 
    else return true;
}

module.exports = function transform(arr) {
  if (Array.isArray(arr) === false) throw new Error();
  newArr = [];
  index = 0;
    
  for (index = 0; index < arr.length; ) {
        if (arr[index-1] === '--double-next' && arr[index+1] === '--discard-prev') {
            if (verify(arr[index])) newArr.push(arr[index]);
            index++;
            continue;
        }

      if (arr[index-1] === '--discard-next') {
          index++;
          continue;
        }
      
      if (arr[index+1] === '--discard-prev') {
          index++;
          continue;
        }

      if (arr[index-1] === '--double-next' ) {
          if (verify(arr[index])) newArr.push(arr[index]);
        }

      if (arr[index+1] === '--double-prev') {
          if (verify(arr[index])) newArr.push(arr[index]);
        }
      
      if (verify(arr[index])) newArr.push(arr[index]);

      index++;
  }
  return newArr;
};
