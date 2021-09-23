require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();

//Imported Files


//Connection with dataBase
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () =>{
    console.log('Connected to dataBase....')
} )

//middleware
app.use(express.json());

// routing parts
app.get('/', (req, res) => {
    res.send('Welcome to my project')
} );

//listning of server
app.listen(port, () => {
    console.log(`app is started on port ${port}`)
})