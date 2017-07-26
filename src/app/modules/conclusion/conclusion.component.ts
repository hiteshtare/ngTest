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

  personal = '';
  occupation = '';
  loan = '';

  constructor(public storageService: StorageService) {
    this.personal = this.storageService.read<string>('personal');
    this.occupation = this.storageService.read<string>('occupation');
    this.loan = this.storageService.read<string>('loan');
  }

  ngOnInit() {
  }
}
