var zigzagLevelOrder = function(root) {
  if (!root) {
    return [];
  }
  let result = [];
  let reverse = false;
  let currentLevel = [root];
  let currentValues = [];
  let nextLevel = [];
  let currentNode = null;
  while (currentLevel.length > 0) {
    currentNode = currentLevel.shift();
    currentValues.push(currentNode.val);
    if (currentNode.left) {
      nextLevel.push(currentNode.left);
    }
    if (currentNode.right) {
      nextLevel.push(currentNode.right);
    }
    if (currentLevel.length === 0) {
      if (reverse) {
        currentValues = currentValues.reverse();
      }
      result.push([].concat(currentValues));
      currentValues = [];
      currentLevel = nextLevel;
      nextLevel = [];
      reverse = !reverse;
    }
  }
  return result;
};