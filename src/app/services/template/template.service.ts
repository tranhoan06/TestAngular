import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { GlobalCommon } from '../../commons/global.common';

@Injectable({
  providedIn: 'root'
})
export class TemplateService extends BaseService {

  constructor(http: HttpClient,
    global: GlobalCommon) { 
    super(http, global, 'Template');
    
  }
  

}
