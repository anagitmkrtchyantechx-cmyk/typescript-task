class Rectangle extends ShapeInfo implements Shape{
  constructor(private a: number, private b: number){
    super("rectiangle");
  }

  perimeter(): number{
    return 2 * (this.a + this.b);
  }

  area(): number{
    return this.a * this.b;
  }
}