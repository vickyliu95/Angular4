import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StartsComponent } from './starts/starts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { StockFormComponent } from './stock/stock-form/stock-form.component';

// 7. 点击不同的按钮,导航到不同的页面地址
const routeConfig:Routes =  [
  //重定向, 用户访问一个地址,将这个地址指向新地址

  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'stock',component:StockManageComponent},
  {path:"stock/:id",component:StockFormComponent}

  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    StockManageComponent,
    StartsComponent,
    DashboardComponent,
    StockFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // 8.将模块添加进来
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
