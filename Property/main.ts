//property typescript looks like variable but behave as function

class Point5 {
    constructor(private x: number, private y: number) {
         }
 
     draw() {
         console.log('x: ' + this.x , ' y: ' + this.y);
     }

     set X(value: number) {
         if (value < 0)
         throw new Error('Value cannot be less than 0');

         this.x = value;
     }

     get X() {
         return this.x;
     }
 }
 
 let point5 = new Point5(1,2);
 point5.draw();
 point5.X = 4;
 let x1 = point5.X;
 console.log(x1);