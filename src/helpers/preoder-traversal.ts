import TreeNode from './tree-node';

export default function preorderTraversal(root: TreeNode): Array<number> {
  const result = [];

  (function traverse(node: TreeNode) {
    if (node === null) {
      return null;
    }
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  })(root);

  return result;
}
