import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule, InputTextModule, PanelModule } from 'primeng/primeng'; // PrimeNG modules

import { enterAnimation } from './../../shared/animations/enter.animation';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  encapsulation: ViewEncapsulation.None, // applying custom styles to ngPrime components
  animations: [enterAnimation]
})
export class PersonalComponent implements OnInit {

  submitted: boolean;
  personalForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.router.navigateByUrl('/occupation');
  }

  get diagnostic() { return JSON.stringify(this.personalForm.value); }
}
