import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, loginUser } from './user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthantcationService {
  isLogin = new BehaviorSubject(false);
  UserName= new BehaviorSubject('');

    constructor(private _HttpClient:HttpClient , private _router:Router) {
      if(localStorage.getItem('token')!== null){
        let myTokeen:any = localStorage.getItem('token');
        let deCodeToken :any = jwtDecode(myTokeen)
        this.UserName.next(deCodeToken.name);
        this.isLogin.next(true)
          this._router.navigate(['/home'])

      }
      else{
      this.isLogin.next(false)
      }
      }



  // isLogin:boolean=false;

  signUp(user:User):Observable<any>{
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',user)
    }
 signIn(user:loginUser):Observable<any>{
      return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',user)
    }
 logOut(){
  localStorage.removeItem('token')
  this.isLogin.next(false)
  this.UserName.next('');
  this._router.navigate(['/login'])
 }
}
