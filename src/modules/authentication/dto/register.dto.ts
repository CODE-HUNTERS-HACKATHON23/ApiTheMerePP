import { IntersectionType, OmitType, PickType } from '@nestjs/swagger';
import { UsuarioEntity } from '../../../providers/database/entities/usuario.entity';
import { PacienteEntity } from '../../../providers/database/entities/paciente.entity';

export class RegisterDTO extends IntersectionType(
    PickType(UsuarioEntity, ['usuario', 'correo', 'contrasena']),
    OmitType(PacienteEntity, ['idPaciente', 'idUsuario'])
) {}
