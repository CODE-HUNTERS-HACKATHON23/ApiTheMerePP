import { ApiProperty, OmitType } from '@nestjs/swagger';
import { UsuarioEntity } from '../../../providers/database/entities/usuario.entity';
import { RolEntitiy } from '../../../providers/database/entities/rol.entitiy';
import { Expose, Type } from 'class-transformer';

class RolInUsuario extends RolEntitiy {}

export class UsuarioDTO extends OmitType(UsuarioEntity, ['idRol']) {
    @ApiProperty({
        description: 'Rol del usuario',
        type: RolInUsuario,
        nullable: true,
    })
    @Type(() => RolInUsuario)
    @Expose()
    rol: RolInUsuario | null;

    constructor(partial: UsuarioDTO) {
        super();
        Object.assign(this, partial);
    }
}
