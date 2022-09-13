import { RequestHandler } from "express";
import { Client } from "../../entities/clients/Client";


export const createClient: RequestHandler = async (req, res, next) => {
    const { name, lastName, phone, cpf, address, gender, age} = req.body;
    try {
            const clientVerify = await Client.findOne({name: name});
            if(clientVerify) {
                res.json({message: "Client has existed"});
            } else {
                const newClient = new Client({
                    name: name,
                    lastName: lastName,
                    phone: phone,
                    cpf: cpf,
                    address: address,
                    gender: gender,
                    age: age
            });
            await newClient.save();
            res.json({message: "Client created success!", newClient});
            next();
        }

    } catch (error) {
        res.json({message: "Error create client", error: error});
    }
}

export const getAllClients: RequestHandler = async (req, res, next) => {

    try {
        const getAll = await Client.find();
        res.json({getAll});
        next();
    } catch (error) {
        res.json({error: "Error get all clients"});
    }
}

export const getByIdClient: RequestHandler = async (req, res, next) => {
    const { id } = req.body;

    try {
        const getClient = await Client.findOne({_id: id});
        res.json({message: "Success get Client ", getClient: getClient});
        next();
    } catch (error) {
        res.json({error: "Error get Client"});
    }
}

export const updateClient: RequestHandler = async (req, res, next) => {
    const { id, name, lastName, phone, address} = req.body;

    try {
        const update = await Client.findByIdAndUpdate({_id: id}, {
            name: name,
            lastName: lastName,
            phone: phone,
            address: address
        })
        res.json({message: "Client updated successfully!", Client: update});
    } catch (error) {
        res.json({erro: "Error update Client!"});
    }
}

export const deleteClient: RequestHandler = async (req,res, next) => {
    const { id } = req.body;

    try {
        const data = await Client.findByIdAndRemove({ _id: id});
        res.json({message: "Client deleted successfully!"});
    } catch (error) {
        res.json({error: "Not possible delete Client: ", err: error});   
    }
}