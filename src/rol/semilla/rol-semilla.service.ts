import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from 'src/common/enums/role.enum';
import { RoleEntity } from 'src/rol/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolSemillaService implements OnModuleInit {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async onModuleInit() {
    const count = await this.roleRepository.count();
    if (count > 0) return;

    await this.roleRepository.save([
      { name: RoleEnum.ADMIN },
      { name: RoleEnum.USER },
    ]);
  }
}
