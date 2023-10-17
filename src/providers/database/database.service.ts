import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class DatabaseService
    extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel>
    implements OnModuleInit
{
    constructor() {
        super({
            log: [
                {
                    emit: 'event',
                    level: 'query',
                },
                {
                    emit: 'event',
                    level: 'error',
                },
                {
                    emit: 'event',
                    level: 'info',
                },
                {
                    emit: 'event',
                    level: 'warn',
                },
            ],
        });
    }

    async onModuleInit() {
        await this.$connect();
    }
}
