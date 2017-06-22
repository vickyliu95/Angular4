import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {
  //5.命名变量,接收stock.rating
  @Input()
  rating : number = 0;

  constructor() { }
  //5.1命名星星数组
  stars: boolean[];
  ngOnInit() {
    //5.生成星星组件的数组
    this.stars = [];
    // this.stars = [false, false, true, true, true];
    for (let i=1; i<=5; i++){
      this.stars.push(i > this.rating);
    }
  }
}
