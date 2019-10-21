var intersection = function(nums1, nums2) {
  const obj1 = {};
  for (let i = 0; i < nums1.length; i++) {
    obj1[nums1[i]] = true;
  }
  
  const obj2 = {};
  for (let i = 0; i < nums2.length; i++) {
    obj2[nums2[i]] = true;
  }
    
  const result = [];
  
  for (let key in obj1) {
    if (obj2[key]) {
      result.push(Number(key));
    }
  }
    
  return result;
};
