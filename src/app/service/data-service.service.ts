import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as mailData from './data.json';
// import data from './mailData.json'; 
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  data: any = mailData;
  selectedItem: any = this.data.inbox;
  selectType = 'inbox';
  selectedMessage: any = this.data.inbox[0];
  list: any = this.data.inbox;
  index: any;
  constructor(private http: HttpClient) { }
  getData() {
    return this.data;

  }
  setSelectedItem(item: any, type: string) {
    this.selectedItem = item;
    this.selectType = type;
  }

  getSelectedItem() {
    return { list: this.selectedItem, type: this.selectType };
  }

  setIndex(id: any) {
    return this.index = id;
  }

  getIndex(){return this.index}

  addTrashValue(item: any) {
    this.data.trash.push(item);
    if (this.selectType == 'inbox') {
      let statusIndex = this.data.inbox.findIndex((value: any) => value.id == item.id);
      this.data.inbox.splice(statusIndex, 1);
      this.selectedMessage = this.data.inbox[0];
    } else if (this.selectType == 'send') {
      let statusIndex = this.data.send.findIndex((value: any) => value.id == item.id);
      this.data.send.splice(statusIndex, 1);
    } else if (this.selectType == 'draft') {
      let statusIndex = this.data.draft.findIndex((value: any) => value.id == item.id);
      this.data.draft.splice(statusIndex, 1);
    }

  }

  onSelectMessage(item: any, type: any) {

    this.selectedMessage = item;
    this.selectType = type;
  }
  getSelectedMessage() {
    return { message: this.selectedMessage, type: this.selectType };
  }
}
