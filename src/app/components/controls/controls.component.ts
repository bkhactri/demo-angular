import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  public items = ['salad', 'bacon', 'meat', 'cheese'];
  constructor() { }

  ngOnInit(): void {
  }

}
