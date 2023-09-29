import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProducerDto {
  @ApiProperty()
  @IsNumber()
  cpf?: number;

  @ApiProperty()
  @IsNumber()
  cnpj?: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  farm_name: string;

  @ApiProperty()
  @IsNumber()
  total_hectares: number;

  @ApiProperty()
  @IsNumber()
  arable_hectares: number;

  @ApiProperty()
  @IsNumber()
  vegetation_arable: number;

  @ApiProperty()
  @IsString()
  plantation_crops: string[];

  @ApiProperty()
  @IsString()
  uf: string;

  @ApiProperty()
  @IsString()
  city: number;

  @ApiProperty()
  @IsString()
  user_id: string;
}
