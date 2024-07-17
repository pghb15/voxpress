import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutingModule } from './role-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RoleListComponent } from './pages/role-list/role-list.component';



@NgModule({
  declarations: [RoleListComponent],
  imports: [
    CommonModule,
    RoleRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [RoleListComponent],
  exports: [RoleListComponent]
})
export class RoleModule { }
