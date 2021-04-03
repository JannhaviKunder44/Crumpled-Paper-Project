class Trash {
    constructor() {
      var options = {
          isStatic: true
      }
      this.bodybottom = Bodies.rectangle(600,690,200,10,options);
      this.leftbody = Bodies.rectangle(500,600,10,200,options);
      this.rightbody = Bodies.rectangle(700,600,10,200,options);
      
      World.add(world, [this.bodybottom,this.leftbody,this.rightbody]);
      this.image=loadImage("dustbingreen.png")
    }
    display(){
      var pos =this.bodybottom.position;
      
      fill("white");
      
      imageMode(CENTER);
      image(this.image, pos.x,pos.y-100, 200, 200);
    }
  };
