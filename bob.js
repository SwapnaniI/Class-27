class Ball{   
    constructor(x,r){
        var options={
            isStatic: false,
            restitution: 0.9,
            friction: 0.1,
            density: 0.4
        }

        this.body=Bodies.circle(x,500,r,options);
        this.radius=r;
        World.add(world,this.body);
        
    
    }
    display(){
        fill(153, 153, 255)
        circle(this.body.position.x,this.body.position.y,(this.radius*2));        
        console.log(this.body.position.y);
    } 
     
    }