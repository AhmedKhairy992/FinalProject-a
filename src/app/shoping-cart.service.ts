import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  numCartsAdded = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { }
  addToCart(pId:string , UserToken:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {productId:pId},
    {headers:{token:UserToken},
    }
    )
  }
  GetloggedCart(myToken:any):Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',

     {headers:{token : myToken},
    }
    )

    }
    updateProduct(pCount:any, myToken:any , pId:any):Observable<any>{
      return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`,
      {count:pCount},
      {headers:{token:myToken}
    }
      )
    }
    removeCartItem(pId:any,mYtoken:any):Observable<any>{
      return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`,
      {headers:{token:mYtoken}}
      )

    }
    onlinePaymet(cartId:any,myToken:any,address:any):Observable<any>{
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {shippingAddress:address},
      {headers:{token:myToken}}
      )

    }
  }





