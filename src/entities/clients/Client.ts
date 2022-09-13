import { Schema, model, Document} from 'mongoose';

export interface IClient extends Document {
    id: string,
    name: string,
    lastName: string, 
    phone?: string,
    cpf: string,
    address?: [{
        state: string,
        street: string,
        number: number,
        district: string,
        cep: string
    }],
    gender: string,
    age?: number
}

const clientSchema = new Schema<IClient>({
    name: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    phone: {
        type: String, 
        required: true
    },
    cpf: {
        type: String,
    },
    address: [{
        state: String,
        street: String,
        number: Number,
        district: String,
        cep: String,
    }],
    gender: {
        type: String, 
        required: true
    },
    age: {
        type: Number,
        default: 0,
    }
},
    { collection: 'Client'}
);

export const Client = model<IClient>('Client', clientSchema);