import { Tree, invertBinaryTree } from './invert-binary-tree';

test('hola', () => {
  const tree: Tree = {
    left: {
      left: {
        left: null,
        root: 4,
        right: null,
      },
      root: 2,
      right: {
        left: null,
        root: 5,
        right: null,
      },
    },
    root: 1,
    right: {
      left: null,
      root: 3,
      right: {
        left: null,
        root: 6,
        right: null,
      },
    },
  };

  const invertedTree: Tree = {
    left: {
      left: {
        left: null,
        root: 6,
        right: null,
      },
      root: 3,
      right: null,
    },
    root: 1,
    right: {
      right: {
        left: null,
        root: 4,
        right: null,
      },
      root: 2,
      left: {
        left: null,
        root: 5,
        right: null,
      },
    },
  };

  expect(invertBinaryTree(tree)).toEqual(invertedTree);
});
