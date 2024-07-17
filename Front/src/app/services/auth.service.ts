import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../../environment';
import { Response } from '../models/response.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/login.model';
import { Router } from '@angular/router';
import { Data } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _apiUrl = apiUrl;
  private _user: BehaviorSubject<User | null>

  constructor(private _http: HttpClient, private _router: Router) { 
    this._user = new BehaviorSubject<User | null>(null);
  }

  get user(): Observable<User | null>{
    return this._user.asObservable();
  }

  setUser(user: User) {
    this._user.next(user);
  }

  async login(email: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this._http.post<Response<Data>>(this._apiUrl + '/users/login', {
        email: email,
        password: password,
      })
      .subscribe({
        next: (value) => {
          this._user.next(value.data.data.user);
          localStorage.setItem('user', JSON.stringify(value.data.data.user));
          this._router.navigateByUrl('/demand');
          resolve(value.data.data.user)
        },
        error: (error) => {
          reject(error);
        },
      });
    })
    


  }
}
