import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})

export class BurgerComponent implements OnChanges {
  @Input() public ingredients: any;
  public array: any;
  ngOnInit(): void {
    this.array = Object.keys(this.ingredients)
        .map(igKey => {
          return [...Array(this.ingredients[igKey])].map((_,i) => {
            return [...Array(igKey)];
        });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        },[]);
    }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
}
