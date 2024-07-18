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
  currentPage: number = 1;
  itemsPerPage: number = 10;

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
    this.tempVoicemail = { ...voicemail };
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
}
