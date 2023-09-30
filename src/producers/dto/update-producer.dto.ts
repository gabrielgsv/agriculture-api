import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateProducerDto } from './create-producer.dto';

export class UpdateProducerDto extends PartialType(CreateProducerDto) {
  @ApiProperty()
  @IsString()
  user_id?: string;
}
