import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  //2.创建数组,保存股票内容
  private stocks: Array<Stock>;
  constructor() { }

  ngOnInit() {
    // 3.添加数据
    this.stocks = [
      new Stock(1,"蓝科教育",100.25,4,"蓝科教育新三板上市",["IT","教育"]),
      new Stock(2,"阿里",30,3,"比较庞大的公司,老板很丑",["IT"]),
      new Stock(3,"京东",10.5,3,"一家专门卖奶茶的网站",["IT","电商"]),
      new Stock(4,"百度",20,3,"靠搜索引擎出卖客户资料赚钱的网站",["IT"]),
      new Stock(5,"腾讯",29,5,"一直在模仿,从未被超越",["教育"]),
      new Stock(6,"默默",10,2,"默默默默默默默默默",["电商","教育"]),
    ];
  }

}

// 1.创建一个类,股票类,控制数据
export class Stock{
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}
