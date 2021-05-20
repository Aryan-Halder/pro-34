const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var ground
var hero
var fly
var backgroundImage
var box1,box2,box3,box4,box5,box6,box7
var box8,box9,box10,box11,box12,box13
var box14,box15,box16,box17,box18,box19,box20,box21,box22
var box23,box24,box25,box26,box27
var monster

function preload() {
backgroundImage = loadImage("background.png")
}


function setup() {
  createCanvas(3000, 800)
  
  engine = Engine.create()
  world = engine.world

  hero = new Hero(400,50,200)
  fly = new Fly(hero.body,{x:600,y:50})
  ground = new Ground(750,620,1000,10)
  monster = new Monster(1200,100,50,50)

  Block1 = new Block(800,600,50,50)
  Block2 = new Block(800,540,50,50)
  Block3 = new Block(800,500,50,50)
  Block4 = new Block(800,450,50,50)
  Block5 = new Block(800,400,50,50)
  Block6 = new Block(800,350,50,50)
  Block7 = new Block(800,300,50,50)
  Block8 = new Block(870,600,50,50)
  Block9 = new Block(870,540,50,50)
  Block10 = new Block(870,500,50,50)
  Block11 = new Block(870,450,50,50)
  Block12 = new Block(870,400,50,50)
  Block13 = new Block(870,350,50,50)
  Block14 = new Block(940,600,50,50)
  Block15 = new Block(940,540,50,50)
  Block16 = new Block(940,500,50,50)
  Block17 = new Block(940,450,50,50)
  Block18 = new Block(940,400,50,50)
  Block19 = new Block(940,350,50,50)
  Block20 = new Block(940,300,50,50)
  Block21 = new Block(940,250,50,50)
  Block22 = new Block(940,200,50,50)
  Block23 = new Block(1010,600,50,50)
  Block24 = new Block(1010,540,50,50)
  Block25 = new Block(1010,500,50,50)
  Block26 = new Block(1010,450,50,50)
  Block27 = new Block(1010,400,50,50)

}


function draw() {
  background(backgroundImage);
  Engine.update(engine)
  textSize(40)
  fill("black")  
  stroke("black")
  text("Drag the Superhero to defeat the Monster",600,60)

  Block1.display()
  Block2.display()
  Block3.display()
  Block4.display()
  Block5.display()
  Block6.display()
  Block7.display()
  Block8.display()
  Block9.display()
  Block10.display()
  Block11.display()
  Block12.display()
  Block13.display()
  Block14.display()
  Block15.display()
  Block16.display()
  Block17.display()
  Block18.display()
  Block19.display()
  Block20.display()
  Block21.display()
  Block22.display()
  Block23.display()
  Block24.display()
  Block25.display()
  Block26.display()
  Block27.display()

  hero.display()
  ground.display()
  monster.display()
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY})
}
