import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UserEntity } from './entities/usuario.entity';
import { UsuariosService } from './usuarios.service';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
	constructor(private readonly usuariosService: UsuariosService) {}

	@ApiOperation({ summary: 'Crear un nuevo usuario' })
	@ApiCreatedResponse({ description: 'Usuario creado correctamente', type: UserEntity })
	@ApiNotFoundResponse({ description: 'El rol no existe o email/username ya están en uso' })
	@Post()
	async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<UserEntity> {
		return this.usuariosService.create(createUsuarioDto);
	}

	@ApiOperation({ summary: 'Listar todos los usuarios' })
	@ApiOkResponse({ description: 'Listado de usuarios', type: UserEntity, isArray: true })
	@Get()
	async findAll(): Promise<UserEntity[]> {
		return this.usuariosService.findAll();
	}

	@ApiOperation({ summary: 'Obtener un usuario por id' })
	@ApiParam({ name: 'id', type: Number, description: 'Id del usuario' })
	@ApiOkResponse({ description: 'Usuario encontrado', type: UserEntity })
	@ApiNotFoundResponse({ description: 'Usuario no encontrado' })
	@Get(':id')
	async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
		return this.usuariosService.findOne(id);
	}
}
