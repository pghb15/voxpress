import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

const APIUrlRole = 'http://localhost:8081/api/role';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends DataService {
  constructor(http: HttpClient) {
    super(APIUrlRole, http);
  }
}
