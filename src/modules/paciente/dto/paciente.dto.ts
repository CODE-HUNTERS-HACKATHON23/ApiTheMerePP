import { PacienteEntity } from '../../../providers/database/entities/paciente.entity';
import { ConsultaEntity } from '../../../providers/database/entities/consulta.entity';
import { TratamientoEntity } from '../../../providers/database/entities/tratamiento.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

class ConsultasInPacienteDTO extends ConsultaEntity {}
class TratamientosInPacienteDTO extends TratamientoEntity {}

export class PacienteDTO extends PacienteEntity {
    @ApiProperty({
        description: 'consultas del paciente',
        type: [ConsultasInPacienteDTO],
    })
    @Expose()
    consultas: ConsultasInPacienteDTO[];

    @ApiProperty({
        description: 'tratamientos del paciente',
        type: [TratamientosInPacienteDTO],
    })
    @Expose()
    tratamientos: TratamientosInPacienteDTO[];
}
