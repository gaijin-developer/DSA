"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
class ListItem {
    constructor(value) {
        this.itemValue = null;
        this.nextItem = null;
        this.previousItem = null;
        this.itemValue = value;
    }
    setNextItem(listItem) { }
    setPrevious(listItem) { }
}
exports.ListItem = ListItem;
