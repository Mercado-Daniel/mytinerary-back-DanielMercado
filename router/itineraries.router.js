import express from 'express';
import itinirariesController from '../controllers/itiniraries.controller.js'

const router = express.Router();
const {getItinerariesByCityId, getItineraries, createItinerary, getItineraryById, updateItinerary, deleteItinerary} = itinirariesController;

router.get('/', getItineraries);

router.get('/:id', getItineraryById);

router.get('/by-city/:cityId', getItinerariesByCityId);

router.post('/', createItinerary);

router.put('/:id', updateItinerary);

router.delete('/:id', deleteItinerary);


export default router;