class Queen {

    constructor (colour,pos)  {
    
    this.pos=pos 
    this.colour=colour 
    this.image=loadImage ("images/blackQueen.png")
    
    if(colour===WHITE){
        this.image=loadImage ("images/whiteQueen.png")
    }
    
    this.alive=true 
    this.posiblenNext =[]
    
    }
    
    recalculatePossibleNext() {
        console.log('recalculating pos for queen');
        this.possiblenNext = [];
        for (var i = 0; i < 8; i++) {
            this.possiblenNext.push({ x: this.pos.x+i, y: this.pos.y });
            this.possiblenNext.push({ x: this.pos.x-i, y: this.pos.y });
            this.possiblenNext.push({ x: this.pos.x, y: this.pos.y+i });
            this.possiblenNext.push({ x: this.pos.x, y: this.pos.y-i });
            for (var j = 0; j < 8; j++) {
                if(i===j ){
                    this.possiblenNext.push({ x: this.pos.x+i, y: this.pos.y+j });
                    this.possiblenNext.push({ x: this.pos.x+i, y: this.pos.y-j });
                    this.possiblenNext.push({ x: this.pos.x-i, y: this.pos.y+j });
                    this.possiblenNext.push({ x: this.pos.x-i, y: this.pos.y-j });
                }
            }
        }
        this.possiblenNext = this.possiblenNext.filter(p => p.x >= 0 && p.x < 8 &&  p.y >= 0 && p.y < 8 && !(p.x===this.pos.x&&p.y===this.pos.y))

    }
    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
          //return true if successful ,else return false
    }
    
    }