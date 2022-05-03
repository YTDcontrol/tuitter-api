import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

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

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body('message') message: string) {
    return `Your tuit wass: ${message}`;
  }
}
