import { Body, Controller, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDTO } from './item.dto';

@Controller('item')
export class ItemController {

    constructor(private readonly itemService: ItemService){ }

    @Post('/new')
    createTask(@Body() item: ItemDTO) {
    }
}
