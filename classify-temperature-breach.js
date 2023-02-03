function classifyTempBreach(coolingType, temperatureInC) {
  let lowerLimit = 0;
  let upperLimit = 0;
  let coolingTypeObj = {
    'PASSIVE_COOLING': 35,
    'MED_ACTIVE_COOLING': 40,
    'HI_ACTIVE_COOLING': 45
  };
  
  if(Object.prototype.hasOwnProperty.call(coolingTypeObj, 'coolingType')){
    upperLimit = coolingTypeObj[coolingType];
  }
  
  return inferBreach(temperatureInC, lowerLimit, upperLimit);
}

function inferBreach(value, lowerLimit, upperLimit) {
  if (value < lowerLimit) {
    return 'TOO_LOW';
  }
  if (value > upperLimit) {
    return 'TOO_HIGH';
  }
  return 'NORMAL';
}

module.exports = {classifyTempBreach, inferBreach};
