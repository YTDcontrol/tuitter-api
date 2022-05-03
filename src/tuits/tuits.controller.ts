import { Controller, Get, Param } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
  @Get()
  getTuits(): string {
    return 'Hello from TuitsController';
  }

  @Get(':id')
  getTuit(@Param('id') id: string) {
    return `Your tuit is ${id}`;
  }
}
