import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '@prisma/client';

@Injectable()
export class AuthenticationService {
    constructor(
        private jwtService: JwtService,
        private usuarioService: UsuarioService
    ) {}

    generateToken(user: Usuario) {
        return {
            accessToken: this.jwtService.sign({
                id: user.IdUsuario,
                email: user.Correo,
            }),
        };
    }

    async comparePassword({
        password,
        hash,
    }: {
        password: string;
        hash: string;
    }) {
        return bcrypt.compare(password, hash);
    }

    async validate({ email, password }: { email: string; password: string }) {
        const user = await this.usuarioService.get({ email });

        if (!user) return null;
        return (await this.comparePassword({ password, hash: user.Contrasena }))
            ? user
            : null;
    }
}
