import { app } from "./app";
require('dotenv').config();


app.listen(process.env.PORT || 5003, () => {
    console.log(`Server is running on port: ${process.env.PORT || 5003}`);
})