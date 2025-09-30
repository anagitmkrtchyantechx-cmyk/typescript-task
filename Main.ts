const t = new Triangle(3, 4, 5);
const c = new Circle(10);
const r = new Rectangle(4, 6);

const shapes: Shape[] = [t, c, r];

for (const s of shapes) {
  console.log(s.toString());
  console.log("Perimeter:", s.perimeter());
  console.log("Area:", s.area());
}
