class Tall{
    constructor(x,y){
        this.body = Bodies.rectangle(250,620,20,100,{isStatic:true});
        this.height = 100;
        this.width = 20;    
        World.add(world,this.body);    
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}