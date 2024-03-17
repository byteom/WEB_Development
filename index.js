 console.log("Hello ji");
 //object create
//  let rectangle ={
//     length:1,
//     breadth:2,
//     draw: function(){
//         console.log("draw a rectangle");
//     }
     
//  }; 

//  //object create u can diectet copy the object 
//  let rectangle1 ={
//     length:1,
//     breadth:2,
//     draw: function(){
//         console.log("draw a rectangle");
//     }
     
//  }; 


 //**Object Craetion**

 //Factory Function

//  function createRectangle(){
//     let rectangle ={
//         length:1,
//         breadth:2,
//         draw: function(){
//             console.log("draw a rectangle");
//         }
         
//      }; 
//         return rectangle;
//  }

//  let rectangleobj1 = createRectangle(); //object creation using factory function
//  rectangleobj1.draw();
//  rectangleobj1.breadth;

 //Crate parameters in function
 function createRectangle(len,bre){
    return rectangle ={
        length:len,
        breadth:bre,
        draw: function(){
            console.log("draw a rectangle");
        }
         
     }; 
         
    }
 let rectangleobj1 = createRectangle(5,4); //object creation using factory function
 let rectangleobj2 = createRectangle(7,9); //object creation using factory function
 let rectangleobj3 = createRectangle(3,4); //object creation using factory function
 //rectangleobj1.draw();
 console.log(rectangleobj1.breadth);

 /// **Constructor Function**

