const BST = require('./BST');
// Write an algorithm that checks if a BST is balanced 
// (i.e., a tree where no 2 leaves differ in distance 
// from the root by more than 1).

const isBalanced = function(t) {
    if (!t) {
        return true;
    }

    const bstHeight = function(t) {
        // subtract 1 to cancel out root node
        if(!t) {
            return -1;
        }
        // fund sum of left branch
        let leftHeight = bstHeight(t.left);
        // find sum of right branch
        let rightHeight = bstHeight(t.right);
        
        // only return the largest of the two and add 1
        return Math.max(leftHeight, rightHeight) + 1;
    }

    if (!t.left && t.right) {
        if (bstHeight(t.right) > 1) {
            return false;
        }
    }

    if (t.left && !t.right) {
        if (bstHeight(t.left) > 1) {
            return false;
        }
    }

    if (t.left && t.right) {
        if (Math.abs(bstHeight(t.left) - bstHeight(t.right)) > 1) {
            return false;
        }
    }

    if (!isBalanced(t.left) || !isBalanced(t.right)) {
        return false;
    }

    return true;

}

let numbersBST = new BST();
numbersBST.insert(3);
numbersBST.insert(1);
numbersBST.insert(4);
numbersBST.insert(6);
numbersBST.insert(9);
numbersBST.insert(2);
numbersBST.insert(5);
// numbersBST.insert(7);

let lettersBST = new BST();

lettersBST.insert('E');
lettersBST.insert('A');
lettersBST.insert('S');
lettersBST.insert('Y');
lettersBST.insert('Q');
// lettersBST.insert('U');
// lettersBST.insert('E');
// lettersBST.insert('S');
// lettersBST.insert('T');
// lettersBST.insert('I');
// lettersBST.insert('O');
// lettersBST.insert('N');

console.log(isBalanced(lettersBST))

//          3
//        /  \
//       1    4
//        \     \
//         2     6
//              / \
//             5   9
//                /
//               7