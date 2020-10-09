class Bob{
    constructor(x,y) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y, 20, options);
        this.radius=20;
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        //strokeWeight(2);
        //stroke("black");
        fill("pink");
        ellipse(pos.x,pos.y,20,20);
    }
}