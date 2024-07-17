import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';

const APIUrlRole = 'http://localhost:8081/api/user';

@Injectable({
  providedIn: 'root',
})
export class UserService extends DataService {
  constructor(http: HttpClient) {
    super(APIUrlRole, http);
  }
}
