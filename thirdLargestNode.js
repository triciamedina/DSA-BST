// Write an algorithm to find the 3rd largest 
// node in a binary search tree.

const BST = require('./BST');

const thirdLargestNode = function(t) {
    let ordered = [];
    function inOrder(t){
        if(t) {
            inOrder(t.left);
            ordered.push(t.key);
            inOrder(t.right);
        }
    }

    inOrder(t);
    return ordered.slice(-3, -2)[0]
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

console.log(thirdLargestNode(lettersBST))

//          3
//        /  \
//       1    4
//        \     \
//         2     6
//              / \
//             5   9
//                /
//               7