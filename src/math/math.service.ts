import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  multiply(a: number, b: number): number {
    return a * b;
  }
}
