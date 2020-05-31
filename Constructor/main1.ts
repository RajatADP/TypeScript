//creating object of Point1 without knowledge of parameters
//? means not compulsory - typescript multiple constructor not possible
class Point2 {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x =x;
        this.y =y;
    }

    draw() {
        console.log('x: ' + this.x , ' y: ' + this.y);
    }
}

let point2 = new Point2();
point2.draw();