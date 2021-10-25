import { Tag } from '../enums/tag.enum';
import { ProductDto } from './product.dto';
import { IsEnum, IsInt, IsString } from 'class-validator';

export class ExternalProductDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsInt()
  price: number;

  @IsInt()
  count: number;

  @IsEnum(Tag, { each: true })
  tags: Tag[];

  @IsString()
  createdAt: string;

  @IsString()
  updatedAt: string;

  static fromEntity(entity: ProductDto): ExternalProductDto {
    return {
      ...entity,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt.toISOString(),
    };
  }
}
