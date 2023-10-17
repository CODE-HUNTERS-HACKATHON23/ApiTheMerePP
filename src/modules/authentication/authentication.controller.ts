import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('auth')
export class AuthenticationController {
    constructor(private authenticationService: AuthenticationService) {}
    @Post('login')
    async login(@Body() body: { email: string; password: string }) {
        const user = await this.authenticationService.validate(body);

        if (!user) throw new UnauthorizedException();

        return this.authenticationService.generateToken(user);
    }
}
