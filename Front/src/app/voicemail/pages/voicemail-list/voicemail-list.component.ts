import { Component } from '@angular/core';
import { VoicemailService } from '../../services/voicemail.service';
import { Voicemail } from '../../models/voicemail';
import { UserService } from 'src/app/user/services/user.service';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-voicemail-list',
  templateUrl: './voicemail-list.component.html',
  styleUrls: ['./voicemail-list.component.css'],
})
export class VoicemailListComponent {
  userList: User[] = [];
  voicemailList: Voicemail[] = [];
  newVoicemail: Voicemail = new Voicemail();
  tempVoicemail: Voicemail = new Voicemail();
  creatingMode: boolean = true;
  voicemailToModify: Voicemail = new Voicemail();
  disableOwnerField: boolean = false; // Added property to control the disabling of owner field

  constructor(private voicemailService: VoicemailService, private userService: UserService) {
    this.getInboxVoicemails();
    this.getAllUsers();
  }

  getAllVoicemails() {
    this.voicemailService.getAll().subscribe((response: Voicemail[]) => {
      this.voicemailList = response;
    });
  }

  getAllUsers() {
    this.userService.getAll().subscribe((response: User[]) => {
      this.userList = response;
    });
  }

  deleteVoicemail(contactId: string) {
    if (confirm('Are you sure you want to archive this voicemail?')) {
      this.voicemailService.Delete(contactId).subscribe(() => {
        alert('Voicemail Archived Successfully');
        window.location.reload();
      });
    }
  }

  createVoicemail() {
    const newVoicemail = {
      contactId: this.tempVoicemail.contactId,
      date: this.tempVoicemail.date,
      phone: this.tempVoicemail.phone,
      language: this.tempVoicemail.language,
      status: 'Open',
      recordingUrl: this.tempVoicemail.recordingUrl,
      transcription: this.tempVoicemail.transcription,
      user: {
         id: this.tempVoicemail.user.id },
      type: this.disableOwnerField ? 'inbox' : 'assigned'
    };

    this.voicemailService.Create(newVoicemail).subscribe(() => {
      alert('Voicemail Created Successfully');
      window.location.reload();
    });
  }

  modifyVoicemail() {
    // Check if the owner is being changed from null to any value
    if (!this.disableOwnerField && this.voicemailToModify.user != 'Not Assigned' && this.tempVoicemail.user) {
      this.tempVoicemail.type = 'assigned';
    }
    Object.assign(this.voicemailToModify, this.tempVoicemail);

    this.voicemailService.Update(this.voicemailToModify).subscribe(() => {
      alert('Voicemail Updated Successfully');
      window.location.reload();
    });
  }

  getInboxVoicemails() {
    this.voicemailService.getInboxVoicemails().subscribe((response: Voicemail[]) => {
      this.voicemailList = response;
    });
  }

  openModel(voicemail: Voicemail = new Voicemail()) {
    this.creatingMode = voicemail.contactId === '';
    this.voicemailToModify = voicemail;
    this.tempVoicemail = { ...voicemail, user: { ...voicemail.user } };
    this.disableOwnerField = false; // Reset disableOwnerField on opening modal
  }

  archiveVoicemail(voicemail: Voicemail = new Voicemail()) {
    if (confirm('Are you sure you want to archive this voicemail?')) {
      // Set the voicemail to modify to the passed in voicemail
      this.voicemailToModify = voicemail;

      // Update the type to 'archived'
      this.voicemailToModify.type = 'archived';

      // Update the voicemail on the server
      this.voicemailService.Update(this.voicemailToModify).subscribe(() => {
        alert('Voicemail Archived Successfully');
        window.location.reload();
      });
    }
}

}
