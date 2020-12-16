class Knight {

    constructor (colour,pos)  {
    
    this.pos=pos 
    this.colour=colour 
    this.image=loadImage ("images/blackKnight.png")
    
    if(colour===WHITE){
        this.image=loadImage ("images/whiteKnight.png")
    }
    
    this.alive=true 
    this.posiblenNext =[]
    }
    
    recalculatePossibleNext() {
        console.log('recalculating pos for knight');
   
    }
    possibleNextPositions() {
        return this.possiblenNext;
    }

    moveTo(pos) {
          //return true if successful ,else return false
    }
    
    
    }