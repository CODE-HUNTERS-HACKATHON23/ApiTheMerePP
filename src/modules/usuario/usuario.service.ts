import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../providers/database/database.service';
import { RegisterDTO } from '../authentication/dto/register.dto';
import bcrypt from 'bcrypt';

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

        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(contrasena, salt);
        return this.database.usuario.create({
            data: {
                usuario,
                correo,
                contrasena: hashedPassword,
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
