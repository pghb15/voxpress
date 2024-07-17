import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  activeTab: string = 'inbox';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
