const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var MyEngine, MyWorld
var ball,ground
function setup() {

  createCanvas(400,400);

  MyEngine = Engine.create()
  MyWorld = MyEngine.world
var ballOptions ={
  restitution: 1.0
}
  ball = Bodies.circle(250,100,20, ballOptions)
  World.add(MyWorld,ball)
  var Options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,370,400,10, Options)
  World.add(MyWorld,ground)
}

function draw() {
  background(0)
  Engine.update(MyEngine)
  fill("brown")
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20)
  fill("green")
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 10 )
} 
 
 
