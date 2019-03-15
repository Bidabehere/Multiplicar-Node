
const fs = require('fs');


let listarTabla = (base, limite) => {
 // solo lista la tabla hasta el limite segun la base
 return new Promise (( resolve, reject) => {
  if(!Number(base)){reject(`El valor introducido: "${base}", no es un numero`);return;}
let data= '';

for (let i=1; i <= 10; i++){ data += ` ${base} * ${i} = ${i*base} \n`; }
resolve (data)
 })




}
 
let crearArchivo = (base) => {

    return new Promise (( resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido: "${base}", no es un numero`);
            return;
        }

        let data= '';

for (let i=1; i <= 10; i++){
   data += ` ${base} * ${i} = ${i*base} \n`;
}
 
fs.writeFile(`./multiplicar/tabla_del_${base}.txt`, data, (err) => {
  if (err)
   reject (err);
   else 
   resolve (`tabla_del_${base}.txt`)
  
});



})


} //cierro funcion crear archivo

/*
let borrarArchivo = (base) => {
    return new Promise (( resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido: "${base}", no es un numero`);
            return;
        }

        
        fileExists( `./multiplicar/tabla_del_${base}.txt`, (err, exists) => {
            if(err) {
              // manejar otro tipo de error
            }
            if(exists) {
                fs.unlink(`./multiplicar/tabla_del_${base}.txt`, (err) => {
                    if (err)
                     reject (err);
                     else 
                     resolve (`el archivo tabla_del_${base}.txt fue eliminado`);
                } else {
                reject (`el archivo tabla_del_${base}.txt no existe`);
            }
          });



  
});



})


} ///*/

    




module.exports ={
    crearArchivo,
    //borrarArchivo
    
    }

/*
 fs.unlink(`./multiplicar/tabla_del_${base}.txt`, (err) => {
            if (err) 
            reject (err);
            resolve (`el archivo tabla_del_${base}.txt fue eliminado`)
          })
          */
