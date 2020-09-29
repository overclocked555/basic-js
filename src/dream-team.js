const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members) === false) return false;
    membersStrings = [];

    members.forEach((element) => {
      if (typeof element !== 'string') return;
      element = element.trim();
      if (element !== '') membersStrings.push(element.toUpperCase());
      });

    if (membersStrings.length === 0) return false;
    membersStrings.sort();
    commandName = '';
    for (let name of membersStrings) {
      commandName += name[0];
    }

    return commandName.toUpperCase();
    }