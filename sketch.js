var numbers =[15, 22, 48, 37];
var habits = ["choice" , "voice", "hustle", "grit", "growth", "optimism", "considersation","bad and boujie"];
var j = 0;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
}

function draw(){
    background(0);

     for(var i = 0; i < 4; i++){
         ellipse((i+1)*100,200,numbers[i],numbers[i]);
    }
  
    fill(0,255,0);
    textSize(50);
    text(habits[j], 230, 150);
}

function mousePressed(){
    j++;
    if(j==habits.length){
        j=0;
    }
}


