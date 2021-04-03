class Paper{
    constructor(x,y){
        var options ={
            isStatic:false,
            density: 1.2,
            friction: 0.5,
            restitution:0.8
        }
        this.body = Matter.Bodies.circle(x,y,20, options);
        
        World.add(world,this.body);
        this.image=loadImage("paper.png")
    }
    display(){
        var pos=this.body.position;
        
        var angle=this.body.angle;
       push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);

        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop();
    
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        
    }
}