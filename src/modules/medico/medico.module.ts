import { Module } from '@nestjs/common';
import { MedicoController } from './medico.controller';
import { MedicoService } from './medico.service';
import { PacienteModule } from '../paciente/paciente.module';

@Module({
    imports: [PacienteModule],
    controllers: [MedicoController],
    providers: [MedicoService],
})
export class MedicoModule {}
