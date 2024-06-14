const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

function compareToHead(toHead1, toHead2, val, val2) {

    console.time('addToHeadLinkedList');
    toHead1(val);
    toHead1(val2);
    console.timeEnd('addToHeadLinkedList');

    console.time('addToHeadDoublyLinkedList');
    toHead2(val);
    toHead2(val2);
    console.timeEnd('addToHeadDoublyLinkedList');


}

function compareToTail(toTail1, toTail2, val, val2) {
    console.time('addToTailLinkedList');
    toTail1(val);
    toTail1(val2);
    console.timeEnd('addToTailLinkedList');

    console.time('addToTailDoublyLinkedList');
    toTail2(val);
    toTail2(val2);
    console.timeEnd('addToTailDoublyLinkedList');
}

const linkedList = new LinkedList();
const doublyList = new DoublyLinkedList();

compareToHead(() => linkedList.addToHead, () => doublyList.addToHead, 5, 6);

compareToTail(() => linkedList.addToHead, () => doublyList.addToHead, 5, 6);

// addToHeadLinkedList: 0.142ms
// addToHeadDoublyLinkedList: 0.04ms
// addToTailLinkedList: 0.127ms
// addToTailDoublyLinkedList: 0.043ms
