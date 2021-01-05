class Ground{
    
   
constructor(){
    var options={
        isStatic: true
    }
    this.body=Bodies.rectangle(400,350,200,30,options);
    World.add(world,this.body);

}
display(){
    rectMode(CENTER);
    fill(255, 191, 128);
    noStroke();
    rect(400,350,200,30);
}
    

}