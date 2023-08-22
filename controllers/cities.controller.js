import { response } from "express";
import City from "../models/City.js"

const controller = {
    getCities: async (req, res) => {

        let queries = {};

        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name}`,  'i');
        }

        if(req.query.country){
            queries.country = new RegExp(`^${req.query.country}`, 'i');
        }

        try{
            const cities = await City.find(queries);//es un find de mongoose distinto al de js

            if(cities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities//como el valor de la variable tiene el mismo nombre que la propiedad va de esta forma
                });
            }

            return res.status(404).json({
                success: false,
                message: 'No cities were found'
            });

        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Error getting the cities"
            });
        }

    },
    getCityById: async(req, res) => {
        try {
            const city = await City.findById(req.params.id);

            if(city){
                return res.status(200).json({
                    success: true,
                    city
                });
            }

            return res.status(404).json({
                success: false,
                message: "City not found"
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error getting the city"
            });
        }
    },
    createCity: async (req , res) => {

        try{
            const newCity = await City.create(req.body);
            
            return res.status(201).json({
                success: true,
                message: "City created successfully"
            });
        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Error creating city"
            });
        }

    },
    updateCity: async (req, res) => {
        try {
            await City.updateOne({_id: req.params.id}, req.body);
            return res.status(200).json({
                success: true,
                message: "City updated successfully"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Error updating city"
            });
        }
    },
    deleteCity: async (req, res) => {
        try {
            await City.deleteOne({_id: req.params.id});
            return res.status(200).json({
                success: true,
                message: "City deleted successfully"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Error deleting city"
            });
        }
    }
}

export default controller;