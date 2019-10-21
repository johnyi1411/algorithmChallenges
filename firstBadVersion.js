/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let start = 0;
      let mid = Math.floor(n / 2);
      while (true) {
        if (isBadVersion(mid)) {
          if (!isBadVersion(mid - 1) || mid === 0) {
            return mid;
          }
          n = mid;
        } else {
          if (isBadVersion(mid + 1)) {
            return mid + 1;
          }
          start = mid;
        }
        mid = Math.round((n + start) / 2);
      }
    };
};
