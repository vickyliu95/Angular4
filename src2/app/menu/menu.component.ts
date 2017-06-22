import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router" ;


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //12.创建对象
  menus:Array<Menu>;

  //14.创建id
  currentMenuId:number;
  constructor(public router: Router  ) { }

  ngOnInit() {
    this.menus = [
      new Menu(1,'首页','dashboard'),
      new Menu(2,'股票管理','stock')
    ];

  }

  // // 10.构造nav方法
  // nav (url : string ) {
  //   this.router.navigateByUrl(url);
  // }
  //13.改造后的nav方法
  nav(menu:Menu) {
    this.router.navigateByUrl(menu.link);
    // 15.赋值
    this.currentMenuId = menu.id;
  }

}

//改造 11.创建Menu类
export class Menu{
  constructor(
    public id: number,
    public name:string,
    public link:string,
  ){

  }
}
