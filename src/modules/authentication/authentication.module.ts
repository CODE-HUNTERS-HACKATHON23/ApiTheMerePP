import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d' },
        }),
        UsuarioModule,
    ],
    controllers: [AuthenticationController],
    providers: [AuthenticationService, JwtService],
})
export class AuthenticationModule {}
