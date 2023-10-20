import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d' },
        }),
        UsuarioModule,
    ],
    controllers: [AuthenticationController],
    providers: [AuthenticationService, JwtStrategy],
})
export class AuthenticationModule {}
