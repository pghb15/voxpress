import { Component } from '@angular/core';
import { VoicemailService } from '../../services/voicemail.service';
import { Voicemail } from '../../models/voicemail';
import { UserService } from 'src/app/user/services/user.service';
import { User } from 'src/app/user/models/user';

@Component({
  selector: 'app-assigned-voicemail-list',
  templateUrl: './assigned-voicemail-list.component.html',
  styleUrls: ['./assigned-voicemail-list.component.css'],
})
export class AssignedVoicemailListComponent {
  userList: User[] = [];
  voicemailList: Voicemail[] = [];
  newVoicemail: Voicemail = new Voicemail();
  tempVoicemail: Voicemail = new Voicemail();
  creatingMode: boolean = true;
  voicemailToModify: Voicemail = new Voicemail();
  disableOwnerField: boolean = false; // Added property to control the disabling of owner field
  currentPage: number = 1; // Current page number
  pageSize: number = 10; // Number of items per page

  constructor(private voicemailService: VoicemailService, private userService: UserService) {
    this.getAssignedVoicemails();
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
    if (this.tempVoicemail.status == 'Resolved') {
      this.tempVoicemail.type = 'archived';
    }

    Object.assign(this.voicemailToModify, this.tempVoicemail);

    this.voicemailService.Update(this.voicemailToModify).subscribe(() => {
      alert('Voicemail Updated Successfully');
      window.location.reload();
    });
  }

  getAssignedVoicemails() {
    this.voicemailService.getAssignedVoicemails().subscribe((response: Voicemail[]) => {
      this.voicemailList = response;
    });
  }


  // Pagination logic
  totalPages(): number[] {
    // Example logic to calculate total pages based on voicemailList length and pageSize
    const totalItems = this.voicemailList.length;
    const totalPages = Math.ceil(totalItems / this.pageSize);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    // Logic to fetch data for the selected page if needed
  }

  // Example methods for pagination control
  hasNextPage(): boolean {
    return this.currentPage < this.totalPages().length;
  }

  hasPrevPage(): boolean {
    return this.currentPage > 1;
  }

  nextPage() {
    if (this.hasNextPage()) {
      this.currentPage++;
      // Logic to fetch data for the next page if needed
    }
  }

  prevPage() {
    if (this.hasPrevPage()) {
      this.currentPage--;
      // Logic to fetch data for the previous page if needed
    }
  }

  // Modal handling
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


