import { Controller, Get, Query } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Get('multiply')
  multiply(@Query('a') a: number, @Query('b') b: number): number {
    return this.mathService.multiply(a, b);
  }
}
