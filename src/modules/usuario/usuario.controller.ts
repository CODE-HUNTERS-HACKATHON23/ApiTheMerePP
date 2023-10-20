import { Controller, Get, HttpException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../../common/decorators/userCurrent.decorator';
import { JWTPayloadDTO } from '../authentication/dto/jwtPayload.dto';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';
import { ApiAcceptedResponse } from '@nestjs/swagger';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @ApiAcceptedResponse({
        description: 'Retorna el usuario actual',
        type: UsuarioDTO,
    })
    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    async me(@CurrentUser() currentUser: JWTPayloadDTO) {
        const user = await this.usuarioService.get({
            id: currentUser.idUsuario,
        });

        if (!user) {
            throw new HttpException('Usuario no encontrado', 404);
        }

        return new UsuarioDTO(user);
    }
}
