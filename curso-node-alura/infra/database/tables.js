class Table {
    init(connection) {
        this.connection = connection;
        this.createAttendance();
        this.createPets();
    }

    createAttendance() {
        const sql = 'CREATE TABLE IF NOT EXISTS attendances (id int NOT NULL AUTO_INCREMENT, client varchar(11) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, status varchar(20) NOT NULL, date datetime NOT NULL, created_at datetime NOT NULL,comments text, PRIMARY KEY(id))';

        this.connection.query(sql, (erro => {
            if (erro) {
                console.log('erro');
            } else {
                console.log('Service table created successfully')
            }
        }));
    }

    createPets() {
        const query = 'CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(255), PRIMARY KEY (id))';

        this.connection.query(query, erro => {
            // TODO: create connection object
            if (erro) {
                console.log('erro', erro)
            } else {

            }
            console.log('Service table: pets created successfully.')
        });
    }
}

module.exports = new Table;