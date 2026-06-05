import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type ProdutoDocument = Produto & Document;

@Schema({ timestamps: true })
export class Produto {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  preco!: number;

  @Prop({ required: false, default: '' })
  descricao!: string;

  @Prop({ required: true })
  estoque!: number;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);