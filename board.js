class Board{

    constructor(){

    }
    displayBackground(){
        var size = width<height?width:height;
        size=size/8
        for(var i=0;i<8;i++){
            for(var j=0;j<8;j++){
                if ((i+j)%2 == 0) fill(108, 157, 158);
                else fill(171, 221, 178);
                rect(i*size,j*size,size,size)
            }
        }
    }


    resetBoard(){
        board[0][0] = new Rook(BLACK,{x:0,y:0});
        board[0][1] = new Knight(BLACK,{x:0,y:1});
        board[0][2] = new BISHOP(BLACK,{x:0,y:2});
        board[0][3] = new Queen(BLACK,{x:0,y:3});
        board[0][4] = new King(BLACK,{x:0,y:4});
        board[0][5] = new Bishop(BLACK,{x:0,y:5});
        board[0][6] = new Knight(BLACK,{x:0,y:6});
        board[0][7] = new Rook(BLACK,{x:0,y:7});
        board[1][0] = new Pawn(BLACK,{x:1,y:0});
        board[1][1] = new Pawn(BLACK,{x:1,y:1});
        board[1][2] = new Pawn(BLACK,{x:1,y:2}); 
        board[1][3] = new Pawn(BLACK,{x:1,y:3});
        board[1][4] = new Pawn(BLACK,{x:1,y:4});
        board[1][5] = new Pawn(BLACK,{x:1,y:5});
        board[1][6] = new Pawn(BLACK,{x:1,y:6});
        board[1][7] = new Pawn(BLACK,{x:1,y:7});
      
        board[7][0] = new Rook(WHITE,{x:0,y:0});
        board[7][1] = new Knight(WHITE,{x:0,y:0});
        board[7][2] = new Bishop(WHITE,{x:0,y:0});
        board[7][3] = new Queen(WHITE,{x:0,y:0});
        board[7][4] = new King(WHITE,{x:0,y:0});
        board[7][5] = new Bishop(WHITE,{x:0,y:0});
        board[7][6] = new Knight(WHITE,{x:0,y:0});
        board[7][7] = new Rook(WHITE,{x:0,y:0});
        board[6][0] = new Pawn(WHITE,{x:0,y:0});
        board[6][1] = new Pawn(WHITE,{x:0,y:0});
        board[6][2] = new Pawn(WHITE,{x:0,y:0});
        board[6][3] = new Pawn(WHITE,{x:0,y:0});
        board[6][4] = new Pawn(WHITE,{x:0,y:0});
        board[6][5] = new Pawn(WHITE,{x:0,y:0});
        board[6][6] = new Pawn(WHITE,{x:0,y:0});
        board[6][7] = new Pawn(WHITE,{x:0,y:0});
    }



}