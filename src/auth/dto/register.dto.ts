import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class RegisterDto {
    @ApiProperty({ description: 'Nombre de usuario', example: 'juanperez' })
    @IsNotEmpty()
    username: string;

    @ApiProperty({ description: 'Correo del usuario', example: 'juan@email.com' })
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Contraseña del usuario', example: 'Secret123*' })
    @IsNotEmpty()
    password: string;
}