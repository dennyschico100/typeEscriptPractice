import {showAge} from  './Basic/VariabllesType'
import {Car} from './Basic/class'
import {ICar} from './Basic/interface'

const gretting: string ='Hello World  with TypeScript'
const isReady : boolean = true;
console.log({gretting})
console.log({isReady})
showAge()
const myObject: ICar = {
 brand: '',
 color: '',
 //startMoving: () => {},

};

const myInstance = new Car(myObject);

myInstance.startMoving()
