import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProdutoDto {
    @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
    @IsString({ message: 'O nome do produto deve ser uma string' })
    name!: string;

    @IsNotEmpty({ message: 'O preço do produto é obrigatório' })
    @IsNumber({}, { message: 'O preço do produto deve ser um número' })
    preco!: number;

    @IsOptional()
    @IsString({ message: 'A descrição deve ser uma string' })
    descricao?: string;

    @IsNotEmpty({ message: 'A quantidade em estoque é obrigatória' })
    @IsNumber({}, { message: 'O estoque deve ser um número' })
    estoque!: number;
}

export class updateProdutoDto {
    @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
    @IsString({ message: 'O nome do produto deve ser uma string' })
    name!: string;

    @IsNotEmpty({ message: 'O preço do produto é obrigatório' })
    @IsNumber({}, { message: 'O preço do produto deve ser um número' })
    preco!: number;

    @IsOptional()
    @IsString({ message: 'A descrição deve ser uma string' })
    descricao?: string;

    @IsNotEmpty({ message: 'A quantidade em estoque é obrigatória' })
    @IsNumber({}, { message: 'O estoque deve ser um número' })
    estoque!: number;
}