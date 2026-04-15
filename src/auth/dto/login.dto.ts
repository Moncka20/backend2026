import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ description: 'Correo del usuario', example: 'juan@email.com' })
    email: string;

    @ApiProperty({ description: 'Contraseña del usuario', example: 'Secret123*' })
    password: string;
}