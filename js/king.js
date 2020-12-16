class King {

    constructor (colour,pos)  {
    
    this.pos=pos 
    this.colour=colour 
    if(colour===BLACK){
    this.image=loadImage ("images/blackKing.png")
    }
    if(colour===WHITE){
        this.image=loadImage ("images/whiteKing.png")
    }
    
    this.alive=true 
    this.posiblenNext =[]
    
    }
    
    recalculatePossibleNext() {
        console.log('recalculating pos for king');
        
    }
    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
          //return true if successful ,else return false
    }
    
    
    
    }