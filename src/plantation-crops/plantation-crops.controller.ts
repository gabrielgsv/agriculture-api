import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePlantationCropDto } from './dto/create-plantation-crop.dto';
import { PlantationCropsService } from './plantation-crops.service';
import { UpdatePlantationCropDto } from './dto/update-plantation-crop.dto';

@Controller('plantation-crops')
export class PlantationCropsController {
  constructor(
    private readonly plantationCropsService: PlantationCropsService,
  ) {}

  @Post()
  create(@Body() createPlantationCropDto: CreatePlantationCropDto) {
    return this.plantationCropsService.create(createPlantationCropDto);
  }

  @Get()
  findAllByUser(@Query('user_id') user_id: string) {
    return this.plantationCropsService.findAllByUser(user_id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlantationCropDto: UpdatePlantationCropDto,
  ) {
    return this.plantationCropsService.update(id, updatePlantationCropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantationCropsService.remove(id);
  }
}
