export default class Node {

  constructor(node_value, node_pointer) {
    this.value = node_value; 
    this.pointer = node_pointer;
  }

  setPointer(node_pointer) {
    this.pointer = node_pointer;
    return this.pointer;
  }

  setValue(node_value) {
    this.value = node_value;
    return this.value;
  }
}
