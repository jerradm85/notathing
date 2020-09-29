/* eslint-disable no-console */
/* eslint-disable strict */
class BinarySearchTree {
  constructor(key = null){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function createBalancedBST(arr, start=0, end=arr.length){
  if(start >= end){
    return null;
  }
  const middleIndex = Math.floor((end+start)/2);
  const value = arr[middleIndex];
  const node = new BinarySearchTree(value);

  node.left = createBalancedBST(arr,start,middleIndex);
  node.right = createBalancedBST(arr,middleIndex+1,end);
  return node;

}

console.log(createBalancedBST([1,2,3,5,7,9,11]));