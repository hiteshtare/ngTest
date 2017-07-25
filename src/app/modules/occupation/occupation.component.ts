import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutoCompleteModule, ButtonModule, InputTextModule, PanelModule } from 'primeng/primeng'; // PrimeNG modules

import { CompanyService } from './../../shared/services/company.service';
import { StorageService } from './../../shared/services/storage.service';
import { enterAnimation } from './../../shared/animations/enter.animation';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss'],
  encapsulation: ViewEncapsulation.None, // applying custom styles to ngPrime components
  animations: [enterAnimation]
})
export class OccupationComponent implements OnInit {

  submitted: boolean;
  occupationForm: FormGroup;

  filteredCompanies: any[];

  constructor(private formBuilder: FormBuilder, public router: Router, public companyService: CompanyService,
    public storageService: StorageService) { }

  ngOnInit() {
    this.occupationForm = this.formBuilder.group({
      'companyName': [null, Validators.required]
    });
  }

  filterCompany(event) {
    const query = event.query;
    this.companyService.getCompanies().then(companies => {
      this.filteredCompanies = this.filterCompanyByKeyword(query, companies);
    });
  }

  filterCompanyByKeyword(query, companies: any[]): any[] {
    const filtered: any[] = [];
    for (let i = 0; i < companies.length; i++) {
      const company = companies[i];
      if (company.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(company.name);
      }
    }
    return filtered;
  }

  onSubmit(value: any) {
    this.submitted = true;

    this.storageService.write('companyName', value.companyName);

    this.router.navigateByUrl('/loan');
  }

  get diagnostic() { return JSON.stringify(this.occupationForm.value); }
}
