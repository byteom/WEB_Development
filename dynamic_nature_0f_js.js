//Dyanmic nature of objects

function Rectangle(){
    this.length = 10;
    this.breadth = 5;
    this.draw = function(){
        console.log("draw a rectangle");
    }
}

let rectangle = new Rectangle();
rectangle.draw();
console.log(rectangle.length)
rectangle.color="yello";
console.log(rectangle);
delete rectangle.color;
console.log(rectangle);