import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { UsuarioService } from '../usuario/usuario.service';
import { ApiAcceptedResponse } from '@nestjs/swagger';
import { AcessTokenDTO } from './dto/acessToken.dto';

@Controller('auth')
export class AuthenticationController {
    constructor(
        private authenticationService: AuthenticationService,
        private usuarioService: UsuarioService
    ) {}
    @ApiAcceptedResponse({
        description: 'Retorna el token de acceso',
        type: AcessTokenDTO,
    })
    @Post('login')
    async login(@Body() body: LoginDTO) {
        const user = await this.authenticationService.validate({
            email: body.correo,
            password: body.contrasena,
        });

        if (!user) throw new UnauthorizedException();

        return this.authenticationService.generateToken({
            idUsuario: user.idUsuario,
            correo: user.correo,
            usuario: user.usuario,
            rol: user.rol?.nombre,
        });
    }

    @ApiAcceptedResponse({
        description: 'Retorna el token de acceso',
        type: AcessTokenDTO,
    })
    @Post('register')
    async register(@Body() body: RegisterDTO) {
        const user = await this.usuarioService.create(body);
        return this.authenticationService.generateToken({
            idUsuario: user.idUsuario,
            correo: user.correo,
            usuario: user.usuario,
            rol: user.rol?.nombre,
        });
    }
}
