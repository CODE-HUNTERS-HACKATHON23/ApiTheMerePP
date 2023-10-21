import { Consulta } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class ConsultaEntity implements Consulta {
    @ApiProperty({
        description: 'evaluacion de la consulta',
        example: 'evaluacion de la consulta',
    })
    @Expose()
    @IsString()
    evaluacion: string;

    @ApiProperty({
        description: 'fecha de la consulta',
    })
    @Expose()
    @IsDate()
    @Type(() => Date)
    fecha: Date;

    @ApiProperty({
        description: 'id de la consulta',
    })
    @Expose()
    idConsulta: number;

    @ApiProperty({
        description: 'id del expediente',
    })
    @Expose()
    idExpediente: number;

    @ApiProperty({
        description: 'id del medico',
    })
    @Expose()
    idMedico: number;

    @ApiProperty({
        description: 'id del paciente',
    })
    @Expose()
    idPaciente: number;

    @ApiProperty({
        description: 'id de la unidad de salud',
    })
    idUnidadSalud: number;

    @ApiProperty({
        description: 'planes de la consulta',
    })
    @Expose()
    @IsString()
    planes: string;
}
