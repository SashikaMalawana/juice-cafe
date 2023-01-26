import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JuicesController } from './juices/juices.controller';
import { JuicesService } from './juices/juices.service';
import { JuicesModule } from './juices/juices.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [JuicesModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, JuicesController],
  providers: [AppService, JuicesService],
})
export class AppModule { }
