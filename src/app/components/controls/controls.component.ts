import { Component, OnInit, Input, Output ,EventEmitter, DoCheck } from '@angular/core';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  public items = ['salad', 'bacon', 'meat', 'cheese', 'beef', 'onion', 'cucumber', 'egg'];
  @Input() addMore;
  @Input() removeLess;
  @Input() disabled;
  constructor() {
  }

  ngOnInit(): void {
  }
}
