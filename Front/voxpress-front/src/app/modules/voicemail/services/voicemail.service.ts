import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

const APIUrlVoicemail = 'http://localhost:8081/api/voicemail';

@Injectable({
  providedIn: 'root',
})
export class VoicemailService extends DataService {
  constructor(http: HttpClient) {
    super(APIUrlVoicemail, http);
  }
}
