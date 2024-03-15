import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{AuthantcationService}from'../authantcation.service'
import { from } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ApiResponse:string='';
  constructor(private _AuthantcationService:AuthantcationService , private _router : Router){}
  loading:boolean=false;

registrationForm= new FormGroup({
  name: new FormControl(null ,[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
  email: new FormControl(null ,[Validators.required,Validators.email]),
  password:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z][a-z A-Z 0-9]{5,16}$/)]),
  rePassword:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z][a-z A-Z 0-9]{5,16}$/)]),
  phone:new FormControl(null ,[Validators.required,Validators.pattern(/^(002)?01[123450][0-9]{8}$/)])
})
signUp(formData:any){
  formData.markAllAsTouched(); 
  if(formData.valid && formData.get('password').value === formData.get('rePassword').value)
{
  this.loading =true;
  this._AuthantcationService.signUp(formData.value).subscribe({
    next:(response)=>{
      this.ApiResponse=response.message;
      this.loading=false;

      if(this.ApiResponse =='success'){
        this._router.navigate(['/login'])

      }
    },

      error:(err)=>{ this.ApiResponse =err.error.message;
        this.loading=false;

    }
  })
}
}

}
