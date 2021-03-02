import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Input() public type = null;
  constructor() { }

  ngOnInit(): void {
  }

}
