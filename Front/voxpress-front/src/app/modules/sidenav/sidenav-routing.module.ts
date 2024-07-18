import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { InboxComponent } from './sections/inbox/inbox.component';
import { ArchiveComponent } from './sections/archive/archive.component';
import { AssignmentsComponent } from './sections/assignments/assignments.component';
import { UsersComponent } from './sections/users/users.component';
import { ProfilesComponent } from './sections/profiles/profiles.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'assignments', component: AssignmentsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'profiles', component: ProfilesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
