import { ShopingCartService } from './../shoping-cart.service';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { categ, product } from '../product'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  productContainer :product[] =[];
  categoryContainer :categ[] =[];
  logInUsertoken:any='';

  getProductSubscription = new Subscription();
  getCategoriSubscription = new Subscription();
  getAddToCartSubscription = new Subscription();



  constructor(private _ProductsService:ProductsService, private _shopingCurt:ShopingCartService , private toastr: ToastrService){}

  ngOnInit():void{
    this.logInUsertoken = localStorage.getItem('token');
    this._ProductsService.getProducts().subscribe({
        next:(response)=>{
          this.productContainer=response.data;
        },
        error:(error)=>{console.log(error)}
    })
    this._ProductsService.getCategories().subscribe({
      next:(Response)=>{
        this.categoryContainer=Response.data;
        console.log(Response.data)
      }

    })}
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

    ngOnDestroy(): void{
      this.getCategoriSubscription.unsubscribe()
      this.getProductSubscription.unsubscribe()
      this.getCategoriSubscription.unsubscribe()

    }
  }


