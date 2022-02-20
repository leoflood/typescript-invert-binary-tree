export interface Tree {
  left: Tree;
  root: number;
  right: Tree;
}

export function invertBinaryTree(tree: Tree) {
  const left = tree.left;
  const right = tree.right;

  // Invert the current branch
  tree.left = right;
  tree.right = left;

  // If left branch has other branches then invert them too
  if (left) {
    invertBinaryTree(left);
  }

  // If right branch has other branches then invert them too
  if (right) {
    invertBinaryTree(right);
  }

  // Return the inverted tree
  return tree;
}
