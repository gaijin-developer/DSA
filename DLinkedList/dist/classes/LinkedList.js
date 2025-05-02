"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const ListItem_1 = require("./ListItem");
class LinkedList {
    constructor() {
        this.len = 0;
        this.head = null;
        this.tail = null;
    }
    showItems() {
        let currentItem = this.head;
        while (currentItem) {
            console.log(currentItem.itemValue);
            currentItem = currentItem.nextItem;
        }
    }
    push(value) {
        let newNode = new ListItem_1.ListItem(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
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
    shift() {
        let shiftedValue = this.head;
        this.head = shiftedValue.nextItem;
        this.head.previousItem = null;
        shiftedValue.nextItem = null;
        this.len -= 1;
        return shiftedValue;
    }
    unshift(value) {
        let newNode = new ListItem_1.ListItem(value);
        let lastHead = this.head;
        this.head = newNode;
        this.head.nextItem = lastHead;
        this.len += 1;
    }
    getLenght() {
        return this.len;
    }
}
exports.LinkedList = LinkedList;
