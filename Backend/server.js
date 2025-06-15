import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/mongodb.js';

import userlogin from './routes/user/userlogin.js';
import userSignUp from './routes/user/userSignUp.js';
import getproducts from './routes/getproducts.js'

import userOp from './routes/user/userOp.js';



dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cors());

app.get('/', function(req,res){
    res.json({
        message:"Server Runing"
    })
})


app.use('/', getproducts)
app.use('/user', userSignUp);
app.use('/user', userlogin);
app.use('/user' , userOp);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});