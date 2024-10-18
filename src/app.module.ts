import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { ConfigModule } from '@nestjs/config';
import { DataSourceFactory } from './db/datasource';

@Module({
  imports: [ItemModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
