import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length, MinLength } from 'class-validator';
import { RoleEnum } from 'src/common/enums/role.enum';

export class CreateUsuarioDto {
  @ApiProperty({ description: 'Nombre de usuario único', example: 'juanperez' })
  @IsString({ message: 'El username debe ser una cadena de texto' })
  @Length(3, 100, { message: 'El username debe tener entre 3 y 100 caracteres' })
  @IsNotEmpty({ message: 'El username es obligatorio' })
  username: string;

  @ApiProperty({ description: 'Correo electrónico único del usuario', example: 'juan@email.com' })
  @IsEmail({}, { message: 'El email debe tener un formato válido' })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  email: string;

  @ApiProperty({ description: 'Contraseña del usuario', example: 'Secret123*' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  password: string;

  @ApiPropertyOptional({
    description: 'Rol del usuario. Si no se envía, se asigna USER por defecto.',
    enum: RoleEnum,
    example: RoleEnum.USER,
  })
  @IsOptional()
  @IsEnum(RoleEnum, { message: 'El rol debe ser admin o user' })
  roleName?: RoleEnum;
}
