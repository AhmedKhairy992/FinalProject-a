import { product } from './../product';
import { Data } from './../cart-product';
import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../shoping-cart.service';
import { ProductElementCart } from '../cart-product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private _ShopingCartService:ShopingCartService , private toastr:ToastrService){}
  cartDetails:ProductElementCart[]=[];
  TotalPrice=0;
  currentCount =0;
  cartId:any;
  ngOnInit():void{
    let mYtoken =  localStorage.getItem('token');
    this._ShopingCartService.GetloggedCart(mYtoken).subscribe({
    next:(response)=>{
      this.cartId=response.data._id;
       this.cartDetails = response.data.products;
      console.log(this.cartDetails);
      this.TotalPrice = response.data.totalCartPrice;
      console.log(this.TotalPrice)
    }

    })


  }
  updateProductCount(NewCount:any,Pid:any){
        let myToken = localStorage.getItem('token');
    this._ShopingCartService.updateProduct(NewCount,myToken,Pid).subscribe({
      next:(response)=>{
        this.cartDetails =  response.data.products;
        this.TotalPrice = response.data.totalCartPrice;

      }
    })
  }
  RemoveItem(pId:any){
    let myToken = localStorage.getItem('token');
    this._ShopingCartService.removeCartItem(pId,myToken).subscribe({
      next:(res)=>{
        this.cartDetails=res.data.products;
        this.TotalPrice = res.data.totalCartPrice;
      }
    }
    )
  }
  showSuccess() {
    this.toastr.error('item has been deleted');
  }
}
