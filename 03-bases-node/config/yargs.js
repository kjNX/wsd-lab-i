const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, _) => {
        if(isNaN(argv.b)) throw 'La base debe ser un número.';
        return true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indicador del alcance de la tabla'
    })
    .check((argv, _) => {
        if(isNaN(argv.h)) throw 'El multiplicador debe ser un número.'
        return true
    })
    .argv

module.exports = argv