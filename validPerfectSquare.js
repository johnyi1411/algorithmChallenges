/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  for (let i = 1; i <= num; i++) {
    if ((num / i) === i) {
      return true;
    }
  }
  return false;
};
