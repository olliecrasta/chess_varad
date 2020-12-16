class Bishop {

    constructor (colour,pos)  {
    
    this.pos=pos 
    this.colour=colour 
    this.image=loadImage ("images/blackBishop.png")
    
    if(colour===WHITE){
        this.image=loadImage ("images/whiteBishop.png")
    }
    
    this.alive=true 
    this.posiblenNext =[]
    
    }
    
    recalculatePossibleNext() {
        console.log('recalculating pos for bishop');
        
        this.possiblenNext = this.possiblenNext.filter(p => p.x >= 0 && p.x < 8 &&  p.y >= 0 && p.y < 8)
    }
    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
         //return true if successful ,else return false
    }
    
    }