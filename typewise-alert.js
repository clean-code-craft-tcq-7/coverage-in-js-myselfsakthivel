const tempClassifier = require('classify-temperature-breach');
const sender = require('sender');

function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  const breachType = tempClassifier.classifyTempBreach(batteryChar['coolingType'], temperatureInC);
  if (alertTarget == 'TO_CONTROLLER') {
    sender.sendToController(breachType);
  } else if (alertTarget == 'TO_EMAIL') {
    sender.sendToEmail(breachType);
  }
}

module.exports = {checkAndAlert};
