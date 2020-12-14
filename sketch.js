var board;
var WHITE = 1;
var BLACK =0;
var chessBoard;

function preload(){

}

function setup(){
createCanvas(windowWidth-40,windowHeight-40)



chessBoard = new Board();
chessBoard.resetBoard();
}

function draw(){

    
    chessBoard.displayBackground();
    

}