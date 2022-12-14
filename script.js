class LinkedList {
  constructor() {
    this.head = null;
    this.head.next = null;
    this.size = 0;
  }
  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current = node;
    }
    this.size++;
  }
  prepend(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.size++;
  }
  size() {
    return this.size;
  }
  head() {
    return this.head;
  }
  tail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  pop() {
    let previousLastNode = this.head;
    while (previousLastNode.next.next != null) {
      previousLastNode = previousLastNode.next;
    }
    previousLastNode.next = null;
    this.size--;
  }
  contains(value) {
    let containsValueNode = this.head;
    while (containsValueNode) {
      if (containsValueNode.value == value) {
        return true;
      } else {
        containsValueNode = containsValueNode.next;
      }
    }
    return false;
  }
  find(value) {
    let findNode = this.head;
    let counter = 0;
    while (findNode) {
      if (findNode.value == value) {
        return counter;
      } else {
        counter++;
        findNode = findNode.next;
      }
    }
    return null;
  }
  toString() {
    let stringNode = this.head;
    for (let i = 0; i <= this.size; i++) {
      console.log(stringNode.value);
      stringNode = stringNode.next;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
