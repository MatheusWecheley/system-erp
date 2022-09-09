import express from 'express';
import authenticate from './database/config';
import { User } from './models/entities/schemas/users/Users';

const app = express();
const server = authenticate();

app.get('/', async (req, res) => {
    const user = new User({
        name: "Matheus",
        lastName: "Leal",
        phone: "45 99999-8888",
        address: {
            state: "PR",
            street: "Rua das Flores",
            number: 363,
            district: "Céu",
            cep: '3827382'
        },
        gender: 'masculino',
        age: 21
    })
    await user.save()
    res.send({user})
})

try {
    app.listen(3000, () => {
        console.log('Server Running!');
    })
} catch (error) {
    console.log(error);
}