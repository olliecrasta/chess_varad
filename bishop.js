class Bishop {

    constructor (pos,colour)  {
    
    this.pos=pos 
    this.colour=colour 
    this.image=loadImage ("images/blackBishop.png")
    
    if(colour===WHITE){
        this.image=loadImage ("images/whiteBishop.png")
    }
    
    this.alive=true 
    this.posiblenNext 
    
    }
    
    possibleNextPosition ()
    
    
    
    }