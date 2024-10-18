import { Injectable } from '@nestjs/common';
import { ItemRepository } from 'src/db/repository/Item';
import { ItemDTO } from './item.dto';

@Injectable()
export class ItemService {
    constructor(private readonly itemRepo: ItemRepository) {}

    async createItem(item: ItemDTO) {
        return await this.itemRepo.createItem(item);
    }
}
