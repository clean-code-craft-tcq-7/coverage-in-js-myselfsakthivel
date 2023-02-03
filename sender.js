function sendToController(breachType) {
  const header = 0xfeed;
  console.log(`${header}, ${breachType}`);
}

function sendToEmail(breachType) {
  const recepient = 'a.b@c.com';
  let alertTexts = {
    'TOO_LOW': 'too low',
    'NORMAL': 'normal',
    'TOO_HIGH': 'too high'
  };
  
  console.log(`To: ${recepient}`);
  console.log(`Hi, the temperature is ${alertTexts[breachType]}`);
}

module.exports = {sendToController, sendToEmail};
