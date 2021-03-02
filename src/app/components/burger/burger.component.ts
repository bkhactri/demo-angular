import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})

export class BurgerComponent implements OnInit {
  @Input() public ingredients: any;
  public array: any;
  ngOnInit(): void {
  this.array = Object.keys(this.ingredients)
      .map(igKey => {
          return [...Array(this.ingredients[igKey])];
      })
      .reduce((arr, el) => {
          return arr.concat(el);
      },[]);
  }
}
