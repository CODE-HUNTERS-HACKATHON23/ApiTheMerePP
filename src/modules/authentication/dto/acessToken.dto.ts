import { ApiProperty } from '@nestjs/swagger';

export class AcessTokenDTO {
    @ApiProperty({
        description: 'Token de acceso',
    })
    accessToken: string;
}
