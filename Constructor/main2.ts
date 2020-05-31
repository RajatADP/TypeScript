//unique feature of typescript

class Point3 {
   constructor(private x: number, private y: number) {
        }

    draw() {
        console.log('x: ' + this.x , ' y: ' + this.y);
    }
}

let point3 = new Point3(1,2);
point3.draw();

