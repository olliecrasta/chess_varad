class King {

    constructor (pos,colour)  {
    
    this.pos=pos 
    this.colour=colour 
    this.image=loadImage ("images/blackKing.png")
    
    if(colour===WHITE){
        this.image=loadImage ("images/whiteKing.png")
    }
    
    this.alive=true 
    this.posiblenNext 
    
    }
    
    possibleNextPosition ()
    
    
    
    }