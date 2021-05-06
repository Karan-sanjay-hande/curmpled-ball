class Paper 
{
constructor(x,y,radius)
 {
    var options = 
    {
     'restitution':0.3,
     'friction':0,
     'density':1.2
    }
      
     this.paperimg=loadImage("paper.png"),
     this.radius=radius,
     this.x=x,
     this.y=y,
     this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options),
     World.add(world,this.body)
}  
  display()
  {
    push()
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER);
    image(this.paperimg,0,0,this.radius,this.radius);
    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)  ;    
  }
   

}