var board=[];
var WHITE = 1;
var BLACK =0;


function preload(){

}

function setup(){
createCanvas(windowWidth-40,windowHeight-40)
}

function draw(){

    board = new Board();
    board.displayBackground();

}