import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  inboxList: any;
  mailList: any;
  sendList: any;
  draftList: any;
  trashList: any;
  setMessage: any
  selectType = 'inbox';
  constructor(private data: DataServiceService) { }

  ngOnInit(): void {

    let selected = this.data.getSelectedMessage();
    this.selectType = selected.type;
    this.setMessage = selected.message;

  }

  ngDoCheck(): void {
    
    this.mailList = (this.data.getSelectedItem()).list;
    this.setMessage = (this.data.getSelectedMessage()).message;
    this.selectType = (this.data.getSelectedMessage()).type;
    if (this.setMessage) this.setMessage.unread = false;

  }

  chooseItem(event: any) {

    event.unread = false;
    this.setMessage = event;

  }

  trash(item: any, type: string) { 
    if (type != 'trash') this.data.addTrashValue(item);
  }
  
}
