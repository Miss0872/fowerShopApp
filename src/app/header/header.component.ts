import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navs:Array<Nav>;

  currentNavId: number;

  constructor(public router: Router) { }

  ngOnInit() {
    this.navs = [
      new Nav(1,'首页','home'),
      new Nav(2,'鲜花系列','productmenu'),
      new Nav(3,'购物车','shopcar'),
      new Nav(4,'门店信息','storeInformation'),
      new Nav(5,'关于我们','aboutus'),
      new Nav(6,'个人中心','personal')
    ];
  }

  navClick(nav: Nav){
    this.router.navigateByUrl(nav.link);

    this.currentNavId = nav.id;
  }

}

export class Nav{
  constructor(
    public id: number,
    public name: string,
    public link: string
  ){}

}

