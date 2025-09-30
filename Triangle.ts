 class Triangle extends ShapeInfo implements Shape{
   constructor(private a: number, private b: number, private c: number){
     super("triangle");
   }
     perimeter(): number {
         return this.a + this.b + this.c;
     }
     area(): number {
         const p = this.perimeter() / 2;
         if(!this.isTriangle){
            throw new Error("This is not triangle")
         }
         return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
     }
 
     isTriangle(): boolean{
        const a = this.a;
        const b = this.b;
        const c = this.c;
        if(a >= b + c){
            return false;
        } else if (b >= a + c){
            return false;
        } else if (c >= a + b){
            return false;
        }
        return true;
     }
}