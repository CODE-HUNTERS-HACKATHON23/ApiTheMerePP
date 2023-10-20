import { PickType } from '@nestjs/swagger';
import { UsuarioEntity } from '../../../providers/database/entities/usuario.entity';

export class LoginDTO extends PickType(UsuarioEntity, [
    'correo',
    'contrasena',
] as const) {}
