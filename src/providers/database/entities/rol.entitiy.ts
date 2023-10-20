import { Rol } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class RolEntitiy implements Rol {
    @ApiProperty({
        description: 'Id del rol',
    })
    @Expose()
    idRol: number;

    @ApiProperty({
        description: 'Nombre del rol',
    })
    @Expose()
    nombre: string;
}
