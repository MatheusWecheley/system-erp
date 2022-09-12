import { Connection, Schema, model, Document, connect } from "mongoose";
import {IClient} from '../clients/Client';
import { IProduct } from "../products/Product";



interface IOS extends Document {
    id: string,
    tittle: string,
    numberOS: number,
    client: IClient,
    product: IProduct,
    createdAt: Date,
    updatedAt: Date,
};

const OSSchema = new Schema<IOS>({
    tittle: {
        type: String,
        required: true
    },
    numberOS: {
        type: Number,
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
});


export const OS = model<IOS>('OS', OSSchema);