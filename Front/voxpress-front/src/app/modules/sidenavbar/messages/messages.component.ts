import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  activeTab: string = 'inbox';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
