const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    if (direction === false) this.reverseDirection = true;
    else this.reverseDirection = false;
  }
  
  static verifyParams (message, key) {
    if (message === undefined || key === undefined) throw new Error();
  }

  encrypt(message, key) {
    VigenereCipheringMachine.verifyParams(message, key);
    if (this.reverseDirection) message = message.split('').reverse().join('');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let newMessage = '';
    let keyCounter = 0;
    for (var charCounter = 0; charCounter < message.length; charCounter++) {
      if (/^[A-Z]$/.test(message[charCounter])) {
        let code = (message.charCodeAt(charCounter) % 65 + key.charCodeAt(keyCounter) % 65) % 26 + 65;
        newMessage += String.fromCharCode(code);
        keyCounter = (keyCounter + 1) % key.length;
      } else {
        newMessage += message[charCounter];
      }      
    };
    return newMessage;
  }    

  decrypt(message, key) {
    VigenereCipheringMachine.verifyParams(message, key);
    if (this.reverseDirection) message = message.split('').reverse().join('');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let newMessage = '';
    let keyCounter = 0;
    for (var charCounter = 0; charCounter < message.length; charCounter++) {
      if (/^[A-Z]$/.test(message[charCounter])) {
        let code = (26 + message.charCodeAt(charCounter) % 65 - key.charCodeAt(keyCounter) % 65) % 26 + 65;
        newMessage += String.fromCharCode(code);
        keyCounter = (keyCounter + 1) % key.length;
      } else {
        newMessage += message[charCounter];
      }      
    };
    return newMessage;
  }
}

module.exports = VigenereCipheringMachine;
