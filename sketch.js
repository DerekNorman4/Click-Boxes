let box1 = 'blue';
let box2 = 'blue';


function setup() {
    createCanvas(600, 600);
    
}

function draw() {
    fill(box1);
   rect(0, 0, 300, 600);
    fill(box2);
    rect(300, 0, 300, 600);
}


function mouseClicked() {
 

    if (mouseX <=  300 && box1 == 'blue'){

        box1 = 'red';
       
    } else if (mouseX <= 300 && box1 == 'red') {
        
        box1 = 'blue';
     

    } else if (mouseX >= 300 && box2 == 'blue') {
        box2 = 'red';
       
    } else if (mouseX >= 300 && box2 == 'red') {
        box2 = 'blue';
       
    }


  


}