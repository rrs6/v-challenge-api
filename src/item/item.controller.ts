import { Body, Controller, Post } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(private readonly itemService: ItemService){ }

    @Post('/new')
    createTask(@Body() item: any) {
        console.log(process.env.POSTGRES_DB);
        console.log(item);
    }
}
