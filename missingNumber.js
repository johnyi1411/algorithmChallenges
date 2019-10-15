var missingNumber = function(nums) {
  let numsAccumulator = 0;
  let fibonacci = 0;
  nums.forEach((num, i) => {
    numsAccumulator += num;
    fibonacci += i + 1;
  });
  return fibonacci - numsAccumulator;
};