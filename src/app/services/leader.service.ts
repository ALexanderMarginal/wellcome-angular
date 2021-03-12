import { Leader } from '@/app/shared/leader';
import { LEADERS } from '@/app/shared/leaders';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getLeaderItem(id: string): Promise<Leader> {
    return Promise.resolve(LEADERS.find(leader => leader.id === id));
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.find(leader => leader.featured));
  }
}
