import { element } from 'protractor';
import { DynamicFormControlModel, DynamicInputModel, DynamicDatePickerModel } from '@ng2-dynamic-forms/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JsonService {
  config: DynamicFormControlModel[] = [];

  constructor(public http: Http) {
    this.getConfig().then(fields => {
      fields.forEach(element => {
        if (element.type === 'input') {
          this.config.push(new DynamicInputModel({
            id: element.id,
            label: element.label,
            placeholder: element.placeholder,
            validators: element.validators
          }));
        }

        if (element.type === 'datepicker') {
          this.config.push(new DynamicDatePickerModel({
            id: element.id,
            label: element.label,
            placeholder: element.placeholder,
            validators: element.validators,
            format: element.format
          }));
        }
      });
    });

    console.log('CONFIG LOADED');
    console.log(this.config);
  }

  getConfig() {
    return this.http.get('assets/data/config.json')
      .toPromise()
      .then(res => <any[]>res.json().fields)
      .then(fields => {
        return fields;
      });
  }
}
