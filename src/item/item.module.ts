import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/db/entity/Item';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSourceFactory } from 'src/db/datasource';

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
        entities: ['./entities/*.ts'],
        migrations: ['./migrations/*.ts'],
        synchronize: false,
      }),
    }), 
        TypeOrmModule.forFeature([Item])
    ],
    controllers: [ItemController],
    providers: [ItemService]
})
export class ItemModule {}
