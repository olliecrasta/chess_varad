class Rook {

constructor (colour,pos)  {

this.pos=pos 
this.colour=colour 
this.image=loadImage ("images/blackRook.png")

if(colour===WHITE){
    this.image=loadImage ("images/whiteRook.png")
}

this.alive=true 
this.posiblenNext =null;

}

possibleNextPosition (){}



}