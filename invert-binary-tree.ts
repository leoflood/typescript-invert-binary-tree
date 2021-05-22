import deepCopy from './deep-copy';

export interface Tree {
  left: Tree;
  root: number;
  right: Tree;
}

export function invertBinaryTree(tree: Tree) {
  // We deep clone the tree to do not change the original
  const newTree = deepCopy(tree);

  return; // TODO
}
