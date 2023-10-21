import { PickType } from '@nestjs/swagger';
import { PacienteEntity } from '../../../providers/database/entities/paciente.entity';

export class SearchDTO extends PickType(PacienteEntity, [
    'nombres',
    'apellidos',
]) {}
