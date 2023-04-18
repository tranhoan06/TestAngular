import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { GlobalCommon } from '../../commons/global.common';

@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService {

  constructor(http: HttpClient,
    global: GlobalCommon) { 
    super(http, global, 'File');
    
  }
  
  quickAdd = (data): Observable<any> => this.post('QuickAdd', data);

}
