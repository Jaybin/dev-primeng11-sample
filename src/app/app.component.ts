import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-primeng-app';

  /**
   * Creates an instance of AppComponent
   * 
   * @param {PrimeNGConfig} primengConfig
   * @memberof AppComponent
   */
  constructor(private primengConfig: PrimeNGConfig) {}

  /**
   * Angular's OnInit implementation
   *
   * @memberof AppComponent
   */
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
