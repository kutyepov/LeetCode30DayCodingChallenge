import { expect } from 'chai';
import TreeNode from './tree-node';
describe('Tree Node', function () {
  it('should create a node with value 5 and two empty leaves', () => {
    const node = new TreeNode(5);
    expect(node.val).to.equal(5);
    expect(node.left).to.equal(null);
    expect(node.right).to.equal(null);
  });
});
