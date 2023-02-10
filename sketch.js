var x = new Array(11);
var y = new Array(11);

let back; 
let img; 
let img1; 
let img2;
var i;
function setup(){ 
  //setup size, background, etc. 
  createCanvas(600,400);

  
  img = loadImage("imgnn.png");   
  img1 = loadImage("imgnn1.png");  
  img2 = loadImage("imgnn3.png");  
  back = img; //starting image for background 
i =0
 

} 




function draw() {
  image(back, 0,0, width, height); 
  if (i==10){
    background(204);
        
        for (var j = 1; j<11; j++) {
            fill(random(255),random(255),random(255));
            rect( x[j-1],y[j-1], abs(x[j]-x[j-1]), abs(y[j]-y[j-1]));
            
  }
  
       noLoop();  
  }

  
 
  



}

function touchStarted() { // Click to add a line segment
   x[i] =  mouseX;
  y [i]=  mouseY;
 
  i=i+1;

  // if your mouse is within the x and y values of the thumbnail image, switch the background image. 
    if( (mouseX> 0 && mouseX < 300)) { //actual values may differ 
        back = img1; 
        
           
    } else { 
        back = img2; 
    }

 
  if (i>10){remove();}

}
    

 





