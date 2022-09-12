import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
    id: string,
    name: string,
    description: string,
    priceBuy: number,
    priceSell: number,
    quantity: number,
    createdAt: Date,
    updatedAt: Date,
};

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    priceBuy: {
        tipe: Number,
        default: 0
    },
    priceSell: {
        tipe: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},
    { collection: 'Product'}
);

export const Product = model<IProduct>('Product', productSchema);