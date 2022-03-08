import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  inboxList: any;
  mailList: any;
  sendList: any;
  draftList: any;
  trashList: any;
  setMailItem: any
  selectType='inbox';
  index:any;
  constructor(
    private data: DataServiceService
  ) {   }

  ngOnInit(): void {

    let selected = this.data.getSelectedMessage();
    this.mailList = (this.data.getData()).inbox;
    this.selectType = selected.type;
    this.setMailItem = this.mailList[0];
    
  }

  ngDoCheck(): void {

    this.mailList = (this.data.getSelectedItem()).list;
    this.selectType = (this.data.getSelectedItem()).type;;
    if(this.mailList.length==0) this.setMailItem;
    this.index = this.data.getIndex();

  }
  
  chooseItem(event: any,) {
    this.index=event.id;
    this.data.setIndex(this.index);
    event.unread=false;
    this.setMailItem = event;
    this.data.onSelectMessage(event,this.selectType);
    let statusIndex= this.mailList.findIndex((item:any)=>item.id==event.id);
    this.mailList[statusIndex]=event;

  }
}
