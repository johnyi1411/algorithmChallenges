/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length <= 1) {
    return true;
  }
    
  if (nums[0] === 0) {
    return false;
  }
    
  let zeroCounter = 0;
  let result = true;
  const length = nums.length - 1;
  
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= length && i !== length) {
      return true;
    }
    if (zeroCounter) {
      if (nums[i] > zeroCounter) {
        zeroCounter = 0;
        result = true;
      } else {
        zeroCounter++;
      }
    } else if (nums[i] === 0) {
      result = false;
      zeroCounter++;
    }
  }
  return result;
};
