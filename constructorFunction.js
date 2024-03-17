//CameCase ->NumberOfStudents -> first word is capital

function Rectange(){
    this.length = 10;
    this.breadth = 5;
    this.draw = function(){
        console.log("draw a rectangle");
    }
}

//object creation using constructor function
let rectangle = new Rectange();
rectangle.draw();
console.log(rectangle.length);

//accessing the property of an object
console.log(rectangle.breadth);
