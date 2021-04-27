import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() enter = new EventEmitter<boolean>();
  @Output() exit = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enterApplication(): void{
    this.enter.emit(true);
  }

  return(): void{
    this.router.navigateByUrl('/main');
  }
}
