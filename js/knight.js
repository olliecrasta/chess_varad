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
    
    possibleNextPosition (){}
    
    
    
    }