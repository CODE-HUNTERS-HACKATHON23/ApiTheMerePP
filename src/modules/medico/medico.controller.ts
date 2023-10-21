import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../../common/guards/roles.guard';
import { MedicoService } from './medico.service';
import { SearchDTO } from './dto/search.dto';
import { ApiAcceptedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PacienteDTO } from '../paciente/dto/paciente.dto';

@UseGuards(AuthGuard('jwt'), RoleGuard('Medico'))
@ApiBearerAuth()
@Controller('medico')
export class MedicoController {
    constructor(private readonly medicoService: MedicoService) {}

    @ApiAcceptedResponse({
        description: 'Retornar los datos del paciente',
        type: PacienteDTO,
    })
    @Post('search/paciente')
    getMedicoPaciente(@Body() data: SearchDTO) {
        return this.medicoService.getMedicoPaciente(data);
    }
}
