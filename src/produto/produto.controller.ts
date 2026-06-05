import { Body, Controller, Get, Post, Param, Put,Delete, NotFoundException } from '@nestjs/common';
import { Produto } from './produto.schema';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto, updateProdutoDto} from './produto.dto';

@Controller('produto')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    @Post()
    create(@Body() data: CreateProdutoDto) {
        return this.produtoService.create(data);
    }

    @Get()
    findAll() {
        return this.produtoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.produtoService.findOne(id);
       
    }

    @Put(":id")
    update(@Param('id') id: string, @Body() data:  Partial<updateProdutoDto>) {
        return this.produtoService.update(id, data);

    }
     
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.produtoService.delete(id);
    }
}
