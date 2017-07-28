import { Component } from '@angular/core';

import { JsonService } from './shared/services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public jsonService: JsonService) {
  }
}
