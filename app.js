
const {crearArchivo, borrarArchivo } = require('./multiplicar/multiplicar');

base = process.argv[3];
accion = process.argv[2];


if(process.argv[2] === `crear`)
{
    crearArchivo(base)
      .then(archivo => console.log(`El archivo creado: ${archivo}`))
     .catch(err => console.log(err));
}else{
/*
    borrarArchivo(base)
    .then(archivo => console.log(`El archivo borrado: ${archivo}`)) 
    .catch(err => console.log(err))
 //  console.log(`se borro la tabla con base ${base}`)*/
} 

console.log(process.argv[2]);


