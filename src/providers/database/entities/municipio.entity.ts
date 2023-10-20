import { Municipio } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MunicipioEntity implements Municipio {
    @ApiProperty({
        description: 'ID del departamento',
    })
    @Expose()
    idDepartamento: number;

    @ApiProperty({
        description: 'ID del municipio',
    })
    @Expose()
    idMunicipio: number;

    @ApiProperty({
        description: 'Nombre del municipio',
    })
    @Expose()
    nombre: string;
}
