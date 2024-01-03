import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// we are using the @Input decorator to collect the data from the parent component(product-list) and use it in the the child component(product)

export class ProductComponent {
  @Input()
  product:Product;



//   {id:number,
//     name:string,
//     description:string,
//     brand:string,
//     gender:string,
//     category:string,
//     size:number[],
//     color:string[]
//     price:number,
//     discountPrice?:number,
//     is_in_inventory:boolean,
//     items_left:number,
//     imageURL:string,
//     slug:string};
 }
