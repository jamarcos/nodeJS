// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`\n TABLA DEL ${ base } \n ------------------`.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`.blue);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es válido`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}