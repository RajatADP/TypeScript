class Point1 {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x =x;
        this.y =y;
    }

    draw() {
        console.log('x: ' + this.x , ' y: ' + this.y);
    }
}

let point1 = new Point1(1,2);
point1.draw();

