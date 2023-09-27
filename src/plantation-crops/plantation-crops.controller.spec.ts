import { Test, TestingModule } from '@nestjs/testing';
import { PlantationCropsController } from './plantation-crops.controller';
import { PlantationCropsService } from './plantation-crops.service';

describe('PlantationCropsController', () => {
  let controller: PlantationCropsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantationCropsController],
      providers: [PlantationCropsService],
    }).compile();

    controller = module.get<PlantationCropsController>(PlantationCropsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
