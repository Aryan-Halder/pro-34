class Monster{
    constructor(x,y,radius){
       var options = {
         'restitution' :0.8,
         'friction' :1,
         'density' :20
       }
       this.x = x
       this.y = y
       this.body = Bodies.circle(x,y,radius/2,options)
       World.add(world,this.body)
       this.image = loadImage("Monster-01.png")
     }  
     display(){
       var paperpos = this.body.position
       push()
       translate (paperpos.x , paperpos.y)
       imageMode(CENTER)
       strokeWeight(3)
       scale (0.2)
       image (this.image,0,0,this.radius,this.radius) 
       pop()
     }   
 }