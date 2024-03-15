import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { categ } from '../product';

@Component({
  selector: 'app-cslider',
  templateUrl: './cslider.component.html',
  styleUrls: ['./cslider.component.css']
})
export class CsliderComponent {
  @Input() catArry:categ[]=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }}}

}
