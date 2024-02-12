/*
* 
* this is a demo using the List class which is 
* an implementation of LinkedList in JS
*
* */


import List from "./classes/list.js"

let dogsList = new List();
dogsList.push("Dog_1");
dogsList.push("Dog_2");
dogsList.push("Dog_3");

console.log(dogsList.toString())
