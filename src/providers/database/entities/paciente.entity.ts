import { Paciente } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDate, IsInt, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class PacienteEntity implements Paciente {
    @ApiProperty({
        description: 'Apellidos del paciente',
    })
    @Expose()
    @IsString()
    apellidos: string;

    @ApiPropertyOptional({
        description: 'Cédula del paciente',
        nullable: true,
        type: String,
    })
    @Expose()
    @Optional()
    @IsString()
    cedula: string | null;

    @ApiProperty({
        description: 'Dirección del paciente',
    })
    @Expose()
    @IsString()
    direccion: string;

    @ApiProperty({
        description: 'Fecha de nacimiento del paciente',
    })
    @Expose()
    @IsDate()
    fechaNacimiento: Date;

    @ApiProperty({
        description: 'Id del municipio del paciente',
    })
    @Expose()
    @IsInt()
    idMunicipio: number;

    @ApiProperty({
        description: 'Id del paciente',
    })
    @Expose()
    @IsInt()
    idPaciente: number;

    @ApiProperty({
        description: 'Id del usuario del paciente',
    })
    @Expose()
    @IsInt()
    idUsuario: number;

    @ApiProperty({
        description: 'Lugar de nacimiento del paciente',
    })
    @Expose()
    @IsString()
    lugarNacimiento: string;

    @ApiPropertyOptional({
        description: 'Nombre de la madre del paciente',
        nullable: true,
        type: String,
    })
    @Expose()
    @IsString()
    @Optional()
    nombreMadre: string | null;

    @ApiPropertyOptional({
        description: 'Nombre del padre del paciente',
        nullable: true,
        type: String,
    })
    @Expose()
    @IsString()
    nombrePadre: string | null;

    @ApiProperty({
        description: 'Nombres del paciente',
    })
    @Expose()
    @IsString()
    nombres: string;

    @ApiPropertyOptional({
        description: 'Número de afiliación del paciente',
        nullable: true,
        type: String,
    })
    @Expose()
    @IsString()
    @Optional()
    numeroInss: string | null;

    @ApiProperty({
        description: 'Profesión del paciente',
    })
    @Expose()
    @IsString()
    profesion: string;

    @ApiProperty({
        description: 'Sexo del paciente',
    })
    @Expose()
    @IsString()
    sexo: string;

    @ApiProperty({
        description: 'Teléfono del paciente',
    })
    @Expose()
    @IsString()
    telefono: string;

    @ApiProperty({
        description: 'Tipo de sangre del paciente',
    })
    @Expose()
    @IsString()
    tipoSangre: string;
}
