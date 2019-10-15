var sumNumbers = function(root) {
  if (!root) {
    return 0;
  }
  let result = 0;
  const DFS = (node, runningNumber) => {
    if (!node.left && !node.right) {
      result += Number(runningNumber + node.val);
      return;
    }
    if (node.left) {
      DFS(node.left, runningNumber + node.val);
    }
    if (node.right) {
      DFS(node.right, runningNumber + node.val);
    }
  };
  DFS(root, '');
  return result;
};