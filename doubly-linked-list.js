class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here

    const node = new DoublyLinkedListNode(val);

    if (!this.head) {
      this.tail = node;
      this.head = this.tail
    } else {
      this.head.prev = node;

      node.next = this.head;

      this.head = node;
    }

    this.length++;
  }

  addToTail(val) {
    // Your code here

    const node = new DoublyLinkedListNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;

      node.prev = this.tail;

      this.tail = node;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
