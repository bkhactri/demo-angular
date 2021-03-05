import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Input() public type;
  @Input() public added;
  @Input() public removed;
  @Input() public disabledBtn;
  constructor() { }

  ngOnInit(): void {
  }

}
