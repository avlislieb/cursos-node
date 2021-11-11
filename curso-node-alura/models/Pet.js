const connection = require('../infra/database/connection');
const uploadFile = require('../infra/files/uploadFiles');

class Pet {

    tableName = 'pets';
    
    add(pet, res) {
        const query = `INSERT INTO ${this.tableName} SET ?`;

        uploadFile(pet.imagem, pet.nome, (error, newPath) => {
            if (error) {
                res.status(400).json({ error });
                
            } else {
                const newPet = {nome: pet.nome, imagem: newPath};
                connection.query(query, newPet, error => {
                    if (error) {
        
                        res.status(400).json(error);
                    } else {
                        res.status(201).json(newPet);
                    }
                });
            }
            
        });

        
    }
}

module.exports = new Pet;