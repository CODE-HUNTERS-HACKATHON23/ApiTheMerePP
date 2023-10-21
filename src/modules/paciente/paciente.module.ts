import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';

@Module({
    imports: [],
    controllers: [PacienteController],
    providers: [PacienteService],
    exports: [PacienteService],
})
export class PacienteModule {}
