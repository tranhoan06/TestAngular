import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { GlobalCommon } from '../../commons/global.common';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService extends BaseService {

  constructor(http: HttpClient,
    global: GlobalCommon) { 
    super(http, global, 'UserRole');
    
  }

  getRolesByUser = (data): Observable<any> => this.get('GetRolesByUser', data);

  getRolesCurrentUser = (): Observable<any> => this.get('GetRolesCurrentUser', null);

  addRoleForUser = (data): Observable<any> => this.post('AddRoleForUser', data);

  removeRoleForUser = (data): Observable<any> => this.post('RemoveRoleForUser', data);

}
