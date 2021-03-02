import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})

export class BurgerComponent implements OnInit {
  @Input() public ingredients: any;

  ngOnInit(): void {
    // console.log(Object.keys(this.ingredients));
  }


}
