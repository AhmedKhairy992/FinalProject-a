import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import{AuthantcationService}from'../authantcation.service'
import { ShopingCartService } from '../shoping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  enableNavbar:any;
  logInuserName:any;
  CartNumbers:any;
constructor(private _AuthantcationService:AuthantcationService , private _ShopingCartService:ShopingCartService){}
// enableNavbar:boolean=this._AuthantcationService.isLogin;
ngOnInit():void{
this._AuthantcationService.UserName.subscribe({
  next:(val)=>{
    this.logInuserName=val;
  }

})
this._ShopingCartService.numCartsAdded.subscribe({
  next:(nums)=>{
    this.CartNumbers=nums;
  }
})

  this._AuthantcationService.isLogin.subscribe({
  next:(BehaviorSubject)=>{
    this.enableNavbar=BehaviorSubject;
  }
})
}

logOut(){

  this._AuthantcationService.logOut();

}

}
