import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sections/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './sections/body/body.component';
import { ArchiveComponent } from './sections/archive/archive.component';
import { AssignmentsComponent } from './sections/assignments/assignments.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { InboxComponent } from './sections/inbox/inbox.component';
import { ProfilesComponent } from './sections/profiles/profiles.component';
import { UsersComponent } from './sections/users/users.component';



@NgModule({
  declarations: [ArchiveComponent, AssignmentsComponent, DashboardComponent, InboxComponent, ProfilesComponent, UsersComponent ],
  imports: [
    CommonModule, SidenavRoutingModule, RouterModule
  ]
})
export class SidenavModule { }
