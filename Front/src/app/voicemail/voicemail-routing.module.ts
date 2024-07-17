import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoicemailListComponent } from './pages/voicemail-list/voicemail-list.component';

const routes: Routes = [
  {
    path: '',
    component: VoicemailListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoicemailRoutingModule { }
