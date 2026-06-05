import { Injectable } from '@nestjs/common';
import { Produto, ProdutoDocument } from './produto.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './produto.dto';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectModel('Produto') 
          private readonly produtoModel: Model<ProdutoDocument>
    ) {}

    async create(data: CreateProdutoDto): Promise<Produto> { 
        const newProduto = new this.produtoModel(data);
        return newProduto.save();
    }

    async findAll(): Promise<Produto[]>{
        return this.produtoModel.find().exec();
    }

    async findOne( id: string): Promise<Produto> {
            const produto = await this.produtoModel.findById(id).exec();
            if (!produto) {
                throw new NotFoundException(`Produto não encontrado`);
            }
            return produto; 
    }

    async update(id: string, data: Partial<Produto>): Promise<Produto | null> {
        return this.produtoModel.findByIdAndUpdate(id, data, { new: true });
         
    }

    async delete(id: string): Promise<void> {
        await this.produtoModel.findByIdAndDelete(id).exec();
        
    }
}