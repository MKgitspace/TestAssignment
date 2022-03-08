import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  inbox: any;
  send: any;
  draft: any;
  trash: any;
  maildata: any;
  constructor(private data: DataServiceService) { }

  ngOnInit(): void {
    this.maildata = this.data.getData();
    this.inbox = this.maildata.inbox;
    this.send = this.maildata.send;
    this.draft = this.maildata.draft;
    this.trash = this.maildata.trash;

  }
  selectOption(option: any, type: string) {

    this.data.setSelectedItem(option, type);
    this.data.onSelectMessage(option[0], type);
    this.data.setIndex(NaN);
  }


}
