import { Leader } from '@/app/shared/leader';
import { LEADERS } from '@/app/shared/leaders';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeaderItem(id: string) {
    return LEADERS.find(leader => leader.id === id);
  }

  getFeaturedLeader(): Leader {
    return LEADERS.find(leader => leader.featured);
  }
}
