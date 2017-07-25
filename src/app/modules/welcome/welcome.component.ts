import { Component, OnInit } from '@angular/core';
import {
  ButtonModule
} from 'primeng/primeng'; // PrimeNG modules
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToNextScreen() {
    this.router.navigateByUrl('/personal');
  }

}
