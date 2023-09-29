import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';

@Injectable()
export class ProducersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createProducerDto: CreateProducerDto) {
    return this.prisma.producer.create({
      data: {
        ...createProducerDto,
        plantation_crops: {
          connect: createProducerDto.plantation_crops.map((id) => ({ id })),
        },
      },
    });
  }

  findByUser(user_id: string) {
    return this.prisma.producer.findMany({
      where: {
        user_id,
      },
      include: {
        plantation_crops: true,
      },
    });
  }

  update(id: string, updateProducerDto: UpdateProducerDto) {
    return this.prisma.producer.update({
      where: {
        id,
      },
      data: {
        ...updateProducerDto,
        plantation_crops: {
          set: updateProducerDto.plantation_crops.map((id) => ({ id })),
        },
      },
    });
  }

  remove(id: string) {
    return this.prisma.producer.delete({
      where: {
        id,
      },
    });
  }
}
