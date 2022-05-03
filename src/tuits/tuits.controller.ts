import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

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

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body('message') message: string) {
    return `Your tuit ${id} has been updated with: ${message}`;
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: string) {
    return `Your tuit ${id} has been deleted`;
  }
}
