import { Module } from '@nestjs/common';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { DatabaseModule } from './providers/database/database.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import { MedicoModule } from './modules/medico/medico.module';

@Module({
    imports: [
        DatabaseModule,
        UsuarioModule,
        AuthenticationModule,
        PacienteModule,
        MedicoModule,
    ],
})
export class AppModule {}
