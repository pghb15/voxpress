import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './pages/user-list/user-list.component';




@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserRoutingModule, HttpClientModule, FormsModule, 
  ],
  providers: [],
  bootstrap: [UserListComponent],
  exports: [UserListComponent]
})
export class UserModule { }
