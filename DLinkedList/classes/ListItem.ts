import { ListItemInterface } from "../interface/ListItemInterface";

export class ListItem implements ListItemInterface {
  itemValue: any = null;
  nextItem: any = null;
  previousItem: any = null;

  constructor(value: any) {
    this.itemValue = value;
  }

  setNextItem(listItem: ListItem) {}
  setPrevious(listItem: ListItem) {}
}
