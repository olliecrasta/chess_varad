class Pawn {

    constructor (pos,colour)  {
    
    this.pos=pos 
    this.colour=colour 
    this.image=loadImage ("images/blackPawn.png")
    
    if(colour===WHITE){
        this.image=loadImage ("images/whitePawn.png")
    }
    
    this.alive=true 
    this.posiblenNext 
    
    }
    
    possibleNextPosition ()
    
    
    
    }