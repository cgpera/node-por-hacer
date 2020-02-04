const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea a realizar'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como pendiente o completada una tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('listar', 'Lista las tareas pendientes', {

    })
    .command('actualizar', 'actualiza o completa una tarea', {
        descripcion: descripcion,
        completado: completado //forma completa!!
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}