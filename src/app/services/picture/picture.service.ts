import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { GlobalCommon } from '../../commons/global.common';

@Injectable({
  providedIn: 'root'
})
export class PictureService extends BaseService {

  constructor(http: HttpClient,
    global: GlobalCommon) { 
    super(http, global, 'Picture');
    
  }
  
  quickAdd = (data): Observable<any> => this.post('QuickAdd', data);

  quickAddEditor = (data): Observable<any> => this.post('QuickAddEditor', data);

}
