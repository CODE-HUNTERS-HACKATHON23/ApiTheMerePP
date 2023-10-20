import { Usuario } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UsuarioEntity implements Usuario {
    @ApiProperty({
        description: 'Avatar del usuario',
        nullable: true,
    })
    @Expose()
    @IsString()
    @Optional()
    AvatarURI: string | null;

    @ApiProperty({
        description: 'Contraseña del usuario',
    })
    @IsString()
    contrasena: string;

    @ApiProperty({
        description: 'Correo del usuario',
    })
    @IsString()
    @IsEmail()
    @Expose()
    correo: string;

    @ApiProperty({
        description: 'Id del rol del usuario',
        nullable: true,
    })
    @Expose()
    idRol: number | null;

    @ApiProperty({
        description: 'Id del usuario',
    })
    @Expose()
    idUsuario: number;

    @ApiProperty({
        description: 'Nombre del usuario',
    })
    @IsString()
    @Expose()
    usuario: string;
}
