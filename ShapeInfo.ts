abstract class ShapeInfo{
    private name: string;
    constructor(name:string){
     this.name = name;
    }
    public toString(): string{
        return  "This figure is " + this.name;
    }
}