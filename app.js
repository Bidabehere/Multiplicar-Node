
const {crearArchivo, listarTabla, borrarArchivo } = require('./multiplicar/multiplicar');
 const { argv } = require ('./config/yargs')
 const Colors = require('colors')

//const argv= require('yargs').argv;


let comando = argv._[0];



console.log(argv)

switch (comando) {
case 'borrar':
 borrarArchivo(argv.base)
 .then(data => console.log(data))
 .catch(err => console.log(err)); 
break;
case 'listar':
console.log("argv.base")
listarTabla(argv.base,argv.limite)
  .then(data => console.log(data))
  .catch(err => console.log(err));
break;
case 'crear':

crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`El archivo creado: ${archivo}`))
      .catch(err => console.log(err));

break;

default:
console.log("El comando seleccionado no corresponde")
break;
}






/*
    borrarArchivo(base)
    .then(archivo => console.log(`El archivo borrado: ${archivo}`)) 
    .catch(err => console.log(err))
 //  console.log(`se borro la tabla con base ${base}`)*/





