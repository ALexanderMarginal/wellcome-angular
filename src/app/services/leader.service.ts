import { Leader } from '@/app/shared/leader';
import { LEADERS } from '@/app/shared/leaders';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeaderItem(id: string): Observable<Leader> {
    return of(LEADERS.find(leader => leader.id === id)).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.find(leader => leader.featured)).pipe(delay(2000));
  }
}
