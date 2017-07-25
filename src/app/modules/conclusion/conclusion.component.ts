import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldsetModule, PanelModule } from 'primeng/primeng'; // PrimeNG modules

import { StorageService } from './../../shared/services/storage.service';
import { enterAnimation } from './../../shared/animations/enter.animation';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss'],
  encapsulation: ViewEncapsulation.None, // applying custom styles to ngPrime components
  animations: [enterAnimation]
})
export class ConclusionComponent implements OnInit {

  companyName = '';
  loanAmount = 0;
  existingEMI = 0;

  constructor(public storageService: StorageService) {
    this.companyName = this.storageService.read<string>('companyName');

    this.loanAmount = this.storageService.read<number>('loanAmount');
    this.existingEMI = this.storageService.read<number>('existingEMI');
  }

  ngOnInit() {
  }
}
