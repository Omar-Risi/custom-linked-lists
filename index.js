/*
* 
* this is a demo using the List class which is 
* an implementation of LinkedList in JS
*
* */


import List from "./classes/list.js"

let dogsList = new List();
dogsList.append("Dog_1");
dogsList.append("Dog_2");
dogsList.append("Dog_3");

console.log(dogsList.toString())
