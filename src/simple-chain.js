const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    if (value === undefined) value = '( )' 
    else value = '( ' + String(value) + ' )';
    this.chainArray.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position >= this.chainArray.length) {
          this.chainArray = [];
          throw new Error();
      };
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    str = '';
    this.chainArray.forEach(element => {
      str += element + '~~';
    });
    str = str.slice(0, -2);
    this.chainArray = [];
    return str;
  }
};

module.exports = chainMaker;
