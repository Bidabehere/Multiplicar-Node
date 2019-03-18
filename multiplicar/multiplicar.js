const Colors = require('colors');
const fs = require('fs');


let listarTabla = (base, limite = 10) =>
 {
   // solo lista la tabla hasta el limite segun la base
  return new Promise ((resolve, reject)=>{
    if(!Number(base)){
      reject(`El valor introducido: "${base}", no es un numero`);
      return;
    }
  if(!Number(limite)){
    reject(`El valor introducido: "${base}", no es un numero`);
    return;
  }  
  let data= '';
  console.log(`====================`.green)
  console.log(`Tabla del ${ base }`.blue)
  console.log(`====================`.green)
  for (let i=1; i <= limite; i++){
    data += ` ${base} * ${i} = ${i*base} \n`;
 }
  resolve (data);
})}
 
let crearArchivo = (base, limite = 10) => {

    return new Promise (( resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido como base: "${base}", no es un numero`);
            return;
        }
        if(!Number(limite)){
          reject(`El valor introducido como limite: "${limite}", no es un numero`);
          return;
      }


        let data= '';

for (let i=1; i <= limite; i++){
   data += ` ${base} * ${i} = ${i*base} \n`;
}
 
fs.writeFile(`./multiplicar/tabla_del_${base}.txt`, data, (err) => {
  if (err)
   reject (err);
   else 
   resolve (`tabla_del_${base}.txt`.green)
  
});



})


} //cierro funcion crear archivo


let borrarArchivo = (base) => { 
  return new Promise (( resolve, reject) => { 
    if(!Number(base)){  reject(`El valor introducido: "${base}", no es un numero`);
      return; }


    fs.unlink(`./multiplicar/tabla_del_${base}.txt`, (err) => {
      if (err) 
      reject (err);
      resolve (`el archivo tabla_del_${base}.txt fue eliminado`)
    })

  })//fin promesa

};//fin borrarArchivo











                        
                        


                    
                  // resolve (`el archivo tabla_del_${base}.txt fue eliminado`);
                    // reject (`el archivo tabla_del_${base}.txt no existe`);}
          



  








    




module.exports ={
    crearArchivo,
    listarTabla,
    borrarArchivo
    
    }

/*
 fs.unlink(`./multiplicar/tabla_del_${base}.txt`, (err) => {
            if (err) 
            reject (err);
            resolve (`el archivo tabla_del_${base}.txt fue eliminado`)
          })
          */
