import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from "rxjs";
import { first, take } from 'rxjs/operators';
import { GlobalCommon } from '../commons/global.common';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseService {

  constructor(private http: HttpClient,
    private global: GlobalCommon,
    @Input('') private module: String) {
  }

  getList = (data: any): Observable<any> => this.get('GetList', data);

  autocomplete = (data: any): Observable<any> => this.get('Autocomplete', data);

  getById = (data: any): Observable<any> => this.get('GetById', data);

  addOrEdit = (data: any): Observable<any> => this.post('AddOrEdit', data);

  hide = (data: any): Observable<any> => this.post('Hide', data);

  show = (data: any): Observable<any> => this.post('Show', data);

  delete = (data: any): Observable<any> => this.post('Delete', data);

  hideAll = (data: any): Observable<any> => this.post('HideAll', data);

  showAll = (data: any): Observable<any> => this.post('ShowAll', data);

  deleteAll = (data: any): Observable<any> => this.post('DeleteAll', data);

  importExcel = (data: any): Observable<any> => this.post('ImportExcel', data);

  exportExcel = (data: any): Observable<any> => this.get('ExportExcel', data);

  getImportTemplate = (): Observable<any> => this.get('GetTemplateImport', null);

  post = (api: string, data: any) => this.httpRequest('POST', api, data);

  get = (api: string, data: any) => this.httpRequest('GET', api, data);

  httpRequest(method: string, api: string, data: any) {

    const url = environment.apiUrl + this.module + '/' + api;

    if (method === 'GET' && data !== undefined && data !== null)
      Object.keys(data).forEach(key => { if (data[key] === undefined || data[key] === null) delete data[key]; });

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.global.getToken() ?? '',
        'Accept-Language': this.global.getLanguage() ?? ''
      }),
      params: method === 'GET' ? data : null
    };

    if (!(data instanceof FormData))
      httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');

    const actionMethod = method === 'POST'
      ? this.http.post(url, data, httpOptions)
      : this.http.get(url, httpOptions);

    return actionMethod.pipe(first(), take(1));
  }
}
