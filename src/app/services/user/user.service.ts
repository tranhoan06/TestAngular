import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { GlobalCommon } from '../../commons/global.common';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(http: HttpClient,
    global: GlobalCommon) { 
    super(http, global, 'User');
    
  }

  changePasswordUser = (data: any): Observable<any> => this.post('ChangePasswordUser', data);

  changePassword = (data: any): Observable<any> => this.post('ChangePassword', data);

  updateInfo = (data: any): Observable<any> => this.post('UpdateInfo', data);

  getInfo = (): Observable<any> => this.get('GetInfo', null);

  login = (data: any): Observable<any> => this.post('Login', data);

  logout = (): Observable<any> => this.post('Logout', null);

  forgetPassword = (data: any): Observable<any> => this.post('ForgetPassword', data);

  resetPassword = (data: any): Observable<any> => this.post('ResetPassword', data);

  refreshToken = (token: string): Observable<any> => this.post('RefreshToken', { refreshToken: token });

}
