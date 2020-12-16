var pieces;
var WHITE = 1;
var BLACK = 0;
var chessBoard;
var TURN = WHITE;

this.selected = null;

function preload() {

}

function setup() {
    createCanvas(windowWidth - 40, windowHeight - 40)



    chessBoard = new Board();
    chessBoard.resetBoard();
}

function draw() {


    chessBoard.displayBackground();

    drawSprites();

}

function mouseClicked() {
    let y = Math.trunc(mouseX / chessBoard.size);
    let x = Math.trunc(mouseY / chessBoard.size);
    console.log('clicked on ', x, y)    

        if (pieces[x][y] ) {
            pieces[x][y].
                recalculatePossibleNext()


            console.log('clicked on ', x, y)
            console.log('can move to', pieces[x][y].possibleNextPositions())
            pieces[x][y].possibleNextPositions().filter(
                p => pieces[p.x][p.y] !== null
            )
            chessBoard.highlight(pieces[x][y].possibleNextPositions())
            this.selected = { x: x, y: y }
            
        }
       // chessBoard.clickedOn(mouseX,mouseY);
}