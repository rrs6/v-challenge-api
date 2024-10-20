import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/db/entity/Item';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ItemRepository } from 'src/db/repository/Item';

@Module({
    imports: [TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: [Item],
        migrations: [__dirname + "/../db/migrations/*.ts"],
        synchronize: false,
      }),
    }), 
        TypeOrmModule.forFeature([Item])
    ],
    controllers: [ItemController],
    providers: [ItemService, ItemRepository]
})
export class ItemModule {}
