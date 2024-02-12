import Node from "./node.js";
export default class List {

  #nodes = [];
  
  #resetPositions() {

  }

  length() {
    return this.#nodes.length;
  }
  
  // push node in the first position of list
  append(value) {

    let node = new Node(value, null);

    // if first node to push
    if (this.#nodes[this.length()-1] === undefined) {
      this.#nodes.push(node);
      return this.#nodes[this.length()-1];
    }

    // if not first node to push
    this.#nodes[this.length()-1].setPointer(this.length());
    this.#nodes.push(node);
    return this.#nodes[this.length()-1]
  }

  // push node in the last position of list
  prepend(value) {
    
  }

  // return length of the list
  size() {

  }

  // return first node in the list
  head() {

  }

  // return last node in the list
  tail() {

  }

  // return node at index
  at(index) {

  }

  // removes last node from list
  pop() {

  }

  // returns true if value is in one of the nodes
   contains(value) {

  }

  // return index of node containing value
  find(value) {

  }

  // shows list in this format (value_1) -> (value_2) -> null
  toString() {
    let resultString  = "";
    for(let i = 0; i < this.length(); i++) {
      resultString += `${this.#nodes[i].toString()}`;
      if (i !== this.length()-1) 
        resultString += " -> "
    } 
    return resultString;
  }
}
