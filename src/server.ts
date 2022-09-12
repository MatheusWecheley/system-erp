import express from 'express';
import authenticate from './database/config';
import { Client } from './entities/clients/Client';
import { OS } from './entities/OS/OS';
import { Product } from './entities/products/Product';

const app = express();
const server = authenticate();
app.use(express.json())



app.post('/client', async (req, res) => {
    const client = new Client({
        name: req.body.name,
        lastName: req.body.lastName,
        phone: req.body.phone,
        gender: req.body.gender,
    })
    await client.save();
    res.json({client});
})

app.post('/product', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
    })
    await product.save();
    res.json({product});
})

app.post('/os', async (req, res) => {
    const { tittle, description, priceBuy} = req.body;
    const os = new OS({
        tittle: tittle,
        description: description,
        priceBuy: priceBuy,
    })
    await os.save();
    res.send(200).json({os});
})

try {
    app.listen(3000, () => {
        console.log('Server Running!');
    })
} catch (error) {
    console.log(error);
}