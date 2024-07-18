import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './modules/sidenav/sections/sidenav/sidenav.component';
import { BodyComponent } from './modules/sidenav/sections/body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, FontAwesomeModule, SidenavComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'voxpress-front';

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
