import { Injectable } from '@nestjs/common';
import { SearchDTO } from './dto/search.dto';
import { PacienteService } from '../paciente/paciente.service';

@Injectable()
export class MedicoService {
    constructor(private readonly pacienteService: PacienteService) {}
    getMedicoPaciente(data: SearchDTO) {
        return this.pacienteService.getAllData(data);
    }
}
