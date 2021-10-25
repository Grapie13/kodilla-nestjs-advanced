import { Tag } from '../enums/tag.enum';
import {
  IsDate,
  IsEnum,
  IsInt,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ProductDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsInt()
  price: number;

  @IsInt()
  count: number;

  @ValidateNested({ each: true })
  @IsEnum(Tag)
  tags: Tag[];

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
