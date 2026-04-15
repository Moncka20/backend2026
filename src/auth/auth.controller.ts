import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Registrar un nuevo usuario y generar token JWT' })
  @ApiCreatedResponse({
    description: 'Usuario registrado correctamente',
    schema: {
      example: {
        access_token: '<JWT_TOKEN>',
      },
    },
  })
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    console.log(dto);
    return this.authService.register(dto);
  }
}
