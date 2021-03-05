import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})

export class BurgerComponent implements OnInit {
  @Input() ingredients;
  public array = [];
  ngOnInit(): void {
  }
}
