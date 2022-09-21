import { Injectable } from '@angular/core';
import { AuthResponse } from 'src/app/core/models/AuthResponse';
import { environment } from 'src/environments/environment';
import { User} from 'src/app/core/models/user';
import {HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = `${environment.strapiUrl}/auth/local`;
  private loginTracker = new BehaviorSubject(this.checkIfLoggedIn());

  loggedInStatus$ = this.loginTracker.asObservable();

  constructor(private http: HttpClient, private storageService: StorageService) {}

  login(identifier: string, password: string ) {
    return this.http.post<AuthResponse>(this.url,{identifier,password});
  }

  register(username: string, email:string,password: string) {
    return this.http.post<AuthResponse>(`${this.url}/register`,{username,email,password});
  }

  checkIfLoggedIn() {
    return this.storageService.getItem('loggedIn') === 'true';
  }

  persistUser(resp: AuthResponse ) {
    [
      ['userId', resp.user.id],
      ['userEmail',resp.user.email],
      ['username', resp.user.username],
      ['loggedIn','true'],
      ['token',resp.jwt],
    ].forEach(item => this.storageService.setItem(item[0],item[1]));
    this.loginTracker.next(true);
  }

  getPersistedUser(): User {
    return {
      id: this.storageService.getItem('userId') || '', 
      username: this.storageService.getItem('username') || '',
      email: this.storageService.getItem('userEmail') || ''
    };
  }

  getPersistedToken(): string {
    return this.storageService.getItem('token') || '';
  }

  logout() {
    ['userId','userEmail','username','loggedIn','token'].forEach(item => this.storageService.removeItem(item));
    this.loginTracker.next(false);
  }

  getAuthHeader() {
    return {
      headers: {'Authorization':`Bearer ${this.getPersistedToken()}`}
    }
  }
}
