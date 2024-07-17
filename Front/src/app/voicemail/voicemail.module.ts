import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoicemailRoutingModule } from './voicemail-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VoicemailListComponent } from './pages/voicemail-list/voicemail-list.component';
import { UserModule } from "../user/user.module";
import { RoleModule } from "../role/role.module";
import { ArchivedVoicemailListComponent } from './pages/archive-voicemail-list/archive-voicemail-list.component';
import { AssignedVoicemailListComponent } from './pages/assigned-voicemail-list/assigned-voicemail-list.component';



@NgModule({
  declarations: [VoicemailListComponent, ArchivedVoicemailListComponent, AssignedVoicemailListComponent],
  imports: [
    CommonModule,
    VoicemailRoutingModule, HttpClientModule, FormsModule,
    UserModule,
    RoleModule,
],
  providers: [],
  bootstrap: [VoicemailListComponent, ArchivedVoicemailListComponent, AssignedVoicemailListComponent],
  exports: [VoicemailListComponent, ArchivedVoicemailListComponent, AssignedVoicemailListComponent]
})
export class VoicemailModule { }
