import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Constants } from './constants.common';

@Injectable({
  providedIn: 'root'
})
export class EncryptionCommon {

  constructor() {

  }
  
  getMd5Hash = (strData: string) => CryptoJS.MD5(strData).toString();

  getSHA256Hash = (strData: string) => CryptoJS.SHA256(strData).toString(CryptoJS.enc.Hex);;
  
  encryptAesData = (str: string) => CryptoJS.AES.encrypt(str, Constants.DATA_KEY).toString();

  decryptAesData(str: string) {
    try {
      return CryptoJS.AES.decrypt(str, Constants.DATA_KEY).toString(CryptoJS.enc.Utf8);
    }
    catch (error) {
      return '';
    }
  }

  encryptDataPost(msg: string) {

    var keySize = 256;
    var ivSize = 128;
    var saltSize = 256;
    var iterations = 1000;

    var salt = CryptoJS.lib.WordArray.random(saltSize / 8);

    var key = CryptoJS.PBKDF2(Constants.DATA_KEY, salt, {
      keySize: keySize / 32,
      iterations: iterations
    });

    var iv = CryptoJS.lib.WordArray.random(ivSize / 8);

    var encrypted = CryptoJS.AES.encrypt(msg, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });

    var encryptedHex = this.base64ToHex(encrypted.toString());
    var base64result = this.hexToBase64(salt + iv + encryptedHex);

    return base64result;
  }

  hexToBase64(str: string) {
    return btoa(String.fromCharCode.apply(null,
      str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
    );
  }

  base64ToHex(str: string) {
    for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
      var tmp = bin.charCodeAt(i).toString(16);
      if (tmp.length === 1) tmp = "0" + tmp;
      hex[hex.length] = tmp;
    }
    return hex.join("");
  }

}
