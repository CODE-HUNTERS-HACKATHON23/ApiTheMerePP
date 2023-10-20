import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../providers/database/database.service';
import { RegisterDTO } from '../authentication/dto/register.dto';

@Injectable()
export class UsuarioService {
    constructor(private database: DatabaseService) {}

    async get(opts: { email?: string; id?: number }) {
        return this.database.usuario.findUnique({
            where: {
                correo: opts.email,
                idUsuario: opts.id,
            },
            include: {
                rol: true,
            },
        });
    }

    async create(body: RegisterDTO) {
        const find = await this.get({ email: body.correo });
        if (find) throw new HttpException('El usuario ya existe', 400);

        const { usuario, correo, contrasena, ...paciente } = body;

        return this.database.usuario.create({
            data: {
                usuario,
                correo,
                contrasena,
                paciente: {
                    create: paciente,
                },
            },
            include: {
                rol: true,
            },
        });
    }
}
