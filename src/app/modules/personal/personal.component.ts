import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule, InputTextModule, PanelModule } from 'primeng/primeng'; // PrimeNG modules
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core'; // ng2 dynamic form

import { JsonService } from './../../shared/services/json.service';
import { StorageService } from './../../shared/services/storage.service';
import { enterAnimation } from './../../shared/animations/enter.animation';
import { PERSONAL_DYNAMIC_FORM_MODEL } from './personal-dynamic-form.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  encapsulation: ViewEncapsulation.None, // applying custom styles to ngPrime components
  animations: [enterAnimation]
})
export class PersonalComponent implements OnInit {

  submitted: boolean;
  formModel: DynamicFormControlModel[] = PERSONAL_DYNAMIC_FORM_MODEL;
  // formModel: DynamicFormControlModel[];
  personalForm: FormGroup;

  constructor(private dynamicFormService: DynamicFormService, public jsonService: JsonService,
    public router: Router, public storageService: StorageService) { }

  ngOnInit() {
    if (this.jsonService.config.length === this.formModel.length) {
      console.log('MATCH FOUND :-)');
    } else {
      console.log('NO MATCH :-(');
    }

    this.personalForm = this.dynamicFormService.createFormGroup(this.formModel);
  }

  onSubmit(value: string) {
    this.submitted = true;

    this.storageService.write('personal', value);

    this.router.navigateByUrl('/occupation');
  }

  get diagnostic() { return JSON.stringify(this.personalForm.value); }
}
