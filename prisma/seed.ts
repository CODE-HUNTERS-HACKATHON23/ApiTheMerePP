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

    //Create medico
    await prisma.usuario.create({
        data: {
            usuario: 'Doctopus',
            correo: 'bestmedico4ever@gmail.com',
            medico: {
                create: {
                    especialidad: {
                        create: {
                            nombre: 'Medicina General',
                        },
                    },
                },
            },
            idRol: 1,
            contrasena: 'securepassword',
        },
    });

    //Create paciente
    await prisma.usuario.create({
        data: {
            usuario: 'Pacientopus',
            correo: 'dontrustingirls@gmail.com',
            paciente: {
                create: {
                    nombres: 'Hernan Emilio',
                    apellidos: 'Jacamo Delgado',
                    telefono: '77187506',
                    idMunicipio: 1,
                    tipoSangre: 'O+',
                    lugarNacimiento: 'Managua',
                    fechaNacimiento: new Date(),
                    profesion: 'Fisico Teorico',
                    direccion:
                        'De los semaforos del puente 2c al arbol, cerca de una doña sentada',
                    sexo: 'Masculino',
                    expediente: {
                        create: {
                            numeroExpediente: '2202',
                        },
                    },
                },
            },
            idRol: 2,
            contrasena: 'securepassword',
        },
    });

    // create Unidad de Salud
    const unidadSalud = await prisma.unidadSalud.create({
        data: {
            nombre: 'Hospital Alemán Nicaragüense',
        },
    });

    // create consulta
    await prisma.consulta.create({
        data: {
            planes: 'Matenme',
            evaluacion: 'Se va a morir',
            idUnidadSalud: unidadSalud.idUnidadSalud,
            idMedico: 1,
            idPaciente: 1,
            idExpediente: 1,
            fecha: new Date(),
        },
    });
})();
