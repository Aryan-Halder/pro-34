class Hero{
   constructor(x,y,radius){
      var options = {
        restitution :0.8,
        frictionAir :1,
        density :1
      }
      this.x = x
      this.y = y
      this.body = Bodies.circle(x,y,radius/2,options)
      World.add(world,this.body)
      this.image = loadImage("Hero.png")
    }  
    display(){
      push();
      translate (this.body.position.x , this.body.position.y)
      imageMode(CENTER)
      scale (0.3)
      image (this.image,0,0,this.radius,this.radius)   
      pop()
    }   
}