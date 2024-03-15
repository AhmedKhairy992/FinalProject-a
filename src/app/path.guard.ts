import { loginUser } from './user';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import{AuthantcationService}from'./authantcation.service'

export const pathGuard: CanActivateFn = (route, state) => {
let _auth = inject(AuthantcationService)
if(_auth.isLogin.value){
  return true;
}
else{
  return false;
}
};
