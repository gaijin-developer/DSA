import { LinkedList } from "./classes/LinkedList";

let foodStuff = new LinkedList();

foodStuff.push("banana");
foodStuff.push("apple");
foodStuff.push("grapes");
foodStuff.push("strawberry");

const lastFoodItem = foodStuff.pop();
const shiftedVal = foodStuff.shift();
foodStuff.unshift("pepper");

console.log("popped", lastFoodItem);

console.log("shifted", shiftedVal);

console.log(foodStuff);
console.log(foodStuff.head);
foodStuff.showItems();
console.log(foodStuff.tail);
