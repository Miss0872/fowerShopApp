import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { ProductFlowerComponent } from './product-menu/product-flower/product-flower.component';
import { ProductPlantComponent } from './product-menu/product-plant/product-plant.component';
import { PottedPlantComponent } from './product-menu/potted-plant/potted-plant.component';
import { ProductToolComponent } from './product-menu/product-tool/product-tool.component';
import { ShopCarComponent } from './shop-car/shop-car.component';
import { PersonalComponent } from './personal/personal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentComponent } from './content/content.component';
import { StoreinformationComponent } from './storeinformation/storeinformation.component';
import { OrderComponent } from './personal/order/order.component';
import { MyaddressComponent } from './personal/myaddress/myaddress.component';
import { UserinfoComponent } from './personal/userinfo/userinfo.component';
import { NewaddressComponent } from './personal/newaddress/newaddress.component';
import { ReviseaddressComponent } from './personal/reviseaddress/reviseaddress.component';
import { ProductInfoComponent } from './product-menu/product-info/product-info.component';
import { NavComponent } from './nav/nav.component';

const routeConfig: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'productmenu',component: ProductMenuComponent},
  {path: 'productinfo',component: ProductInfoComponent},
  {path: 'productflower',component: ProductFlowerComponent},
  {path: 'productplant',component: ProductPlantComponent},
  {path: 'pottedplant',component: PottedPlantComponent},
  {path: 'producttool',component: ProductToolComponent},
  {path: 'shopcar',component: ShopCarComponent},
  {path: 'aboutus',component: AboutUsComponent},
  {path: 'personal',component: PersonalComponent},
  {path: 'order',component: OrderComponent},
  {path: 'userinfo',component: UserinfoComponent},
  {path: 'myaddress',component: MyaddressComponent},
  {path: 'newaddress',component: NewaddressComponent},
  {path: 'reviseaddress',component: ReviseaddressComponent},
  {path: 'storeInformation',component: StoreinformationComponent},
  {path: '**',component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    ProductMenuComponent,
    ProductFlowerComponent,
    ProductPlantComponent,
    PottedPlantComponent,
    ProductToolComponent,
    ShopCarComponent,
    PersonalComponent,
    AboutUsComponent,
    ContentComponent,
    StoreinformationComponent,
    OrderComponent,
    MyaddressComponent,
    UserinfoComponent,
    NewaddressComponent,
    ReviseaddressComponent,
    ProductInfoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
