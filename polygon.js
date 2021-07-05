/*class poly{
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        strokeWeight(2);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER);
        image("polygon.png",this.x,this.y,50,50);

    }
}
*/