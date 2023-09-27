import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePlantationCropDto } from './dto/create-plantation-crop.dto';
import { UpdatePlantationCropDto } from './dto/update-plantation-crop.dto';

@Injectable()
export class PlantationCropsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPlantationCropDto: CreatePlantationCropDto) {
    return this.prisma.plantationCrops.create({
      data: createPlantationCropDto,
    });
  }

  findAllByUser(user_id: string) {
    return this.prisma.plantationCrops.findMany({
      where: {
        user_id,
      },
    });
  }

  update(id: string, updatePlantationCropDto: UpdatePlantationCropDto) {
    return this.prisma.plantationCrops.update({
      where: {
        id,
      },
      data: updatePlantationCropDto,
    });
  }

  remove(id: string) {
    return this.prisma.plantationCrops.delete({
      where: {
        id,
      },
    });
  }
}
