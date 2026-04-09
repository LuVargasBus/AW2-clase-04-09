console.log('Inicializado')

//import fsp from 'node:fs/promises';
import fsp from 'node:fs/promises';
import path from 'node:path';
//Lectura de archivos 

// try {
//     const contenido = await fsp.readFile('./texto.txt', 'utf8');
//     console.log(contenido);
// }
// catch (e) {
// console.log(e)
// }

//Escritura de archivos 

try {
    const ruta = path.join('./texto.txt')
     await fsp.writeFile(ruta, 'Contenido cambiado con rutas! ');
   
    const contenidoC = await fsp.readFile(ruta, 'utf8')
     console.log(contenidoC)
} catch (e) {
    console.log(e);
}