import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ItemModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
