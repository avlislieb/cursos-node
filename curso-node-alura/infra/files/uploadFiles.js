const fileSystem = require('fs');
const path = require('path');
// aula 03 - curso node js streaming
// fileSystem.readFile('./assets/bomdia.png', (error, buffer) => {
//     console.log('imagem foi bufferizada');
//     console.log('buffer', buffer);

//     fileSystem.writeFile('./assets/bomdia2.png', buffer, error => {
//         console.log('imagem foi escrita');
//     });
// });

fileSystem.createReadStream('./assets/bomdia.png')
    .pipe(fileSystem.createWriteStream('./assets/bomdiaStream1.png'))
    .on('finish', () => {
        console.log('imagem escrita com sucesso');
    });

module.exports = (pathToRead, fileName, callbackImageCreated) => {
    const fileTypesValid = ['png', 'jpg', 'jpeg'];
    const fileType = path.extname(pathToRead); 
    

    if (!fileTypesValid.includes(fileType.substring(1))) {
        console.log('error! tipo invalido');
        const error = 'Tipo é invalido';
        callbackImageCreated(error);
    } else {
        const pathToSave = `./assets/pets/${fileName}${fileType}`;
        fileSystem.createReadStream(pathToRead)
        .pipe(fileSystem.createWriteStream(pathToSave))
        .on("finish", () => callbackImageCreated(false, pathToSave));
    }

    
}