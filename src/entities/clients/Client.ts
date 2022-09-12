import { Schema, model, Document} from 'mongoose';

export interface IClient extends Document {
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
    address: {
        type: Object,
    },
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