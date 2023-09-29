import { Module } from '@nestjs/common';
import { ProducersService } from './producers.service';
import { ProducersController } from './producers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProducersController],
  providers: [ProducersService, PrismaService],
})
export class ProducersModule {}
