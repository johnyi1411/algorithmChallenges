/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bull = 0;
  let secretCount = {};
  let guessCount = {};
  let length = secret.length;
  for (let i = 0; i < length; i++) {
    if (secret[i] === guess[i]) {
      bull++;
    } else {
      if (secretCount[secret[i]]) {
        secretCount[secret[i]]++;
      } else {
        secretCount[secret[i]] = 1;
      }
        
      if (guessCount[guess[i]]) {
        guessCount[guess[i]]++;
      } else {
        guessCount[guess[i]] = 1;
      }
    }
  }
  
  let cow = 0;
  for (let key in guessCount) {
    if (secretCount[key]) {
      cow += secretCount[key] > guessCount[key] ? guessCount[key] : secretCount[key];
    }
  }
  return `${bull}A${cow}B`
};
