class Rope{
  constructor(bodyA,pointB){
    var options={
     bodyA:bodyA,
     pointB:pointB,
     length:200,
     stiffness:0.1   
    }
    this.pointB=pointB;
    this.sling=Constraint.create(options);
    World.add(world,this.sling)  
  }
  
  display(){
    
      var pointA=this.sling.bodyA.position;
      var pointB=this.pointB;
      strokeWeight(4);
      line(pointA.x,pointA.y,pointB.x,pointB.y)
  }

}
  
  
  
  
  
    
    