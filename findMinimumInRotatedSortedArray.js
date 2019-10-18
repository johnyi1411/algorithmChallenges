/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let end = nums.length - 1;
  let i = Math.floor(end / 2);
  let start = 0;
  while (true) {
    const numsNext = nums[i + 1] === undefined ? nums[0] : nums[i + 1];
    const numsPrev = nums[i - 1] === undefined ? nums[nums.length - 1] : nums[i - 1];
    if (nums[i] < nums[end]) {
      if (nums[i] <= numsPrev) {
        return nums[i];
      }
      end = Math.floor((end + i) / 2);
    } else {
      if (nums[i] >= numsNext) {
        return numsNext;
      }
      start = i;
    }
    i = Math.floor((end + start) / 2);
  }
};
