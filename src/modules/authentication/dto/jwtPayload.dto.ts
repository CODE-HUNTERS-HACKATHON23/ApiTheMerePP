import { ApiProperty, IntersectionType, PickType } from '@nestjs/swagger';
import { UsuarioEntity } from '../../../providers/database/entities/usuario.entity';

export class JWTPayloadDTO extends IntersectionType(
    PickType(UsuarioEntity, ['usuario', 'correo', 'idUsuario'])
) {
    @ApiProperty({
        description: 'Rol del usuario',
    })
    rol?: string;
}
