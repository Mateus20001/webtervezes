import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CapitalizeFirstPipe } from '../capitalizeFirstPipe';
import { Allas } from '../allas';
import { AllasService } from '../allas.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './allas-detail.component.html',
  styleUrls: [ './allas-detail.component.css' ]
})
export class AllasDetailComponent implements OnInit {
  allas: Allas | undefined;

  constructor(
    private route: ActivatedRoute,
    private AllasService: AllasService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAllas();
  }

  getAllas(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.AllasService.getAllas(id)
      .subscribe(allas => this.allas = allas);
  }

  goBack(): void {
    this.location.back();
  }
}
