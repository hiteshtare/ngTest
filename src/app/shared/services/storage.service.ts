import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  /*
       Desc - For storing a value in browser's local Storage using key.
       Called from - loan.component.ts, occupation.component.ts & personal.component.ts
       Inputs - key & value both strings.
     */
  write(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }


  /*
       Desc - For retrieving a value from browser's local Storage using key.
       Called from - conclusion.component.ts
       Inputs - key a string value.
       Outputs - Generic.
     */
  read<T>(key: string): T {
    const value: string = localStorage.getItem(key);

    if (value && value !== 'undefined' && value !== 'null') {
      return <T>JSON.parse(value);
    }

    return null;
  }
}
