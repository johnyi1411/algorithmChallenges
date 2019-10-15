/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const s1Obj = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1Obj[s1[i]]) {
      s1Obj[s1[i]]++;
    } else {
      s1Obj[s1[i]] = 1;
    }
  }
  
  for (let i = 0; i < s2.length; i++) {
    if (s1Obj[s2[i]]) {
      const s2Obj = Object.assign({}, s1Obj);
      for (let j = i; j - i < s1.length; j++) {
        if (!s2Obj[s2[j]]) {
          break;
        }
        s2Obj[s2[j]]--;
      }
      // if (Object.values(s2Obj).reduce((acc, val) => acc + val) === 0) {
      //   return true;
      // }
    }
  }
  return false;
};
