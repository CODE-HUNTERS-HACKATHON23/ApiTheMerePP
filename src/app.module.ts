import { Module } from '@nestjs/common';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { DatabaseModule } from './providers/database/database.module';

@Module({
    imports: [DatabaseModule, UsuarioModule, AuthenticationModule],
})
export class AppModule {}
