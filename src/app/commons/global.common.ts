import { Injectable } from '@angular/core';
import * as Enums from './enum.common';

@Injectable({
  providedIn: 'root'
})
export class GlobalCommon {

  constructor() {

  }
  
  getLanguage(){
    return localStorage.getItem('language') !== null ? localStorage.getItem('language') : Enums.Language.VI;
  } 
  
  setLanguage(language: string){
    localStorage.setItem('language', language);
  }

  getToken(){
    return localStorage.getItem('token') !== null ? localStorage.getItem('token') : '';
  } 
  
  setToken(token: string){
    localStorage.setItem('token', token);
  }

  removeToken(){
    localStorage.removeItem('token');
  }

  getRefreshToken(){
    return localStorage.getItem('refreshToken') !== null ? localStorage.getItem('refreshToken') : '';
  } 
  
  setRefreshToken(token: string){
    localStorage.setItem('refreshToken', token);
  }

  removeRefreshToken(){
    localStorage.removeItem('refreshToken');
  }

  getActionCode(){
    return localStorage.getItem('actionCodes') !== null ? localStorage.getItem('actionCodes')?.split(',') : [];
  } 
  
  setActionCode(actionCodes: string){
    localStorage.setItem('actionCodes', actionCodes);
  } 
  
  setRecentUsername(username: string){
    localStorage.setItem('recentUsername', username);
  }
  
  getRecentUsername(){
    return localStorage.getItem('recentUsername') !== null ? localStorage.getItem('recentUsername') : '';
  }

  isLogin(){
    return this.getToken() !== '';
  }

}
