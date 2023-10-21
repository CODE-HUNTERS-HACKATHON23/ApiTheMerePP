import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../providers/database/database.service';
import { CreateTratamientoDTO } from './dto/createTratamiento.dto';

@Injectable()
export class PacienteService {
    constructor(private readonly databaseService: DatabaseService) {}
    async getTratamientos(data: { idUsuario: number }) {
        const paciente = await this.databaseService.paciente.findUnique({
            where: {
                idUsuario: data.idUsuario,
            },
        });

        if (!paciente) throw new HttpException('El paciente no existe', 404);

        return this.databaseService.tratamiento.findMany({
            where: {
                idPaciente: paciente.idPaciente,
            },
        });
    }

    async createTratamiento(data: {
        idUsuario: number;
        tratamiento: CreateTratamientoDTO;
    }) {
        console.log(data.idUsuario);

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

    getAllData(data: { nombres: string; apellidos: string }) {
        console.log(data);
        return this.databaseService.paciente.findFirst({
            where: {
                nombres: data.nombres,
                apellidos: data.apellidos,
            },
            include: {
                consultas: true,
                tratamientos: true,
            },
        });
    }
}
