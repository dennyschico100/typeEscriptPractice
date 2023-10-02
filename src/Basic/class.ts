import {ICar} from './interface'
export class Car implements ICar{
 
 brand:string;
 color: string;
 isNew?:boolean;
 constructor(car :ICar){
  this.brand=car.brand
  this.color= car.color

 }
 startMoving():any{
  //console.log(`Car detaila \n ${this.color} ${this.brand}$ `)
  console.log('moving ....')
 }

}