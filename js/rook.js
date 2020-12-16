class Rook {

    constructor(colour, pos) {

        this.pos = pos
        this.colour = colour
        this.image = loadImage("images/blackRook.png")
        // this.sprite = createSprite(pos.x * chessBoard.size + chessBoard.size / 2, pos.y * chessBoard.size + chessBoard.size / 2, 10, 10)
        // this.sprite.addImage(this.image);
        this.scale = 0.6;
        if (colour === WHITE) {
            this.image = loadImage("images/whiteRook.png")
        }

        this.alive = true
        this.possiblenNext = null;
        console.log(chessBoard.size)

    }

    recalculatePossibleNext() {
        console.log('recalculating pos');
        this.possiblenNext = [];
        for (var i = 0; i < 8; i++) {
           
                this.possiblenNext.push({ x: i, y: this.pos.y });
        }
        for (var i = 0; i < 8; i++) {
            
                this.possiblenNext.push({ x: this.pos.x, y: i })
        }
        console.log(this.possibleNext)
       

      //  this.possiblenNext = this.possiblenNext.filter(p => p.x >= 0 && p.x < 8 &&  p.y >= 0 && p.y < 8)

        this.possiblenNext = this.possiblenNext.filter((p)=>{return p.x>=0&&p.x<8&&p.y>=0&&p.y<8 && !(this.pos.x===p.x && this.pos.y ===p.y)})
    }
  

    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
          //return true if successful ,else return false
    }

}