import { Component, OnInit } from '@angular/core';
import { VoicemailService } from '../../services/voicemail.service';
import { Voicemail } from '../../models/voicemail';

@Component({
  selector: 'app-archive-voicemail-list',
  templateUrl: './archive-voicemail-list.component.html',
  styleUrls: ['./archive-voicemail-list.component.css'],
})
export class ArchivedVoicemailListComponent implements OnInit {
  voicemailList: Voicemail[] = [];
  tempVoicemail: Voicemail = new Voicemail();

  constructor(private voicemailService: VoicemailService) {}

  ngOnInit(): void {
    this.getArchivedVoicemails();
  }

  getArchivedVoicemails() {
    this.voicemailService.getArchivedVoicemails().subscribe((response: Voicemail[]) => {
      this.voicemailList = response;
    });
  }

  openModel(voicemail: Voicemail) {
    // Create a copy of the voicemail object to prevent direct modifications
    this.tempVoicemail = { ...voicemail };
  }
}
