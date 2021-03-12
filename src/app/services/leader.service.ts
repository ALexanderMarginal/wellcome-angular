import { DISHES } from '@/app/shared/dishes';
import { Leader } from '@/app/shared/leader';
import { LEADERS } from '@/app/shared/leaders';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getLeaderItem(id: string): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.find(leader => leader.id === id)), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.find(leader => leader.featured)), 2000);
    });
  }
}
