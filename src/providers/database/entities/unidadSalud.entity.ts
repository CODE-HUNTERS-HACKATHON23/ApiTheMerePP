import { UnidadSalud } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UnidadSaludEntity implements UnidadSalud {
    @ApiProperty({
        description: 'ID de la unidad de salud',
    })
    @Expose()
    idUnidadSalud: number;

    @ApiProperty({
        description: 'Nombre de la unidad de salud',
    })
    @Expose()
    nombre: string;
}
