import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../../common/decorators/userCurrent.decorator';
import { JWTPayloadDTO } from '../authentication/dto/jwtPayload.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../common/guards/roles.guard';
import { MedicoService } from './medico.service';

@UseGuards(AuthGuard('jwt'), RoleGuard('Medico'))
@Controller('medico')
export class MedicoController {
    constructor(private readonly medicoService: MedicoService) {}
    @Get('pacientes/:id')
    getMedicoPacientes(
        @CurrentUser() user: JWTPayloadDTO,
        @Param('id') id: string
    ) {
        return this.medicoService.getMedicoPacientes({
            idUsuario: user.idUsuario,
            idPaciente: parseInt(id),
        });
    }
}
