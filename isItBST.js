// Binary search trees take the concept of binary trees 
// 1 step further. All of the nodes in the left-hand 
// branch of a node are guaranteed to have lower values 
// than the node itself, and all of the nodes in the 
// right-hand branch of a node are guaranteed to have a 
// higher value than the node itself.

// Write an algorithm to check whether an arbitrary binary 
// tree is a binary search tree, assuming the tree does 
// not contain duplicates.

const BST = require('./BST');

const isItBST = function(t) {
    if (!t.left && !t.right) {
        return true;
    }

    if (t.left) {
        if (t.key > t.left.key) {
            return isItBST(t.left)
        }
        return false
    }

    if (t.right) {
        if (t.key < t.right.key) {
            return isItBST(t.right)
        }
        return false;
    }
}

let numbersBST = new BST();
numbersBST.insert(3);
numbersBST.insert(1);
numbersBST.insert(4);
numbersBST.insert(6);
numbersBST.insert(9);
numbersBST.insert(2);
numbersBST.insert(5);
numbersBST.insert(7);

let lettersBST = new BST();

lettersBST.insert('E');
lettersBST.insert('A');
lettersBST.insert('S');
lettersBST.insert('Y');
lettersBST.insert('Q');
lettersBST.insert('U');
lettersBST.insert('E');
lettersBST.insert('S');
lettersBST.insert('T');
lettersBST.insert('I');
lettersBST.insert('O');
lettersBST.insert('N');

console.log(isItBST(lettersBST))

//          3
//        /  \
//       1    4
//        \     \
//         2     6
//              / \
//             5   9
//                /
//               7