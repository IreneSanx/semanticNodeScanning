import { Component, OnInit } from '@angular/core';
import { DataGraphService } from './services/data-graph.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  initGraph: boolean = false;
  enterApp: boolean = false;
  exitApp: boolean = false;

  constructor(public dataGraphService: DataGraphService) { }

  ngOnInit(): void { }

  onEnter(){
    this.enterApp = true;
  }
  
  onReady() {
    this.initGraph = true;
  }

  onExit() {
    this.exitApp = true;
  }
}
