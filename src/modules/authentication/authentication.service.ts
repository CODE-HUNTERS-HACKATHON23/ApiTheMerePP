import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { JWTPayloadDTO } from './dto/jwtPayload.dto';

@Injectable()
export class AuthenticationService {
    constructor(
        private jwtService: JwtService,
        private usuarioService: UsuarioService
    ) {}

    generateToken(user: JWTPayloadDTO) {
        return {
            accessToken: this.jwtService.sign({
                id: user.idUsuario,
                usuario: user.usuario,
                email: user.correo,
                rol: user.rol,
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
        //return bcrypt.compare(password, hash);
        return password === hash;
    }

    async validate({ email, password }: { email: string; password: string }) {
        const user = await this.usuarioService.get({ email });

        if (!user) return null;
        return (await this.comparePassword({ password, hash: user.contrasena }))
            ? user
            : null;
    }
}
