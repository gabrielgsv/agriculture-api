import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Delete,
} from '@nestjs/common';
import { CreateProducerDto } from './dto/create-producer.dto';
import { ProducersService } from './producers.service';
import { UpdateProducerDto } from './dto/update-producer.dto';

@Controller('producers')
export class ProducersController {
  constructor(private readonly producersService: ProducersService) {}

  @Post()
  create(@Body() createProducerDto: CreateProducerDto) {
    return this.producersService.create(createProducerDto);
  }

  @Get()
  findByUser(@Query('user_id') user_id: string) {
    return this.producersService.findByUser(user_id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProducerDto: UpdateProducerDto,
  ) {
    return this.producersService.update(id, updateProducerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producersService.remove(id);
  }
}
