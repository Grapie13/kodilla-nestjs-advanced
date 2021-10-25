import { IsDate, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserAddressDto } from './user-address.dto';

export class UserDto {
  @IsString()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @ValidateNested()
  @Type(() => UserAddressDto)
  address: UserAddressDto;

  @IsDate()
  birthday: Date;
}
