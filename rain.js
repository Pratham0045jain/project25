class Rain {
    constructor(y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        //'isStatic': true
        
      }
      this.body = Bodies.rectangle(random(0,800),y,width,height,options);
      this.width = width;
      this.height =  height;
      
      this.image = loadImage("sprites/drop.png");
      World.add(world, this.body);

      Matter.Body.setVelocity(this.body,{x:0 , y:10});
    }
    display(){

      if(this.body.position.y > 400){
        this.body.position.y = 0;
        Matter.Body.setVelocity(this.body,{x:0 , y:10});
      }
      
        push();
        
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0, 0,this.width,this.height);
        
        pop();
        
    }
  };
