class throwerBall{
   constructor(x,y,r){
     this.body = Bodies.circle(x,y,r  );
     this.r  = r ;
     World.add(world,this.body);
   }
   display(){
    const pos = this.body.position ;
    const angle = this.body.angle ;
    push();
    translate(pos.x , pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    ellipse(0,0,this.r);
    pop();

   }
}