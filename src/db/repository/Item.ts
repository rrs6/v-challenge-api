import { Repository } from "typeorm";
import { ItemDTO } from "src/item/item.dto";
import { Item } from "../entity/Item";
import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
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

    async getItens(page: number) {
        const totalItems = await this.itemRepo.count();
        const totalPages = Math.ceil(totalItems / 10);
        const items = await this.itemRepo.find({ skip: (page - 1) * 10, take: 10 });
        return {items,totalPages};
    }

    async findById(id: number) {
        let item = await this.itemRepo.findOneBy({id});
        return item;
    }

    async changeItem(item: ItemDTO, id: number) {
        const item0 = await this.itemRepo.findOneBy({ id }) as Item;
    
        if(!item0) 
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    
        item0.complete = item.complete ?? item0.complete;
        item0.name = item.name ?? item0.name;
        item0.category = item.category ?? item0.category;
        item0.quantity = item.quantity ?? item0.quantity;
        item0.quantityType = item.quantityType ?? item0.quantityType;

        return await this.itemRepo.save(item0);
    }
}