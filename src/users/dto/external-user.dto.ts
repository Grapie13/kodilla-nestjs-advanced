import { UserDto } from './user.dto';
import { UserAddressDto } from './user-address.dto';
import { IsEmail, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class ExternalUserDto {
  @IsString()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @Type(() => UserAddressDto)
  address: UserAddressDto;

  @IsString()
  birthday: string;

  static fromEntity(entity: UserDto): ExternalUserDto {
    return {
      ...entity,
      birthday: entity.birthday.toISOString(),
    };
  }
}
