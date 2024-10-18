import { DataSource, Repository } from "typeorm";
import { ItemDTO } from "src/item/item.dto";
import { Item } from "../entity/Item";
import { ConfigService } from "@nestjs/config";

export class ItemRepository {
    private itemRepo: Repository<Item>;

    constructor(private configService: ConfigService){
        this.itemRepo = new DataSource({
            type: 'postgres',
            host: configService.get<string>('POSTGRES_HOST'),
            port: configService.get<number>('POSTGRES_PORT'),
            username: configService.get<string>('POSTGRES_USER'),
            password: configService.get<string>('POSTGRES_PASSWORD'),
            database: configService.get<string>('POSTGRES_DB'),
            entities: ['./entities/*.ts'],
            migrations: ['./migrations/*.ts'],
            synchronize: false,
        }).getRepository(Item);
    }

    async createItem(item: ItemDTO) {
        let newItem = this.itemRepo.create(new Item());
        const {name, quantity, quantityType, category} = item;
        newItem = {...newItem, name, quantity, quantityType, category};
        return await this.itemRepo.save(newItem);
    }
}