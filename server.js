require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();

//Imported Files
const admin = require('./routes/adminRoutes');
const user = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRoute = require('./routes/order')

//Connection with dataBase
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () =>{
    console.log('Connected to dataBase....')
} )

//middleware
app.use(express.json());

// routing parts
app.use('/admin', admin);
app.use('/user', user);
app.use('/product', productRouter);
app.use('/order', orderRoute)

//listning of server
app.listen(port, () => {
    console.log(`app is started on port ${port}`)
})