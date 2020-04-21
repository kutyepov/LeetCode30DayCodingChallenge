import { expect } from 'chai';
import TreeNode from './tree-node';
import preorderTraversal from './preoder-traversal';
describe('Preoder Traversal', function () {
  it('should return [5,1,8] for 1 <- 5 -> 8 tree', () => {
    const node = new TreeNode(5);
    node.left = new TreeNode(1);
    node.right = new TreeNode(8);

    expect(preorderTraversal(node)).to.deep.equal([5, 1, 8]);
  });

  it('should return [8,5,1,7,10,9,12] for more complex tree', () => {
    const node = new TreeNode(8);
    node.left = new TreeNode(5);
    node.right = new TreeNode(10);
    node.left.left = new TreeNode(1);
    node.left.right = new TreeNode(7);
    node.right.left = new TreeNode(9);
    node.right.right = new TreeNode(12);
    /***********************
          (   8   )
         /        \
       (5)       (10)
      /  \       /   \
    (1)   (7)  (9) (12)
    ***********************/
    expect(preorderTraversal(node)).to.deep.equal([8, 5, 1, 7, 10, 9, 12]);
  });

  it('should return [] for empty node', () => {
    expect(preorderTraversal(null)).to.deep.equal([]);
  });
});
