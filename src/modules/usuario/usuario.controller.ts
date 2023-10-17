import { Controller, Post } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {
    @Post()
    create() {
        return 'This action adds a new usuario';
    }
}
