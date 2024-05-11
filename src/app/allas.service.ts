import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Allas } from './allas';
import { ALLASOK } from './allasok';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class AllasService {

  constructor(private messageService: MessageService) { }

  getAllasok(): Observable<Allas[]> {
    const allasok = of(ALLASOK);
    this.messageService.add('HeroService: fetched heroes');
    return allasok;
  }

  getAllas(id: number): Observable<Allas> {
    const allas = ALLASOK.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(allas);
  }
}
