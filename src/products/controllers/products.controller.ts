import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsService } from '../services/products.service';
import { ExternalProductDto } from '../dto/external-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { RoleGuard } from '../../shared/guards/role.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): ExternalProductDto[] {
    const products = this.productsService.getAllProducts();

    return products.map((product) => ExternalProductDto.fromEntity(product));
  }

  @Get('/:id')
  getProductById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): ExternalProductDto {
    const product = this.productsService.getProductById(id);

    return ExternalProductDto.fromEntity(product);
  }

  @UseGuards(RoleGuard)
  @Post('')
  createProduct(@Body() productDto: CreateProductDto): ExternalProductDto {
    const product = this.productsService.addProduct(productDto);

    return ExternalProductDto.fromEntity(product);
  }

  @UseGuards(RoleGuard)
  @Patch('/:id')
  updateProduct(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() productDto: UpdateProductDto,
  ): ExternalProductDto {
    const product = this.productsService.updateProduct(id, productDto);

    return ExternalProductDto.fromEntity(product);
  }

  @Delete('/:id')
  deleteProduct(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): ExternalProductDto {
    const product = this.productsService.deleteProduct(id);

    return ExternalProductDto.fromEntity(product);
  }
}
