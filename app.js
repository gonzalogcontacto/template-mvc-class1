import express from 'express'
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes.js'

// initialize Express
const app = express();

// Able to receive JSON on body Requests
app.use(express.json());

// Conection to DB
try{
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-compass',{ useNewUrlParser: true, useUnifiedTopology: true  } )
    console.log('MongoDB connected');
} catch(e){
    console.log(e);
}

app.use('/user', userRoutes)

app.listen(5000, () => {
    console.log('Web server is running on port 5000')
})



    