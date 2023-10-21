import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RoleGuard } from '../../common/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { PacienteService } from './paciente.service';
import { CurrentUser } from '../../common/decorators/userCurrent.decorator';
import { JWTPayloadDTO } from '../authentication/dto/jwtPayload.dto';
import { CreateTratamientoDTO } from './dto/createTratamiento.dto';
import { ApiAcceptedResponse } from '@nestjs/swagger';
import { TratamientoDTO } from './dto/tratamiento.dto';

@UseGuards(AuthGuard('jwt'), RoleGuard('Paciente'))
@Controller('paciente')
export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) {}

    @ApiAcceptedResponse({
        description: 'Retornar los tratamientos del paciente',
        type: [TratamientoDTO],
    })
    @Get('tratamientos')
    getTratamientos(@CurrentUser() user: JWTPayloadDTO) {
        return this.pacienteService.getTratamientos({
            idUsuario: user.idUsuario,
        });
    }

    @ApiAcceptedResponse({
        description: 'Retornar el tratamiento creado',
        type: TratamientoDTO,
    })
    @Post('tratamientos')
    createTratamiento(
        @CurrentUser() user: JWTPayloadDTO,
        @Body() data: CreateTratamientoDTO
    ) {
        return this.pacienteService.createTratamiento({
            idUsuario: user.idUsuario,
            tratamiento: data,
        });
    }
}
