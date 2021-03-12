import { LeaderService } from '@/app/services/leader.service';
import { Leader } from '@/app/shared/leader';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];

  constructor(
    private leaderService: LeaderService,
  ) { }

  ngOnInit() {
    this.leaders = this.leaderService.getLeaders();
  }

}
