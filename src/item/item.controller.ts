import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDTO } from './item.dto';

@Controller('item')
export class ItemController {

    constructor(private readonly itemService: ItemService){ }

    @Post('/new')
    async createItem(@Body() item: ItemDTO) {
        return await this.itemService.createItem(item);
    }

    @Get()
    async getItems(@Query() query: any) {
        return await this.itemService.getItens(query.page);
    }

    @Put(':id')
    async changeItem(@Body() item: ItemDTO, @Param('id') id: number) {
        return await this.itemService.changeItem(item, id);
    }
}
