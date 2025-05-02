import { ListItem } from "./ListItem";
import { LinkedListInterface } from "../interface/LinkedListInterface";

export class LinkedList implements LinkedListInterface {
  len = 0;
  head: any = null;
  tail: any = null;

  showItems() {
    let currentItem = this.head;

    while (currentItem) {
      console.log(currentItem.itemValue);
      currentItem = currentItem.nextItem;
    }
  }

  push(value: any): void {
    let newNode = new ListItem(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let lastItem = this.tail;
      this.tail = newNode;
      lastItem.nextItem = newNode;
      this.tail.previousItem = lastItem;
    }
    this.len += 1;
  }

  pop() {
    let poppedItem = this.tail;
    this.tail = this.tail.previousItem;
    this.tail.nextItem = null;

    this.len -= 1;

    poppedItem.nextItem = null;
    poppedItem.previousItem = null;

    return poppedItem;
  }

  shift(): ListItem {
    let shiftedValue = this.head;
    this.head = shiftedValue.nextItem;
    this.head.previousItem = null;

    shiftedValue.nextItem = null;
    this.len -= 1;
    return shiftedValue;
  }

  unshift<T>(value: T) {
    let newNode = new ListItem(value);

    let lastHead = this.head;

    this.head = newNode;

    this.head.nextItem = lastHead;

    this.len += 1;
  }

  getLenght(): number {
    return this.len;
  }
}
