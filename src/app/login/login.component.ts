import { AuthantcationService } from './../authantcation.service';
import { Component } from '@angular/core';
import { FormGroup ,FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiResponse:string='';

  loginForm= new FormGroup({
    email: new FormControl(null ,[Validators.required,Validators.email]),
    password:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z][a-z A-Z 0-9]{5,16}$/)]),  })
    constructor(private _AuthantcationService:AuthantcationService , private _router:Router){}
    logIn(formData:any){
      if(formData.valid){
        this._AuthantcationService.signIn(formData.value).subscribe({
          next:(Response)=>{
            this.apiResponse = Response.message
            if(this.apiResponse == ('success')){
              localStorage.setItem('token',Response.token)
              let deCodeToken :any = jwtDecode(Response.token)
              this._AuthantcationService.UserName.next(deCodeToken.name);
              this._router.navigate(['/home'])
              this._AuthantcationService.isLogin.next(true);
            }
          },
          error:(err)=>{
            this.apiResponse = err.error.message;
          }
        })
      }
        }
  }
