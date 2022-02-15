class Base{
    constructor(x,y,width,height,color,isStatic){
        var options={
         isStatic:isStatic
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.color=color
        World.add(world,this.body)
        
    }
    show(){
        var pos=this.body.position
        push ()
        translate(pos.x.y)
        rectMode(CENTER)
        fill(this.color)
        rect(0,0,this.width,this.height)
        pop()
        
    }

    
}