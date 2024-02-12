export default class Node {

  constructor(node_value, node_pointer) {
    this.value = node_value; 
    this.pointer = node_pointer;
  }

  toString() {
    return `{value:${this.value}, pointer:${this.pointer}}`;
  }

  setPointer(node_pointer) {
    this.pointer = node_pointer;
    return this.pointer;
  }

  setValue(node_value) {
    this.value = node_value;
    return this.value;
  }

  getValue() {
    return this.value;
  }
}

