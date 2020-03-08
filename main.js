const BST = require('./BST')

function main() {
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

    return numbersBST

}
console.log(main())