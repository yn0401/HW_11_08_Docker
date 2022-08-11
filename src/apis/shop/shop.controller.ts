import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Item } from 'src/models/shop.model';
import { ShopService } from 'src/services/shop/shop.service';

@Controller('shop')
export class ShopController {
    constructor(private itemService: ShopService){

    }

    @Get("/")
    getItemById(@Query(`id`) id: string){
        return this.itemService.getItemById(id);
    }
    @Get("/all")
    getAllItem(){
        return this.itemService.getAllItems();
    }
    @Post("/")
    addItem(@Body() item: Item){
        return this.itemService.addItem(item);
    }
    @Put("/")
    updateNote(@Body() item: Item){
        return this.itemService.updateItem(item.id, item);
    }
    @Delete("/")
    deleteItem(@Query(`id`) id: string){
        return this.itemService.deleteItem(id);
    }
}
