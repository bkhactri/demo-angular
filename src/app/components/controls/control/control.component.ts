import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Input() public type: any;
  @Input() public added: any;
  @Input() public removed: any;
  @Input() public disabledBtn:any;
  constructor() { }

  ngOnInit(): void {
  }

}
