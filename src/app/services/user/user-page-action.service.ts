import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { GlobalCommon } from '../../commons/global.common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPageActionService extends BaseService{

  constructor(http: HttpClient,
    global: GlobalCommon) {
    super(http, global, 'UserPageAction');
  }  

  getActionCodesCurrentUser = (): Observable<any> => this.get('GetActionCodesCurrentUser', null);

}
