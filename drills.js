const BinarySearchTree = require('./bst')
// const BinarySearchTree = require('print-bst');

// 3.
const BST = new BinarySearchTree();
[3,1,4,6,9,2,5,7].forEach(num => {
  BST.insert(num,num);
})
// console.log(BST.print());

// const BST2 = new BinarySearchTree();
// "EASYQUESTION".split("").forEach(num => {
//   BST2.insert(num);
// })

// console.log(BST2.print());


// time complexity O(2^n)
function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

// console.log(tree(BST.left));
// console.log(tree(BST.right));
// console.log(tree(BST));


// this doesn't work yet
// function bstHeight() {
//   const right = BST.right._findMin();
//   const left = BST.left._findMin();

//   let rCount = 0;
//   let lCount = 0;

//   while(right.)
// }

// console.log(BST.left._findMin());
// console.log(BST.right._findMin());
