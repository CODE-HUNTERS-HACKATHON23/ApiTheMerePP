import { OmitType } from '@nestjs/swagger';
import { TratamientoEntity } from '../../../providers/database/entities/tratamiento.entity';

export class CreateTratamientoDTO extends OmitType(TratamientoEntity, [
    'idTratamiento',
    'idPaciente',
] as const) {}
