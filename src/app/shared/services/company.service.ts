import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyService {

  constructor(public http: Http) {
  }

  /*
     Desc - For getting list of companies from json file.
     Called from - occupation.component.ts
     Outputs - Promise.
   */
  getCompanies() {
    return this.http.get('assets/data/companies.json')
      .toPromise()
      .then(res => <any[]>res.json().data)
      .then(data => { return data; });
  }

}
