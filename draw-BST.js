// Given the data 3,1,4,6,9,2,5,7, if you were to insert this 
// into an empty binary search tree, what would the tree look 
// like? (Draw the tree, no coding needed here.)

//          3
//        /  \
//       1    4
//        \     \
//         2     6
//              / \
//             5   9
//                /
//               7

// Draw the BST with the keys - E A S Y Q U E S T I O N
// 
//                  E
//            /           \
//           A             S
//                      /    \
//                     Q      Y
//                   /       /
//                  E       U 
//                   \     /
//                    I   T
//                     \
//                      O
//                     /
//                    N

// Show how the above trees would look like 
// if you deleted the root of each tree. 
// (Draw the trees, no coding needed here.)

//           4
//        /    \
//       1      6
//        \    / \
//         2   5  9
//               /
//              7

//                  Q
//            /         \
//            A          S
//              \         \
//               I         Y
//                \       /
//                 O     U 
//                /     /
//               N     T

// Without running this code in your code editor, 
//explain what the following program does. Show 
// with an example the result of executing this 
// program. What is the runtime of this algorithm?

// Function accepts a tree as an argument
function tree(t){
    // If tree/node does not exist return 0
    if(!t){
        return 0;
    }
    // Otherwise pass the left branch to tree function
    // Return the value of the current node
    // And pass the right branch to tree function
    return tree(t.left) + t.value + tree(t.right)
}

// If you were to pass the below BST into this function
// You would get the sum of all the values in this tree
// If the values were the same as the keys, output: 37

//          3
//        /  \
//       1    4
//        \     \
//         2     6
//              / \
//             5   9
//                /
//               7