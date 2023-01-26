import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JuicesController } from './juices.controller';
import { JuicesService } from './juices.service';
import { JuiceSchema } from './schemas/juice.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Juice', schema: JuiceSchema }])],
  controllers: [JuicesController],
  providers: [JuicesService],
})
export class JuicesModule { }
