import {response} from "express";
import Itinerary from "../models/Itinerary.js";

const controller = {
    getItineraries: async (req, res) => {
        let queries = {};

        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name}`,  'i');
        }

        try{
            const itineraries = await Itinerary.find(queries)
                .populate('city')
                .populate('user')
                .populate('activies');

            if(itineraries.length > 0){
                return res.status(200).json({
                    success: true,
                    itineraries
                });
            }

            return res.status(404).json({
                success: false,
                message: 'No itineraries were found'
            });

        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error: getting the itineraries'
            });
        }
    },
    getItineraryById: async(req, res) => {
        try {
            const itinerary = await Itinerary.findById(req.params.id)
                .populate('city')
                .populate('user')
                .populate('activies');

            if(itinerary){
                return res.status(200).json({
                    success: true,
                    itinerary
                });
            }

            return res.status(404).json({
                success: false,
                message: 'Itinerary not found'
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Itinerary not found'
            });
        }
    },
    getItinerariesByCityId: async (req, res) => {
        try {
            const itineraries = await Itinerary.find({ city: req.params.cityId })
                .populate('user')
                .populate('activies');

            if (itineraries.length > 0) {
                return res.status(200).json({
                    success: true,
                    itineraries
                });
            }

            return res.status(404).json({
                success: false,
                message: 'No itineraries were found for the specified city'
            });

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error: getting the itineraries'
            });
        }
    },
    createItinerary: async(req, res) => {
        try {
            const newItinary = await Itinerary.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'Itinerary created successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error creating itinerary'
            });
        }
    },
    updateItinerary: async (req, res) => {
        try {
            await Itinerary.updateOne({_id: req.params.id}, req.body);
            return res.status(200).json({
                success: true,
                message: 'Itinerary updated successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error updating itinerary'
            });
        }
    },
    deleteItinerary: async (req, res) => {
        try {
            await Itinerary.deleteOne({_id: req.params.id});
            return res.status(200).json({
                success: true,
                message: 'Itinerary deleted successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error deleting itinerary'
            });
        }
    }
}

export default controller;