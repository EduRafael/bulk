import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './modules/app/app.controller';
import { AppService } from './modules/app/app.service';
import { BulkModule } from './modules/bulk/bulk.module';

import { DBConfig } from './config/db.config';
import BaseConfig from './config/index.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [BaseConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DBConfig,
    }),
    BulkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
