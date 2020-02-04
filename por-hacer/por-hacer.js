const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
        console.log('archivo grabado');
    })
}

const cargarDB = () => {
    listadoPorHacer = require('../db/data.json');
    // console.log(listadoPorHacer);

}

const crear = (descripcion) => {

    try {
        cargarDB();
    } catch (error) {
        listadoPorHacer = [];
    }

    porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB();
        return true;
    } else {
        return false;
    }

    // if (!listadoPorHacer.find(descripcion)) {
    //     console.log('No se encuentra la tarea');
    // } else {
    //     listado.completado = completado
    // }
}

const borrar = (descripcion) => {
    cargarDB();
    console.log(listadoPorHacer);
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer.splice(index, index + 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
    // let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    // if (nuevoListado.length === listadoPorHacer.length) {
    //     return false;
    // } else {
    //     listadoPorHacer = nuevoListado;
    //     guardarDB();
    //     return true;
    // }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}