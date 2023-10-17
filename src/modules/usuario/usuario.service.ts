import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../providers/database/database.service';

@Injectable()
export class UsuarioService {
    constructor(private database: DatabaseService) {}

    async get(opts: { email?: string; id?: number }) {
        return this.database.usuario.findUnique({
            where: {
                Correo: opts.email,
                IdUsuario: opts.id,
            },
        });
    }
}
