import { Tratamiento } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';
import { Expose, Type } from 'class-transformer';

export class TratamientoEntity implements Tratamiento {
    @ApiProperty({
        description: 'Dosis del tratamiento',
    })
    @IsString()
    @Expose()
    dosis: string;

    @ApiProperty({
        description: 'Fecha de finalización del tratamiento',
    })
    @IsDate()
    @Expose()
    @Type(() => Date)
    fechaFin: Date;

    @ApiProperty({
        description: 'Fecha de inicio del tratamiento',
    })
    @IsDate()
    @Expose()
    @Type(() => Date)
    fechaInicio: Date;

    @ApiProperty({
        description: 'Frecuencia del tratamiento',
    })
    @Expose()
    @IsString()
    frecuencia: string;

    @ApiProperty({
        description: 'Id del paciente',
    })
    @Expose()
    idPaciente: number;

    @ApiProperty({
        description: 'Id del tratamiento',
    })
    @Expose()
    idTratamiento: number;

    @ApiProperty({
        description: 'Nombre del tratamiento',
    })
    @Expose()
    @IsString()
    nombre: string;

    @ApiProperty({
        description: 'Unidad del tratamiento',
    })
    @Expose()
    @IsString()
    unidadTratamiento: string;
}
