import { Component, OnInit } from '@angular/core';

import { PcStatService } from './pc-stat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'initiative';

  constructor(private pcService : PcStatService) {}

  ngOnInit() {
    console.log(this.pcService.getPcStat('test'));
  }
}
