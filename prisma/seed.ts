import { PrismaClient } from '@prisma/client';

(async () => {
    const prisma = new PrismaClient();

    // create roles: Medico, Paciente, Admin
    await prisma.rol.create({
        data: {
            nombre: 'Medico',
            idRol: 1,
        },
    });

    await prisma.rol.create({
        data: {
            nombre: 'Paciente',
            idRol: 2,
        },
    });

    await prisma.rol.create({
        data: {
            nombre: 'Admin',
            idRol: 3,
        },
    });

    // create municipio
    await prisma.departamento.create({
        data: {
            nombre: 'Managua',
            idDepartamento: 1,
            municipios: {
                create: {
                    nombre: 'Managua',
                    idMunicipio: 1,
                },
            },
        },
    });
})();
