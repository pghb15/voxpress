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
  disableOwnerField: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 10;

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
        this.getAssignedVoicemails(); // Refresh the list after deletion
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
      this.getAssignedVoicemails(); // Refresh the list after creation
    });
  }

  modifyVoicemail() {
    if (this.tempVoicemail.status == 'Resolved') {
      this.tempVoicemail.type = 'archived';
    }

    Object.assign(this.voicemailToModify, this.tempVoicemail);

    this.voicemailService.Update(this.voicemailToModify).subscribe(() => {
      alert('Voicemail Updated Successfully');
      window.location.reload();; // Refresh the window after update
    });
  }

  getAssignedVoicemails() {
    this.voicemailService.getAssignedVoicemails().subscribe((response: Voicemail[]) => {
      this.voicemailList = response;
    });
  }

  // Pagination methods
  totalPages(): number[] {
    const pages = Math.ceil(this.voicemailList.length / this.itemsPerPage);
    return Array.from({ length: pages }, (_, i) => i + 1);
  }

  setCurrentPage(page: number, event: Event): void {
    event.preventDefault();
    this.currentPage = page;
  }

  prevPage(event: Event): void {
    event.preventDefault();
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(event: Event): void {
    event.preventDefault();
    if (this.currentPage < this.totalPages().length) {
      this.currentPage++;
    }
  }

  hasPrevPage(): boolean {
    return this.currentPage > 1;
  }

  hasNextPage(): boolean {
    return this.currentPage < this.totalPages().length;
  }

  paginatedVoicemailList(): Voicemail[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.voicemailList.slice(start, end);
  }

  
  openModel(voicemail: Voicemail = new Voicemail()) {
    this.creatingMode = voicemail.contactId === '';
    this.voicemailToModify = voicemail;
    this.tempVoicemail = { ...voicemail, user: { ...voicemail.user } };
    this.disableOwnerField = false;
  }

  archiveVoicemail(voicemail: Voicemail = new Voicemail()) {
    if (confirm('Are you sure you want to archive this voicemail?')) {
      this.voicemailToModify = voicemail;
      this.voicemailToModify.type = 'archived';

      this.voicemailService.Update(this.voicemailToModify).subscribe(() => {
        alert('Voicemail Archived Successfully');
        this.getAssignedVoicemails();
      });
    }
  }
}
