import { expect } from 'chai';
import bstFromPreorder from './construct-binary-search-tree-from-preorder-traversal';
import preorderTraversal from '../helpers/preoder-traversal';
import TreeNode from '../helpers/tree-node';
describe('BST From Preorder Traversal', function () {
  it('should return null for empty traversal', () => {
    expect(bstFromPreorder([])).to.equal(null);
  });

  it('input should match traversed (preorder) output', () => {
    const inputs = [[15, 13, 12, 18], [15], [1, 2, 3], [8, 5, 1, 7, 10, 12]];
    inputs.forEach((input) => {
      const root: TreeNode = bstFromPreorder(input);
      expect(preorderTraversal(root)).to.deep.equal(input);
    });
  });
});
