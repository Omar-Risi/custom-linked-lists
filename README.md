# Introduction
This is an implementation of linked lists using javascript. 
so here's a documentation for this class if you'd like to use it.


## List class methods 

### creating a new list

```javascript
let list = new List(); 
```

### append(value) 
adds a new node in last position in the list. 

```javascript
list.append("value_1"); //returns the new node
```
### prepend(value)
adds a new node in the first position in the list 

```javascript
list.prepend("value_3"); // returns the new node
```

### size()
returns the amount of items of the linked list

```javascript
// list = [Node, Node, Node];
list.size(); // returns 3
```

### head()
returns the first element in the list
```javascript
list.head(); // returns first element
```

### tail()
returns the last element in the list
```javascript
list.tail(); // returns last element
```

### at(index)
returns node at given index
```javascript
list.at(0); // returns first node
```

### pop()
removes last element from list

```javascript
list.pop(); // returns new list
```

### contains(value)
returns true if value is found within one of the nodes
```javascript
//list = [{value:"value1",pointer:1}, {value:"value_2", pointer:null}]
list.contains("value_1"); // returns true;
```

### find(value)
returns the index of the node containing the value (if it exists)
```javascript
// list = [{value:"value1", pointer:1}, {value:"value2", pointer:null}]
list.find("value_2"); // returns 1
```

### toString() 
returns the list in this format "{value:"value_1",pointer:1} -> {value:"value_2", pointer:null}";
```javascript
list.toString(); // returns list
```
