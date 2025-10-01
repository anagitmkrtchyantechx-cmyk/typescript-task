import {Shape} from "./Shape";
import { ShapeInfo } from "./ShapeInfo";

export class Circle extends ShapeInfo implements Shape{
  constructor(private r:number){
     super("cyrcle");
  }

  perimeter(): number{
    return Math.PI * this.r * 2;
  }

  area(): number{
    return Math.PI * this.r *this.r;
  }
}