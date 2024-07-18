import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/sidenavbar/dashboard/dashboard.component';
import { MessagesComponent  } from './modules/sidenavbar/messages/messages.component';
import { ArchiveComponent } from './modules/sidenavbar/archive/archive.component';
import { AssignmentsComponent } from './modules/sidenavbar/assignments/assignments.component';
import { UsersComponent } from './modules/sidenavbar/users/users.component';
import { ProfilesComponent } from './modules/sidenavbar/profiles/profiles.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'assignments', component: AssignmentsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'profiles', component: ProfilesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  