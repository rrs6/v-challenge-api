import { Injectable } from '@nestjs/common';
import { ItemRepository } from 'src/db/repository/Item';
import { ItemDTO } from './item.dto';

@Injectable()
export class ItemService {
    constructor(private readonly itemRepo: ItemRepository) {}

    async createItem(item: ItemDTO) {
        return await this.itemRepo.createItem(item);
    }

    async getItens(page: number) {
        return await this.itemRepo.getItens(page);
    }

    async changeItem(item: ItemDTO, id: number) {
        return await this.itemRepo.changeItem(item, id);
    }
}
