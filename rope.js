class Rope {
    constructor(bodyA,pointB){
        var chainoptions={
            bodyA:bodyA,
            pointB:pointB,
            length:300,
            stiffness:1.5,
        }
        this.pointB=pointB
        this.chain = Constraint.create(chainoptions)
        World.add(world,this.chain)    
    }
    fly(){
        this.chain.bodyA=null
    }
    attach(body){
        this.chain.bodyA=body
    }
    display(){
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
}