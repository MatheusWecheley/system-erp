import express from 'express';
import authenticate from './database/config';
import { Client } from './entities/clients/Client';
import { OS } from './entities/OS/OS';
import { Product } from './entities/products/Product';
import clientRouter from './routes/clients/client';

const app = express();
const server = authenticate();
app.use(express.json())

app.use('/', clientRouter);


try {
    app.listen(3000, () => {
        console.log('Server Running!');
    })
} catch (error) {
    console.log(error);
}