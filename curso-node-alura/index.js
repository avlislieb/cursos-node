const customExpress = require("./config/customExpress");
const connection = require("./infra/database/connection");
const tables = require("./infra/database/tables");

connection.connect(error => {
    if (error) {
        console.log(error);
    } else {
        console.log('conectado com sucsess');
        tables.init(connection);
        const app = customExpress();
        app.listen(3001, () => {console.log('rodando.')})
    }
});


