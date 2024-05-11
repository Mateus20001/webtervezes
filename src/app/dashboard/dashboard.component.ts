import { Component, OnInit } from '@angular/core';
import { Allas } from '../allas';
import { AllasService} from '../allas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  allasok: Allas[] = [];

  constructor(private allasService: AllasService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.allasService.getAllasok()
      .subscribe(allasok => this.allasok = allasok.slice(1, 5));
  }
}
