class Rope{
constructor(bodyF,bodyL,xOffset){
    this.xOffset = xOffset;
    this.yOffset = 0;
    var options = {
        stiffness : 1.0,
        length : 180,
        bodyA : bodyL,
        bodyB : bodyF,
        pointB : {x : this.xOffset, y: this.yOffset}
    }
    this.rope = Constraint.create(options);
    World.add(world,this.rope);

}


}