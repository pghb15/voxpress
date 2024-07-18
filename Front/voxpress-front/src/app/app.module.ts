import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './modules/sidenavbar/body/body.component';
import { SidenavComponent } from './modules/sidenavbar/sidenav/sidenav.component';
import { DashboardComponent } from './modules/sidenavbar/dashboard/dashboard.component';
import { VoicemailModule } from './modules/voicemail/voicemail.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './modules/sidenavbar/messages/messages.component';
import { ArchiveComponent } from './modules/sidenavbar/archive/archive.component';
import { AssignmentsComponent } from './modules/sidenavbar/assignments/assignments.component';
import { UsersComponent } from './modules/sidenavbar/users/users.component';
import { ProfilesComponent } from './modules/sidenavbar/profiles/profiles.component';





@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    MessagesComponent,
    ArchiveComponent,
    AssignmentsComponent,
    UsersComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    RoleModule,
    VoicemailModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
