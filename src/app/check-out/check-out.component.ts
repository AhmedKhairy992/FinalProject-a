import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopingCartService } from '../shoping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  {
  constructor(private _ShopingCartService:ShopingCartService, private _ActivatedRoute:ActivatedRoute){}
  checkOutForm = new FormGroup({
    details : new FormControl(''),
    phone : new FormControl(''),
    city : new FormControl('')
  })
  proCheckOut(form:any)
  {
    if(form.valid){
      let idCart = this._ActivatedRoute.snapshot.params['cartId']
      let myToken = localStorage.getItem('token');

      this._ShopingCartService.onlinePaymet(idCart,myToken,form.value).subscribe({
        next:(res)=>{
          location.href = res.session.url

        }
      })
    }
  }
}

