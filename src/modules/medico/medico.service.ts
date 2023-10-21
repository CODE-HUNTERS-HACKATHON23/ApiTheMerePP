import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../providers/database/database.service';

@Injectable()
export class MedicoService {
    constructor(private readonly databaseService: DatabaseService) {}
    getMedicoPacientes(param: { idPaciente: number; idUsuario: number }) {
        const medico = this.databaseService.medico.findUnique({
            where: {
                idUsuario: param.idUsuario,
            },
        });

        if (!medico) throw new HttpException('El medico no existe', 404);

        // return pacientes where there is almost one consulta with the medico
        return this.databaseService.paciente.findMany({
            where: {
                consultas: {
                    some: {
                        medico: {
                            idUsuario: param.idUsuario,
                        },
                    },
                },
            },
        });
    }
}
