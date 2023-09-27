import { Module } from '@nestjs/common';
import { PlantationCropsController } from './plantation-crops.controller';
import { PlantationCropsService } from './plantation-crops.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PlantationCropsController],
  providers: [PlantationCropsService, PrismaService],
})
export class PlantationCropsModule {}
