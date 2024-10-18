import { DataSource, Repository } from "typeorm";
import { ItemDTO } from "src/item/item.dto";
import { Item } from "../entity/Item";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";
import { dataSource } from "../datasource";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ItemRepository {
    constructor(@InjectRepository(Item) private itemRepo: Repository<Item>){}

    async createItem(item: ItemDTO) {
        let newItem = this.itemRepo.create(new Item());
        const {name, quantity, quantityType, category} = item;
        newItem = {...newItem, name, quantity, quantityType, category};
        return await this.itemRepo.save(newItem);
    }
}