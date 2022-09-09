import { Schema, model, Types} from 'mongoose';

interface IUser {
    id: string,
    name: string,
    lastName: string, 
    phone: string,
    address: {
        state: string,
        street: string,
        number: number,
        district: string,
        cep: string
    }
    gender: string,
    age: number
}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: Object},
    gender: {type: String, required: true},
    age: {type: Number}
},
    { collection: 'User'}
);

export const User = model<IUser>('User', userSchema);