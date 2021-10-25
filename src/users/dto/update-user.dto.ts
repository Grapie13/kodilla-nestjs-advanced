import { UserAddressDto } from './user-address.dto';
import { IsEmail, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto {
  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsEmail()
  email?: string;

  @Type(() => UserAddressDto)
  address?: UserAddressDto;

  @IsString()
  birthday?: string;
}
