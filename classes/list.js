import Node from "./node.js";
export default class List {

  #nodes = [];
  
  #resetPositions() {

    for (let i = 0; i < this.size(); i++)
    {
      this.#nodes[i].setPointer(i+1);
      if (i+1 === this.size())
        this.#nodes[i].setPointer(null);
    }

    return this.#nodes;
  }

 
  // return length of the list
  size() {
    return this.#nodes.length;
  }

  // push node in the first position of list
  append(value) {

    let node = new Node(value, null);

    // if first node to push
    if (this.#nodes[this.size()-1] === undefined) {
      this.#nodes.push(node);
      return this.#nodes[this.size()-1];
    }

    // if not first node to push
    this.#nodes[this.size()-1].setPointer(this.size());
    this.#nodes.push(node);
    return this.#nodes[this.size()-1]
  }

  // push node in the last position of list
  prepend(value) {
    
    let node = new Node(value, 1);

    // if first node to push
    if (this.#nodes[this.size()-1] === undefined) {
      this.#nodes.push(node);
      return this.#nodes[this.size()-1]
    }

    // if not first node to push
    this.#nodes.splice(0,0,node);
    this.#resetPositions();
    
    return this.#nodes[0];
  }

  // return first node in the list
  head() {
    return this.#nodes[0];
  }

  // return last node in the list
  tail() {
    return this.#nodes[this.size()-1];
  }

  // return node at index
  at(index) {
    return this.#nodes[index];
  }

  // removes last node from list
  pop() {
    this.#nodes.pop();
    this.#nodes[this.size()-1].setPointer(null);
    return this.toString();
  }

   // returns true if value is in one of the nodes
   contains(value) {
    let found = false;
    for (let i = 0; i < this.size(); i++) {

      if (this.#nodes[i].getValue() === value)
      {
        found = true; 
        break;
      }
    }
    return found;
  }

  // return index of node containing value
  find(value) {
    
    var index = undefined; 

    for (let i = 0; i < this.size(); i++) {
      
      if (this.#nodes[i].getValue() === value)
      {
        index = i;
        break;
      }
    }

    if (index  === undefined)
      return "not found!";

    return index;
  }

  // shows list in this format (value_1) -> (value_2) -> null
  toString() {
    let resultString  = "";
    for(let i = 0; i < this.size(); i++) {
      resultString += `${this.#nodes[i].toString()}`;
      if (i !== this.size()-1) 
        resultString += " -> "
    } 
    return resultString;
  }
}

