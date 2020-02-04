const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('================================='.green);
        listado.forEach((el) => console.log(`Tarea: ${el.descripcion} - Estado: ${el.completado}`));
        console.log('=================================='.green);
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('No es una tarea válida');
        break;

}