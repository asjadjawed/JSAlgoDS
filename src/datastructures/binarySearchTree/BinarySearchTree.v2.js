class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const insertNode = new Node(value);

    if (this.root === null) {
      this.root = insertNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (insertNode.value < current.value) {
        if (current.left === null) {
          current.left = insertNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (insertNode.value > current.value) {
        if (current.right === null) {
          current.right = insertNode;
          return this;
        } else {
          current = current.right;
        }
      } else return this;
    }
  }

  find(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) return current;
      else if (value > current.value) current = current.right;
      else current = current.left;
    }

    return null;
  }
}

module.exports = { BinarySearchTree, Node };