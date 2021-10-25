import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UserAddressDto } from './user-address.dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => UserAddressDto)
  address: UserAddressDto;

  @IsString()
  @IsNotEmpty()
  birthday: string;
}
