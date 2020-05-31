let drawPoint = (x, y) => {
    console.log(x);
    console.log(y);
} 

drawPoint(1,2);

// or

let drawPoint1 = (point) => {
    console.log(point.x);
    console.log(point.y);
}

drawPoint1({
    x: 1,
    y: 2
})
// problem is if we pass name also in drawPoint1 it will accept
// drawPoint1({
//     name: 'Rajat'
// })

// 1- solution
let drawPoint2 = (point: {x: number, y:number}) => {
    console.log(point.x);
    console.log(point.y);
} 

drawPoint2({
    x: 1,
    y: 2
})

//2. solution better one---interface

interface Point1 {
    x: number,
    y:number
}

let drawPoint3 = (point: Point1) => {
    console.log(point.x);
    console.log(point.y);
} 

drawPoint3({
    x: 1,
    y: 2
})

