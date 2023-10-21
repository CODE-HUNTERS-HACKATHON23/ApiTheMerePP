import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../providers/database/database.service';
import { CreateTratamientoDTO } from './dto/createTratamiento.dto';

@Injectable()
export class PacienteService {
    constructor(private readonly databaseService: DatabaseService) {}
    getTratamientos(data: { idUsuario: number }) {
        return this.databaseService.tratamiento.findMany({
            where: {
                idPaciente: data.idUsuario,
            },
        });
    }

    async createTratamiento(data: {
        idUsuario: number;
        tratamiento: CreateTratamientoDTO;
    }) {
        const paciente = await this.databaseService.paciente.findUnique({
            where: {
                idUsuario: data.idUsuario,
            },
        });

        if (!paciente) throw new HttpException('El paciente no existe', 404);

        return this.databaseService.tratamiento.create({
            data: {
                ...data.tratamiento,
                idPaciente: paciente.idPaciente,
            },
        });
    }
}
