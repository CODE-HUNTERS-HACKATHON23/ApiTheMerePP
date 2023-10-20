import { Departamento } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class DepartamentoEntity implements Departamento {
    @ApiProperty({
        description: 'ID del departamento',
    })
    @Expose()
    idDepartamento: number;

    @ApiProperty({
        description: 'Nombre del departamento',
    })
    @IsString()
    @Expose()
    nombre: string;
}
