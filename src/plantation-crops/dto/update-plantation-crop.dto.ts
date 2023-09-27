import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePlantationCropDto } from './create-plantation-crop.dto';
import { IsString } from 'class-validator';

export class UpdatePlantationCropDto extends PartialType(
  CreatePlantationCropDto,
) {
  @ApiProperty()
  @IsString()
  user_id?: string;
}
