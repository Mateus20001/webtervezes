import { Component, OnInit } from '@angular/core';

import { Allas } from '../allas';
import { AllasService } from '../allas.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './allasok.component.html',
  styleUrls: ['./allasok.component.css']
})
export class AllasokComponent implements OnInit {
  allasok: Allas[] = [];

  constructor(private allasService: AllasService) { }

  ngOnInit(): void {
    this.getAllasok();
  }

  getAllasok(): void {
    this.allasService.getAllasok()
    .subscribe(allasok => this.allasok = allasok);
  }
}
