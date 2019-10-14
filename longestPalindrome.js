var longestPalindrome = function(s) {
  let result = s.length;
  let letterCount = {};
  for (let i = 0; i < result; i++) {
    if (letterCount[s[i]]) {
      letterCount[s[i]]++;
    } else {
      letterCount[s[i]] = 1;
    }
  }
  Object.values(letterCount).forEach((count) => {
    if (count % 2 > 0) {
      result--;
    }
  });
  result = result === s.length ? result : result + 1;
  return result;
};