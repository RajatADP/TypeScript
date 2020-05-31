//unique feature of typescript

class Point4 {
    constructor(private x: number, private y: number) {
         }
 
     draw() {
         console.log('x: ' + this.x , ' y: ' + this.y);
     }

     setX(value: number) {
         if (value < 0)
         throw new Error('Value cannot be less than 0');

         this.x = value;
     }

     getX() {
         return this.x;
     }
 }
 
 let point4 = new Point4(1,2);
 point4.draw();
 point4.setX(4);
 let x = point4.getX();
 console.log(x);
 
 