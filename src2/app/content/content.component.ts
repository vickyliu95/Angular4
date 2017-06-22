import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //15.设置属性
  pageTitle = '';
  pageDesc = '';
  constructor(public router: Router) {
    router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) =>{
      if (event.url == '/dashboard'){
        this.pageTitle ="首页";
        this.pageDesc =  "这里是首页";
      }else if(event.url.startsWith('/stock')){
        this.pageTitle ="股票信息管理";
        this.pageDesc = "股票信息增删改查";
      }
    });
  }

  ngOnInit() {
  }

}
