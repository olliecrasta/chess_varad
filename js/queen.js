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
    
    possibleNextPosition (){}
    
    
    
    }