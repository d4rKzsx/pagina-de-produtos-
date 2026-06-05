import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { Produto, ProdutoSchema } from './produto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Produto.name, schema: ProdutoSchema }
    ])
  ],
  providers: [ProdutoService],
  controllers: [ProdutoController],
})
export class ProdutoModule {}