import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { DatabaseModule } from './providers/database/database.module';

@Module({
    imports: [DatabaseModule, UsuarioModule, AuthenticationModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
