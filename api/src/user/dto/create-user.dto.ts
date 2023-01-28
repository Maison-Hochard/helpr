import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  username: string;

  @IsString()
  @MinLength(3)
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  profilePicture?: string;

  role?: number;
}
