import { Test, TestingModule } from '@nestjs/testing';
import { PlantationCropsService } from './plantation-crops.service';

describe('PlantationCropsService', () => {
  let service: PlantationCropsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantationCropsService],
    }).compile();

    service = module.get<PlantationCropsService>(PlantationCropsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
