import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock-manage/stock-manage.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  //18.创建对象
  stock: Stock;
  constructor() { }

  ngOnInit() {
    //19.初始化
    this.stock = new Stock(1,"蓝科教育",100.25,4,"蓝科教育新三板上市",["IT","教育"]);
  }

}
