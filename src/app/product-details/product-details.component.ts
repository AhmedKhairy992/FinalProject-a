import { product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import{SingleProduct} from '../product';
import { ActivatedRoute } from '@angular/router';
import { ShopingCartService } from '../shoping-cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  SingleProduct:any | SingleProduct={};
  logInUsertoken:any='';

  constructor(private _productService:ProductsService , private _activitedRoute:ActivatedRoute , private _shopingCurt:ShopingCartService , private toastr: ToastrService){}
  ngOnInit():void{
    let x = this._activitedRoute.snapshot.params['productId'];
    console.log(x)
    this._productService.getSingleProduct(x).subscribe({
      next:(Response)=>{
        this.SingleProduct = Response.data;
      }

    })
  }
  addToCart(pId:string){
    this._shopingCurt.addToCart(pId , this.logInUsertoken).subscribe({
      next:(Response)=>{
        this._shopingCurt.numCartsAdded.next(Response.numOfCartItems);
        this.showSuccess();

      }
    })
  }
  showSuccess() {
    this.toastr.success('item has been added');
  }

}
