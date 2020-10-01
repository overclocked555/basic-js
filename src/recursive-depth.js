const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
        arr.forEach(element => {
        let nestedDepth = this.calculateDepth(element);
        depth = (nestedDepth > depth) ? nestedDepth : depth;
      });
      depth++;
    }
    return depth;
  }
};

