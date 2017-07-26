import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule, PanelModule, SliderModule } from 'primeng/primeng'; // PrimeNG modules

import { StorageService } from './../../shared/services/storage.service';
import { enterAnimation } from './../../shared/animations/enter.animation';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
  encapsulation: ViewEncapsulation.None, // applying custom styles to ngPrime components
  animations: [enterAnimation]
})
export class LoanComponent implements OnInit {

  submitted: boolean;
  loanForm: FormGroup;
  loanAmount = 0;
  existingEMI = 0;

  constructor(private formBuilder: FormBuilder, public router: Router, public storageService: StorageService) { }

  ngOnInit() {
    this.loanForm = this.formBuilder.group({
      'loanAmount': [null, Validators.required],
      'existingEMI': [null, Validators.required]
    });
  }

  onLoanAmountChange(event) {
    this.loanAmount = event * 1000;
  }

  onExistingEMIChange(event) {
    this.existingEMI = event * 1000;
  }

  onSubmit(value: string) {
    this.submitted = true;

    value['loanAmount'] = this.loanAmount;
    value['existingEMI'] = this.existingEMI;

    this.storageService.write('loan', value);

    this.router.navigateByUrl('/conclusion');
  }

  get diagnostic() { return JSON.stringify(this.loanForm.value); }
}
