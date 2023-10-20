import { Expediente } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class ExpedienteEntity implements Expediente {
    @ApiProperty({
        description: 'Fecha de creación del expediente',
    })
    @Expose()
    fechaCreacion: Date;

    @ApiProperty({
        description: 'Fecha de modificación del expediente',
    })
    @Expose()
    fechaModificacion: Date;

    @ApiProperty({
        description: 'ID del expediente',
    })
    @Expose()
    idExpediente: number;

    @ApiProperty({
        description: 'ID del paciente',
    })
    @Expose()
    idPaciente: number;

    @ApiProperty({
        description: 'Número de expediente',
    })
    @IsString()
    @Expose()
    numeroExpediente: string;
}
